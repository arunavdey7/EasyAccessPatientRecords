from flask.json import jsonify
from flask import app, request
from sqlalchemy import func
from models import *
import hashlib,jwt
db.create_all()
db.session.commit()

key='super-secret'

# Api for Patient Register
@app.route('/api/patientregister', methods=['POST'])
def patientRegisterSuccess():
    try:    
        data=request.get_json()
        password=data['password']
        hashpass= hashlib.md5(bytes(str(password),encoding ='utf-8')).hexdigest()
        patient_check= Patient_details.query.filter_by(email=data['email']).first()
        if not patient_check:
            entry = Patient_details(name=data['name'],age=data['age'],email=data['email'],password=hashpass,contact=data['contact'],gender=data['gender'],address=data['address'])
            db.session.add(entry)
            db.session.commit()
            return jsonify({'success':True,'message':'Registration Successful'})
        else:
            return jsonify({'success':False,'message':'Patient Already Existed for this email'}), 404 
    except Exception as e:
        return jsonify({'success':False,'message':'not recieved JSON data'}),400


# Api for Doctor Register
@app.route('/api/doctorregister', methods=['POST'])
def doctorRegisterSuccess():
    try:    
        data=request.get_json()
        password=data['password']
        hashpass= hashlib.md5(bytes(str(password),encoding ='utf-8')).hexdigest()
        doctor_check= doctor_details.query.filter_by(email=data['email']).first()
        if not doctor_check:
            entry = doctor_details(name=data['name'],category = data['category'],email=data['email'],password=hashpass)
            db.session.add(entry)
            db.session.commit()
            return jsonify({'success':True,'message':'Registration Successful'})
        else:
            return jsonify({'success':False,'message':'Doctor Already Existed for this email'}), 404 
    except Exception as e:
        return jsonify({'success':False,'message':'not recieved JSON data'}),400

# Api for Admin Login
@app.route('/api/adminlogin',methods=['POST'])
def adminLoginSuccess():
    try:
        all_data=request.get_json()
        result = Admin_Login.query.filter_by(email=all_data['email'], password=all_data['password']).first()
        if result:
            payload={"email":all_data['email'],"password":all_data['password'] }
            value = jwt.encode(payload, key).decode('UTF-8')
            return jsonify({'success':True,'token':value})
        else:
            return jsonify({'success':False,'message':'Wrong Password'}), 404
    except:
        return jsonify({'success':False,'message':'not recieved JSON data'}), 400

# Api for Patient Login
@app.route('/api/patientlogin', methods=['POST'])
def patientLoginSucess():
    try:
        all_data=request.get_json()
        hashedPassword = hashlib.md5(bytes(str(all_data['password']),encoding='utf-8'))
        hashedPassword = hashedPassword.hexdigest()
        result = Patient_details.query.filter_by(email=all_data['email'], password=hashedPassword).first()
        if result:
            payload={"email":all_data['email'],"password":hashedPassword }
            value = jwt.encode(payload, key)
            patient_info={'name':result.name,'age':result.age,'email':result.email,'contact':result.contact,'gender':result.gender,'address':result.address}
            return jsonify({'success':True,'token':value.decode('utf-8'), 'patient_info':patient_info})
        else:
            return jsonify({'success':False,'message':'invalid email/Password'}), 404
    except:
        return jsonify({'success':False,'message':'not recieved JSON data'}),400


# Api for Doctor Login
@app.route('/api/doctorlogin', methods=['POST'])
def doctorLoginSucess():
    try:
        all_data=request.get_json()
        hashedPassword = hashlib.md5(bytes(str(all_data['password']),encoding='utf-8'))
        hashedPassword = hashedPassword.hexdigest()
        result = doctor_details.query.filter_by(email=all_data['email'], password=hashedPassword).first()
        if result:
            payload={"email":all_data['email'],"password":hashedPassword }
            value = jwt.encode(payload, key)
            doctor_info={'name':result.name,'category':result.category,'email':result.email}
            return jsonify({'success':True,'token':value.decode('utf-8'), 'doctor_info':doctor_info})
        else:
            return jsonify({'success':False,'message':'invalid email/Password'}), 404
    except:
        return jsonify({'success':False,'message':'not recieved JSON data'}),400      

@app.route('/api/ips/medicationsummary/getallmedicationstatementsforpatient',methods=['GET'])
def getallmedicationstatements():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = Patient_details.query.filter_by(email=value['email'], password=value['password']).first()
        if res:
            
            res2=Medication_statement.query.filter_by(patient_id=res.id).all()
            
            output=[]
            for res3 in res2:
                
                result = Medication.query.filter_by(order_id=res3.order_id).first()
                
                obj={}
                
                obj['order_id']=result.order_id
                obj['medication_item']=result.medication_item
                
                
                
                output.append(obj)
            return jsonify({"success":True, "allmedicationstatements":output})
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400

@app.route('/api/ips/medicationsummary/getallmedicationstatementsfordoctor',methods=['GET'])
def getallmedicationstatementsfordoctor():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = doctor_details.query.filter_by(email=value['email'], password=value['password']).first()
        if res:
            data=request.get_json()
            Patient_Id=data['patient_id']

            
            res2=Medication_statement.query.filter_by(patient_id=Patient_Id).all()
            if res2:
                
                output=[]
                for res3 in res2:
                    
                    result = Medication.query.filter_by(order_id=res3.order_id).first()
                    
                    obj={}
                    
                    obj['order_id']=result.order_id
                    obj['medication_item']=result.medication_item
                    
                    
                    
                    output.append(obj)
            return jsonify({"success":True, "allmedicationstatements":output})
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400


@app.route('/api/ips/medicationsummary/getmedicationstatementforpatient',methods=['GET'])
def getmedicationstatement():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = Patient_details.query.filter_by(email=value['email'], password=value['password']).first()

        if res:
            Ord=request.get_json()
            Order_Id=Ord['order_id']

            res1=db.session.query(Medication_statement).filter(Order_Id==Medication_statement.order_id,res.id==Medication_statement.patient_id).all()
            result = db.session.query(Medication_summary,Medication,Dosage,Administration_details,Timing_non_daily).filter(res1[0].patient_id==Medication_summary.patient_id,Order_Id==Medication.order_id,Order_Id==Dosage.order_id,Order_Id==Administration_details.order_id,Order_Id==Timing_non_daily.order_id).all()
            out={}
            obj={}
            obj['order_id']=res1[0].order_id
            obj['patient_id']=result[0].Medication_summary.patient_id
            #obj['global_exclusion_of_medication_use']=result[0].Medication_summary.global_exclusion_of_medication_use
            #obj['absence_of_info_statement']=result[0].Medication.absence_of_info_statement
            #obj['absence_of_info_protocol_last_updated']=result[0].Medication.absence_of_info_protocol_last_updated
            l=obj

            obj={}
            obj['order_id']=result[0].Medication.order_id
            obj['medication_item']=result[0].Medication.medication_item
            obj['medication_name']=result[0].Medication.medication_name
            obj['medication_form']=result[0].Medication.medication_form
            obj['medication_category']=result[0].Medication.medication_category
            obj['medication_strength_numerator']=result[0].Medication.medication_strength_numerator
            obj['medication_strength_numerator_unit']=result[0].Medication.medication_strength_numerator_unit
            obj['medication_strength_denominator']=result[0].Medication.medication_strength_denominator
            obj['medication_strength_denominator_unit']=result[0].Medication.medication_strength_denominator_unit
            obj['unit_of_presentation']=result[0].Medication.unit_of_presentation
            obj['strength']=result[0].Medication.strength
            obj['manufacturer']=result[0].Medication.manufacturer
            obj['batch_id']=result[0].Medication.batch_id
            obj['expiry']=result[0].Medication.expiry
            obj['amount']=result[0].Medication.amount
            obj['amount_unit']=result[0].Medication.amount_unit
            obj['alternate_amount']=result[0].Medication.alternate_amount
            obj['alternate_amount_unit']=result[0].Medication.alternate_amount_unit
            obj['role']=result[0].Medication.role
            obj['description']=result[0].Medication.description

            m=obj
            


            obj={}
            obj['id']=result[0].Dosage.id
            obj['order_id']=result[0].Dosage.order_id
            obj['dose_amount']=result[0].Dosage.dose_amount
            obj['dose_unit']=result[0].Dosage.dose_unit
            obj['dose_formula']=result[0].Dosage.dose_formula
            obj['dose_description']=result[0].Dosage.dose_description
            obj['frequency_lower']=result[0].Dosage.frequency_lower
            obj['frequency_lower_rate']=result[0].Dosage.frequency_lower_rate
            obj['frequency_higher']=result[0].Dosage.frequency_higher
            obj['frequency_higher_rate']=result[0].Dosage.frequency_higher_rate
        
            obj['interval']=result[0].Dosage.interval
            obj['specific_time']=result[0].Dosage.specific_time
            obj['specific_time_lower']=result[0].Dosage.specific_time_lower
            obj['specific_time_upper']=result[0].Dosage.specific_time_upper
            obj['timing_description']=result[0].Dosage.timing_description
            obj['exact_timing_critical']=result[0].Dosage.exact_timing_critical
            obj['as_required']=result[0].Dosage.as_required
            obj['as_required_criterion']=result[0].Dosage.as_required_criterion
            obj['event_name']=result[0].Dosage.event_name
            obj['time_offset']=result[0].Dosage.time_offset
            obj['on']=result[0].Dosage.on
            obj['off']=result[0].Dosage.off
            obj['repetetions']=result[0].Dosage.repetetions
            n=obj



            obj={}
            obj['id']=result[0].Administration_details.id
            obj['order_id']=result[0].Administration_details.order_id
            obj['route']=result[0].Administration_details.route
            obj['body_site']=result[0].Administration_details.body_site
            o=obj



            obj={}
            obj['id']=result[0].Timing_non_daily.id
            obj['order_id']=result[0].Timing_non_daily.order_id
            obj['repetetion_interval']=result[0].Timing_non_daily.repetetion_interval
            obj['frequency_lower']=result[0].Timing_non_daily.frequency_lower
            obj['frequency_lower_rate']=result[0].Timing_non_daily.frequency_lower_rate
            obj['frequency_higher']=result[0].Timing_non_daily.frequency_higher
            obj['frequency_higher_rate']=result[0].Timing_non_daily.frequency_higher_rate
            obj['specific_date']=result[0].Timing_non_daily.specific_date
            obj['specific_date_lower']=result[0].Timing_non_daily.specific_date_lower
            obj['specific_date_upper']=result[0].Timing_non_daily.specific_date_upper
            obj['specific_day_of_week']=result[0].Timing_non_daily.specific_day_of_week
            obj['specific_day_of_month']=result[0].Timing_non_daily.specific_day_of_month
            obj['timing_description']=result[0].Timing_non_daily.timing_description
            obj['event_name']=result[0].Timing_non_daily.event_name
            obj['event_time_offset']=result[0].Timing_non_daily.event_time_offset
            obj['on']=result[0].Timing_non_daily.on
            obj['off']=result[0].Timing_non_daily.off
            obj['repetetions']=result[0].Timing_non_daily.repetetions
            p=obj
            
            out={'medication_statement':l,"medication":m,"dosage":n,"administration_details":o,"timing_non-daily":p}
            return jsonify({"success":True, "data":out})
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400


@app.route('/api/ips/medicationsummary/getmedicationstatementfordoctor',methods=['GET'])
def getmedicationstatementfordoctor():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = doctor_details.query.filter_by(email=value['email'], password=value['password']).first()
        data=request.get_json()
        Patient_Id=data['patient_id']
        res3=Patient_details.query.filter_by(id = data['patient_id']).first()
        
        if res and res3:
            
            Order_Id=data['order_id']
            

            res1=db.session.query(Medication_statement).filter(Order_Id==Medication_statement.order_id,Patient_Id==Medication_statement.patient_id).all()
            result = db.session.query(Medication_summary,Medication,Dosage,Administration_details,Timing_non_daily).filter(res1[0].patient_id==Medication_summary.patient_id,Order_Id==Medication.order_id,Order_Id==Dosage.order_id,Order_Id==Administration_details.order_id,Order_Id==Timing_non_daily.order_id).all()
            out={}
            obj={}
            obj['order_id']=res1[0].order_id
            obj['patient_id']=result[0].Medication_summary.patient_id
            #obj['global_exclusion_of_medication_use']=result[0].Medication_summary.global_exclusion_of_medication_use
            #obj['absence_of_info_statement']=result[0].Medication.absence_of_info_statement
            #obj['absence_of_info_protocol_last_updated']=result[0].Medication.absence_of_info_protocol_last_updated
            l=obj

            obj={}
            obj['order_id']=result[0].Medication.order_id
            obj['medication_item']=result[0].Medication.medication_item
            obj['medication_name']=result[0].Medication.medication_name
            obj['medication_form']=result[0].Medication.medication_form
            obj['medication_category']=result[0].Medication.medication_category
            obj['medication_strength_numerator']=result[0].Medication.medication_strength_numerator
            obj['medication_strength_numerator_unit']=result[0].Medication.medication_strength_numerator_unit
            obj['medication_strength_denominator']=result[0].Medication.medication_strength_denominator
            obj['medication_strength_denominator_unit']=result[0].Medication.medication_strength_denominator_unit
            obj['unit_of_presentation']=result[0].Medication.unit_of_presentation
            obj['strength']=result[0].Medication.strength
            obj['manufacturer']=result[0].Medication.manufacturer
            obj['batch_id']=result[0].Medication.batch_id
            obj['expiry']=result[0].Medication.expiry
            obj['amount']=result[0].Medication.amount
            obj['amount_unit']=result[0].Medication.amount_unit
            obj['alternate_amount']=result[0].Medication.alternate_amount
            obj['alternate_amount_unit']=result[0].Medication.alternate_amount_unit
            obj['role']=result[0].Medication.role
            obj['description']=result[0].Medication.description

            m=obj
            


            obj={}
            obj['id']=result[0].Dosage.id
            obj['order_id']=result[0].Dosage.order_id
            obj['dose_amount']=result[0].Dosage.dose_amount
            obj['dose_unit']=result[0].Dosage.dose_unit
            obj['dose_formula']=result[0].Dosage.dose_formula
            obj['dose_description']=result[0].Dosage.dose_description
            obj['frequency_lower']=result[0].Dosage.frequency_lower
            obj['frequency_lower_rate']=result[0].Dosage.frequency_lower_rate
            obj['frequency_higher']=result[0].Dosage.frequency_higher
            obj['frequency_higher_rate']=result[0].Dosage.frequency_higher_rate
            
            obj['interval']=result[0].Dosage.interval
            obj['specific_time']=result[0].Dosage.specific_time
            obj['specific_time_lower']=result[0].Dosage.specific_time_lower
            obj['specific_time_upper']=result[0].Dosage.specific_time_upper
            obj['timing_description']=result[0].Dosage.timing_description
            obj['exact_timing_critical']=result[0].Dosage.exact_timing_critical
            obj['as_required']=result[0].Dosage.as_required
            obj['as_required_criterion']=result[0].Dosage.as_required_criterion
            obj['event_name']=result[0].Dosage.event_name
            obj['time_offset']=result[0].Dosage.time_offset
            obj['on']=result[0].Dosage.on
            obj['off']=result[0].Dosage.off
            obj['repetetions']=result[0].Dosage.repetetions
            n=obj



            obj={}
            obj['id']=result[0].Administration_details.id
            obj['order_id']=result[0].Administration_details.order_id
            obj['route']=result[0].Administration_details.route
            obj['body_site']=result[0].Administration_details.body_site
            o=obj



            obj={}
            obj['id']=result[0].Timing_non_daily.id
            obj['order_id']=result[0].Timing_non_daily.order_id
            obj['repetetion_interval']=result[0].Timing_non_daily.repetetion_interval
            obj['frequency_lower']=result[0].Timing_non_daily.frequency_lower
            obj['frequency_lower_rate']=result[0].Timing_non_daily.frequency_lower_rate
            obj['frequency_higher']=result[0].Timing_non_daily.frequency_higher
            obj['frequency_higher_rate']=result[0].Timing_non_daily.frequency_higher_rate
            obj['specific_date']=result[0].Timing_non_daily.specific_date
            obj['specific_date_lower']=result[0].Timing_non_daily.specific_date_lower
            obj['specific_date_upper']=result[0].Timing_non_daily.specific_date_upper
            obj['specific_day_of_week']=result[0].Timing_non_daily.specific_day_of_week
            obj['specific_day_of_month']=result[0].Timing_non_daily.specific_day_of_month
            obj['timing_description']=result[0].Timing_non_daily.timing_description
            obj['event_name']=result[0].Timing_non_daily.event_name
            obj['event_time_offset']=result[0].Timing_non_daily.event_time_offset
            obj['on']=result[0].Timing_non_daily.on
            obj['off']=result[0].Timing_non_daily.off
            obj['repetetions']=result[0].Timing_non_daily.repetetions
            p=obj
            
            out={'medication_statement':l,"medication":m,"dosage":n,"administration_details":o,"timing_non-daily":p}
            return jsonify({"success":True, "data":out})
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400



@app.route('/api/ips/medicationsummary/addmedicationstatement',methods=['POST'])
def addmedicationstatement():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = Admin_Login.query.filter_by(email=value['email'], password=value['password']).first()
        data=request.get_json()
        result1 = Patient_details.query.filter_by(id = data['patient_id']).first()

        if res and result1:
            
            
            result2 = Medication_summary.query.filter_by(patient_id = data['patient_id']).first()
            if result2:
                result2.global_exclusion_of_adverse_reactions = data['global_exclusion_of_adverse_reactions']
                result2.absence_of_information_statement = data['absence_of_information_statement']
                result2.absence_of_information_protocol_last_updated = data['absence_of_information_protocol_last_updated']
            else:
                entry = Medication_summary(patient_id=data['patient_id'],global_exclusion_of_medication_use=data['global_exclusion_of_adverse_reactions'],absence_of_info_statement=data['absence_of_information_statement'],absence_of_info_protocol_last_updated=data['absence_of_information_protocol_last_updated'])
                db.session.add(entry)
            
            
            entry = Medication_statement(patient_id=data['patient_id'])
            db.session.add(entry)
            db.session.commit()

            res2=db.session.query(Medication_statement).filter(data['patient_id']==Medication_statement.patient_id).all()
            x=len(res2)
            row = db.session.query(func.max(res2[x-1].order_id)).first()
            entry = Medication(order_id=row[0],medication_item=data['medication_item'],medication_name=data['medication_name'],medication_form=data['medication_form'],medication_category=data['medication_category']
            ,medication_strength_numerator=data['medication_strength_numerator'],medication_strength_numerator_unit=data['medication_strength_numerator_unit'],medication_strength_denominator=data['medication_strength_denominator'],medication_strength_denominator_unit=data['medication_strength_denominator_unit'],
            unit_of_presentation=data['unit_of_presentation'],strength=data['strength'],manufacturer=data['manufacturer'],batch_id=data['batch_id'],
            expiry=data['expiry'],amount=data['amount'],amount_unit=data['amount_unit'],alternate_amount=data['alternate_amount'],
            alternate_amount_unit=data['alternate_amount_unit'],role=data['role'],description=data['description'])
            db.session.add(entry)
            

            entry = Dosage(order_id=row[0],dose_amount=data['dose_amount'],dose_unit=data['dose_unit'],dose_formula=data['dose_formula'],dose_description=data['dose_description']
            ,frequency_lower=data['dose_frequency_lower'],frequency_lower_rate=data['dose_frequency_lower_rate'],frequency_higher=data['dose_frequency_higher'],frequency_higher_rate=data['dose_frequency_higher_rate'],
            interval=data['dose_interval'],specific_time=data['dose_specific_time'],specific_time_lower=data['dose_specific_time_lower'],specific_time_upper=data['dose_specific_time_upper'],
            timing_description=data['dose_timing_description'],exact_timing_critical=data['dose_exact_timing_critical'],as_required=data['as_required'],as_required_criterion=data['as_required_criterion'],
            event_name=data['dose_event_name'],time_offset=data['dose_time_offset'],on=data['dose_on']
            ,off=data['dose_off'],repetetions=data['dose_repetetions'])
            db.session.add(entry)
        

            entry = Administration_details(order_id=row[0],route=data['route'],body_site=data['body_site'])
            db.session.add(entry)
        

            entry = Timing_non_daily(order_id=row[0],repetetion_interval=data['time_repetetion_interval'],frequency_lower=data['time_frequency_lower'],frequency_lower_rate=data['time_frequency_lower_rate'],frequency_higher=data['time_frequency_higher']
            ,frequency_higher_rate=data['time_frequency_higher_rate'],specific_date=data['time_specific_date'],specific_date_lower=data['time_specific_date_lower'],specific_date_upper=data['time_specific_date_upper'],
            specific_day_of_week=data['time_specific_day_of_week'],specific_day_of_month=data['time_specific_day_of_month'],timing_description=data['timing_description'],event_name=data['time_event_name'],
            event_time_offset=data['time_event_time_offset'],on=data['timing_on'],off=data['timing_off'],repetetions=data['timing_repetetions'])
            db.session.add(entry)

            db.session.commit() 
            return jsonify({'success':True,'message':'item added successfully'})


        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400


# APIS FOR PRESCRIPTION
# ADD prescription POST 
@app.route('/api/addPrescription', methods=['POST'])
def addPrescription():
    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]

        docResult = doctor_details.query.filter_by(email=email,password=password).first()
        if docResult:
            docId = docResult.id
            data = request.get_json()
            # patId = data['patient_id']
            result = Patient_details.query.filter_by(email = data['patient_email']).first()
            if result:
                patId = result.id
                entry = Prescription(patientId = patId,doctorId = docId)
                db.session.add(entry)
                db.session.commit()
                id = Prescription.query.filter_by(patientId = patId,doctorId = docId).order_by(Prescription.prescriptionId.desc()).first().prescriptionId
                for medOrd in data['medOrders']:
                    entry_med_ord = Medication_Order(
                    prescriptionId = id,
                    medicationItem = medOrd['medicationItem'],
                    route = medOrd['route'],
                    dosageInstruction = medOrd['dosageInstruction'],
                    maximumAmount = medOrd['maximumAmount'],
                    maximumAmountDoseUnit = medOrd['maximumAmountDoseUnit'],
                    allowedPeriod = medOrd['allowedPeriod'],
                    overrideReason = medOrd['overrideReason'],
                    additionalInstructions = medOrd['additionalInstructions'],
                    reasons = medOrd['reasons'],
                    status=medOrd['status'],
                    dateDiscontinued = medOrd['dateDiscontinued'],
                    dateWritten = medOrd['dateWritten'],
                    numOfRepeatsAllowed = medOrd['numOfRepeatsAllowed'],
                    validityPeriod = medOrd['validityPeriod'],
                    dispenseInstrution =  medOrd['dispenseInstrution'],
                    dispenseAmountDescription = medOrd['dispenseAmountDescription'],
                    dispenseAmount = medOrd['dispenseAmount'],
                    dispenseAmountUnit = medOrd['dispenseAmountUnit'],
                    comment = medOrd['comment'],
                    dose_unit   =  medOrd['dose_unit'],
                    dose_frequency = medOrd['dose_frequency'],
                    dose_timing   = medOrd['dose_timing'],
                    dose_duration = medOrd['dose_duration'],

                    repetition_interval = medOrd['repetition_interval'],
                    Specific_date = medOrd['Specific_date'],
                    specific_day_of_week = medOrd['specific_day_of_week'],
                    Specific_day_of_month = medOrd['Specific_day_of_month'],
                    specific_Event = medOrd['specific_Event'],

                    substance_name = medOrd['substance_name'],
                    form = medOrd['form'],
                    strength = medOrd['strength'],
                    strengthUnit =medOrd['strengthUnit'],
                    diluentAmount = medOrd['diluentAmount'],
                    diluentunit = medOrd['diluentunit'],
                    description = medOrd['description']
                    )
                    db.session.add(entry_med_ord)

                db.session.commit()
                return jsonify({'success':True,'message':'Prescription Created Successfully'})
            else:
                return jsonify({'success':False,'message':'Invalid Patient'}),404
        else:
            return jsonify({'success':False,'message':'Not Authorised'}),404

    except Exception as e :
        return jsonify({'success':False,'message':'not recieved JSON/Token data'}),400 

        
# GET API for prescription
@app.route('/api/getAllPrescriptionsForPatient', methods=['GET'])
def getAllPrescriptionsForPatient():
    try:
        token = request.headers['token']    #patient token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]

        
        patRes = Patient_details.query.filter_by(email=email,password=password).first()
        if patRes:
            patId = patRes.id
            prescriptions = Prescription.query.filter_by(patientId=patId).all()
            result = []
            for prescription in prescriptions:
                obj = {}
                docName = doctor_details.query.filter_by(id = prescription.doctorId).first().name
                obj['doctorName'] = docName
                obj['prescriptionId'] = prescription.prescriptionId
                result.append(obj)
            return jsonify({'allPrescriptions':result})        
            
        else:
            return jsonify({'success':False,'message':'Not Authorised'}),404

    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON/Token data'}),400 


# For doctor

@app.route('/api/getAllPrescriptionsForDoctor', methods=['GET'])
def getAllPrescriptionsForDoctor():

    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]
        
        docRes = doctor_details.query.filter_by(email=email,password=password).first()
        if docRes:
            docId = docRes.id
            prescriptions = Prescription.query.filter_by(doctorId=docId).all()
            result = []
            for prescription in prescriptions:
                obj = {}
                patName = Patient_details.query.filter_by(id = prescription.patientId).first().name
                obj['patientName'] = patName
                obj['prescriptionId'] = prescription.prescriptionId
                result.append(obj)
            return jsonify({'allPrescriptions':result})
            
            
        else:
            return jsonify({'success':False,'message':'Not Authorised'}),404

    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON/Token data'}),400 




# getPrescription by ID
@app.route('/api/getPrescriptionByIdForDoctor', methods=['GET'])
def getPrescriptionByIdForDoct():
    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]

        docRes = doctor_details.query.filter_by(email=email,password=password).first()
        
        if docRes:
            
            data = request.get_json()
            presId = data['prescriptionId']
            docverfify = Prescription.query.filter_by(prescriptionId=presId, doctorId =docRes.id).first()
            if docverfify:
                result = Medication_Order.query.filter_by(prescriptionId = presId).all()
                if len(result):
                    output = []
                    for item in result:
                        detail = {}
                        detail['medicationItem'] = item.medicationItem
                        detail['medId'] = item.medId
                        output.append(detail)
                    return jsonify({'Prescription':output})
                else:
                    return jsonify({'success':False,'message':'Invalid prescription id'}),404
            else:
                return jsonify({'success':False,'message':'Not Authorised'}),404
        else:
            return jsonify({'success':False,'message':'Not Authorised, Not a Doctor'}),404

    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON/Token data'}),400 

# getprescription by id
@app.route('/api/getPrescriptionByIdForPatient', methods=['GET'])
def getPrescriptionByIdForPat():
    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]

        patRes = Patient_details.query.filter_by(email=email,password=password).first()
        
        if patRes:
            
            data = request.get_json()
            presId = data['prescriptionId']
            patverfify = Prescription.query.filter_by(prescriptionId=presId, patientId =patRes.id).first()
            if patverfify:
                result = Medication_Order.query.filter_by(prescriptionId = presId).all()
                if len(result):
                    output = []
                    for item in result:
                        detail = {}
                        detail['medicationItem'] = item.medicationItem
                        detail['medId'] = item.medId
                        output.append(detail)
                    return jsonify({'Prescription':output})
                else:
                    return jsonify({'success':False,'message':'Invalid prescription id'}),404
            else:
                return jsonify({'success':False,'message':'Not Authorised'}),404
        else:
            return jsonify({'success':False,'message':'Not Authorised, Not a Patient'}),404

    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON/Token data'}),400

#getmedication order by id API
@app.route('/api/getMedicationOrderByIdForDoctor', methods=['GET'])
def getMedicationOrderByIdForDoctor():
    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]

        docRes = doctor_details.query.filter_by(email=email,password=password).first()
        if docRes:

            data = request.get_json()
            medId = data['medId']
            result = Medication_Order.query.filter_by(medId = medId).first()
            if result:
                output = {}
                output['medicationItem'] = result.medicationItem
                output['route'] =  result.route
                output['dosageInstruction'] = result.dosageInstruction
                output['maximumAmount'] = result.maximumAmount 
                output['maximumAmountDoseUnit'] =result.maximumAmountDoseUnit
                output['allowedPeriod'] =  result.allowedPeriod
                output['overrideReason'] = result.overrideReason
                output['additionalInstructions'] =result.additionalInstructions
                output['reasons'] =result.reasons
                output['status'] =result.status
                output['dateDiscontinued']=result.dateDiscontinued
                output['dateWritten']=result.dateWritten
                output['numOfRepeatsAllowed']=result.numOfRepeatsAllowed
                output['validityPeriod']=result.validityPeriod
                output['dispenseInstrution']=result.dispenseInstrution
                output['dispenseAmountDescription']=result.dispenseAmountDescription
                output['dispenseAmount']=result.dispenseAmount
                output['dispenseAmountUnit']=result.dispenseAmountUnit
                output['comment']=result.comment
                output['dose_unit']=result.dose_unit
                output['dose_frequency']=result.dose_frequency
                output['dose_timing']=result.dose_timing
                output['dose_duration']=result.dose_duration
                output['repetition_interval']=result.repetition_interval
                output['Specific_date']=result.Specific_date
                output['specific_day_of_week']=result.specific_day_of_week
                output['Specific_day_of_month']=result.Specific_day_of_month
                output['specific_Event']=result.specific_Event
                output['substance_name']=result.substance_name
                output['form']=result.form
                output['strength']=result.strength
                output['strengthUnit']=result.strengthUnit
                output['diluentAmount']=result.diluentAmount
                output['diluentunit']=result.diluentunit
                output['description']=result.description
                return jsonify(output)
            else:
                return jsonify({'success':False,'message':'Invalid Med Id'}),404
        else:
            return jsonify({'success':False,'message':'Not Authorised, Not a Doctor'}),404

    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON/Token data'}),400 
    


#getmedication order by id API
@app.route('/api/getMedicationOrderByIdForPatient', methods=['GET'])
def getMedicationOrderByIdForPatient():
    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]

        patRes = Patient_details.query.filter_by(email=email,password=password).first()
        if patRes:

            data = request.get_json()
            medId = data['medId']
            result = Medication_Order.query.filter_by(medId = medId).first()
            if result:
                output = {}
                output['medicationItem'] = result.medicationItem
                output['route'] =  result.route
                output['dosageInstruction'] = result.dosageInstruction
                output['maximumAmount'] = result.maximumAmount 
                output['maximumAmountDoseUnit'] =result.maximumAmountDoseUnit
                output['allowedPeriod'] =  result.allowedPeriod
                output['overrideReason'] = result.overrideReason
                output['additionalInstructions'] =result.additionalInstructions
                output['reasons'] =result.reasons
                output['status'] =result.status
                output['dateDiscontinued']=result.dateDiscontinued
                output['dateWritten']=result.dateWritten
                output['numOfRepeatsAllowed']=result.numOfRepeatsAllowed
                output['validityPeriod']=result.validityPeriod
                output['dispenseInstrution']=result.dispenseInstrution
                output['dispenseAmountDescription']=result.dispenseAmountDescription
                output['dispenseAmount']=result.dispenseAmount
                output['dispenseAmountUnit']=result.dispenseAmountUnit
                output['comment']=result.comment
                output['dose_unit']=result.dose_unit
                output['dose_frequency']=result.dose_frequency
                output['dose_timing']=result.dose_timing
                output['dose_duration']=result.dose_duration
                output['repetition_interval']=result.repetition_interval
                output['Specific_date']=result.Specific_date
                output['specific_day_of_week']=result.specific_day_of_week
                output['Specific_day_of_month']=result.Specific_day_of_month
                output['specific_Event']=result.specific_Event
                output['substance_name']=result.substance_name
                output['form']=result.form
                output['strength']=result.strength
                output['strengthUnit']=result.strengthUnit
                output['diluentAmount']=result.diluentAmount
                output['diluentunit']=result.diluentunit
                output['description']=result.description
                return jsonify(output)
            else:
                return jsonify({'success':False,'message':'Invalid Med Id'}),404
        else:
            return jsonify({'success':False,'message':'Not Authorised, Not a Patient'}),404

    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON/Token data'}),400 


# Ajay

# API for POST PREGNANCY 
@app.route('/api/addPregnancyDetails',methods=['POST'])
def addPregnancyDetails():
    try:
        token = request.headers['token']
        decoded = jwt.decode(token, options={"verify_signature": False})
        admin_check= Admin_Login.query.filter_by(email=decoded["email"], password=decoded['password']).first()
        if admin_check:
            data=request.get_json()
            entry = Pregnancy(
                patient_id=data['patient_id'],
                pregnancy_status = data['pregnancy_status'],
                pregnancy_outcome = data['pregnancy_outcome'],
                estimated_date_of_delivery_by_date_of_conseption = data['estimated_date_of_delivery_by_date_of_conseption'],
                estimated_date_of_delivery_by_cycle = data['estimated_date_of_delivery_by_cycle'],
                estimated_date_of_delivery_by_ultrasound = data['estimated_date_of_delivery_by_ultrasound'],
                agreed_date = data['agreed_date'],
                protocol_last_updated = data['protocol_last_updated'],
                exclusion_of_pregnancy_statement = data['exclusion_of_pregnancy_statement']
            )
            db.session.add(entry)
            db.session.commit()
            return jsonify({'success':True,'message':'pregnancy details Added successfully'})
        else:
            return jsonify({'success':False,'message':'Not Authorised'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400


# Api for Get past history of PAtient BY PAtient Id
@app.route('/api/getPregnancyRecordForPatient',methods=['GET'])
def getPregnancyRecordForPatient():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = Patient_details.query.filter_by(email=value['email'], password=value['password']).first()
        if res:
            result = db.session.query(Pregnancy).filter(Pregnancy.patient_uid==res.id).all()
            output=[]     
            for value in result:
                pat = {}
                pat['patient_id']=value.patient_uid
                pat['pregnancy_status']=value.pregnancy_status
                pat['pregnancy_outcome']=value.pregnancy_outcome
                pat['estimated_date_of_delivery_by_date_of_conseption']=value.estimated_date_of_delivery_by_date_of_conseption
                pat['estimated_date_of_delivery_by_cycle']=value.estimated_date_of_delivery_by_cycle
                pat['estimated_date_of_delivery_by_ultrasound']=value.estimated_date_of_delivery_by_ultrasound
                pat['agreed_date']=value.agreed_date
                pat['protocol_last_updated']=value.protocol_last_updated
                pat['exclusion_of_pregnancy_statement']=value.exclusion_of_pregnancy_statement
                output.append(pat)
                print(output)
            if output:    
                return jsonify({"history":output})
            else:
                return jsonify({'success':False,'message':'patient_id is not present'}) 
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404       
    except:
        return jsonify({'success':False,'message':'not recieved JSON data'}),400      
    

# Api for Get past history of PAtient BY Doctor 
@app.route('/api/getPregnancyRecordForDoctor',methods=['GET'])
def getPregnancyRecordForDoctor():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = doctor_details.query.filter_by(email=value['email'], password=value['password']).first()
        if res:
            result = db.session.query(Pregnancy).filter(Pregnancy.patient_id==res.id).all()
            output=[]     
            for value in result:
                pat = {}
                pat['patient_id']=value.patient_id
                pat['pregnancy_status']=value.pregnancy_status
                pat['pregnancy_outcome']=value.pregnancy_outcome
                pat['estimated_date_of_delivery_by_date_of_conseption']=value.estimated_date_of_delivery_by_date_of_conseption
                pat['estimated_date_of_delivery_by_cycle']=value.estimated_date_of_delivery_by_cycle
                pat['estimated_date_of_delivery_by_ultrasound']=value.estimated_date_of_delivery_by_ultrasound
                pat['agreed_date']=value.agreed_date
                pat['protocol_last_updated']=value.protocol_last_updated
                pat['exclusion_of_pregnancy_statement']=value.exclusion_of_pregnancy_statement
                output.append(pat)
                print(output)
            if output:    
                return jsonify({"history":output})
            else:
                return jsonify({'success':False,'message':'doctor_id is not present'}) 
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404       
    except:
        return jsonify({'success':False,'message':'not recieved JSON data'}),400      


# API to add History of procedure
@app.route('/api/addHistoryOfProcedure',methods=['POST'])
def historyOfProcedure():
    try:
        token = request.headers['token']
        decoded = jwt.decode(token, options={"verify_signature": False})
        admin_check= Admin_Login.query.filter_by(email=decoded["email"], password=decoded['password']).first()
        if admin_check:
            data=request.get_json()
            p_id = db.session.query(history_of_procedures,Procedure).filter(history_of_procedures.patient_uid==data['Hist_patient_uid'],Procedure.patient_uid==data['patient_uid']).first()
            if not p_id:
                entry = history_of_procedures(
                    patient_uid=data['Hist_patient_uid'],
                    absence_of_info_absence_statement = data['absence_of_info_absence_statement'],
                    absence_of_info_protocol_last_updated = data['absence_of_info_protocol_last_updated'],
                    global_exclusion_of_procedures = data['global_exclusion_of_procedures']
                )
                db.session.add(entry)
                entry1=Procedure(
                    patient_uid=data['patient_uid'],
                    procedure_name = data['procedure_name'],
                    body_site = data['body_site']
                )
                db.session.add(entry1)
                db.session.commit()
                return jsonify({'success':True,'message':'history of procedure added successfully'})
            else:
                return jsonify({'success':False,'message':'history already present'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400



# GET API FOR Historyofprocedure for Doctor
@app.route('/api/getHistoryOfProcedureforDoctor',methods=['GET'])
def getHistoryOfProcedureForDoctor():
    try:
        token = request.headers['token']
        decoded = jwt.decode(token, options={"verify_signature": False})
        doctor_check= doctor_details.query.filter_by(email=decoded["email"], password=decoded['password']).first()
        if doctor_check:
            all_data=request.get_json()
            patient_uid = all_data['patient_uid']
            result1 = db.session.query(history_of_procedures).filter(history_of_procedures.patient_uid==patient_uid).all()
            result2 = db.session.query(Procedure).filter(Procedure.patient_uid==patient_uid).all()
            output=[]     
            for value in result1:
                pat = {}
                pat['Hist_patient_uid']=value.patient_uid
                pat['absence_of_info_absence_statement']=value.absence_of_info_absence_statement
                pat['absence_of_info_protocol_last_updated']=value.absence_of_info_protocol_last_updated
                pat['global_exclusion_of_procedures']=value.global_exclusion_of_procedures
                output.append(pat)
            for value in result2:  
                pat={}  
                pat['patient_uid']=value.patient_uid
                pat['procedure_name']=value.procedure_name
                pat['body_site']=value.body_site
                output.append(pat)
                
            if output:    
                return jsonify({"history":output})
            else:
                return jsonify({'success':False,'message':'patient_id is not present'})
        else:
            return jsonify({'success':False,'message':'Not Authorised, Not a Doctor'}), 404

    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400     


# GET API FOR Historyofprocedure for Patient
@app.route('/api/getHistoryOfProcedureforPatient',methods=['GET'])
def getHistoryOfProcedureForPatient():
    try:
        token = request.headers['token']
        decoded = jwt.decode(token, options={"verify_signature": False})
        patient_check= Patient_details.query.filter_by(email=decoded["email"], password=decoded['password']).first()
        if patient_check:
            all_data=request.get_json()
            patient_uid = all_data['patient_uid']
            result1 = db.session.query(history_of_procedures).filter(history_of_procedures.patient_uid==patient_uid).all()
            result2 = db.session.query(Procedure).filter(Procedure.patient_uid==patient_uid).all()
            output=[]     
            for value in result1:
                pat = {}
                pat['Hist_patient_uid']=value.patient_uid
                pat['absence_of_info_absence_statement']=value.absence_of_info_absence_statement
                pat['absence_of_info_protocol_last_updated']=value.absence_of_info_protocol_last_updated
                pat['global_exclusion_of_procedures']=value.global_exclusion_of_procedures
                output.append(pat)
            for value in result2:  
                pat={}  
                pat['patient_uid']=value.patient_uid
                pat['procedure_name']=value.procedure_name
                pat['body_site']=value.body_site
                output.append(pat)
                
            if output:    
                return jsonify({"history":output})
            else:
                return jsonify({'success':False,'message':'patient_id is not present'})
        else:
            return jsonify({'success':False,'message':'Not Authorised, Not a Patient'}), 404

    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400

# POST for add immunization by Admin
@app.route('/api/addImmunizations',methods=['POST'])
def addImmunizations():
    try:
        token = request.headers['token']
        decoded = jwt.decode(token, options={"verify_signature": False})
        admin_check= Admin_Login.query.filter_by(email=decoded["email"], password=decoded['password']).first()
        if admin_check:
            data=request.get_json()
            p_id = db.session.query(Immunizations,Immunization).filter(Immunizations.patient_uid==data['patient_id'],Immunization.patient_uid==data['patient_id']).first()
            if not p_id:
                entry = Immunizations(
                    patient_uid=data['patient_id'],
                    absence_of_info_absence_statement = data['absence_of_info_absence_statement'],
                    absence_of_info_protocol_last_updated = data['absence_of_info_protocol_last_updated']
                )
                db.session.add(entry)
                entry1=Immunization(
                    patient_uid=data['patient_uid'],
                    administration_details_route = data['administration_details_route'],
                    administration_details_target_site = data['administration_details_target_site'],
                    sequence_number = data['sequence_number']
                )
                db.session.add(entry1)
                db.session.commit()
                return jsonify({'success':True,'message':'Immunizations added successfully'})
            else:
                return jsonify({'success':False,'message':'Already present'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400
    

# GET API FOR Immunizations for Patient
@app.route('/api/getImmunizationsForPatient',methods=['GET'])
def getImmunizationsForPatient():

    try:
        token = request.headers['token']
        decoded = jwt.decode(token, options={"verify_signature": False})
        patient_check= Patient_details.query.filter_by(email=decoded["email"], password=decoded['password']).first()
        if patient_check:
            all_data=request.get_json()
            patient_uid = all_data['patient_uid']
            result1 = db.session.query(Immunizations).filter(Immunizations.patient_uid==patient_uid).all()
            result2 = db.session.query(Immunization).filter(Immunization.patient_uid==patient_uid).all()
            output=[]   
            for value in result1:
                pat = {}
                pat['patient_uid']=value.patient_uid
                pat['absence_of_info_absence_statement']=value.absence_of_info_absence_statement
                pat['absence_of_info_protocol_last_updated']=value.absence_of_info_protocol_last_updated
                output.append(pat)
            for value in result2:  
                pat={}  
                pat['patient_uid']=value.patient_uid
                pat['administration_details_route']=value.administration_details_route
                pat['administration_details_target_site']=value.administration_details_target_site
                pat['sequence_number']=value.sequence_number
                output.append(pat)
                
            if output:    
                return jsonify({"history":output})
            else:
                return jsonify({'success':False,'message':'patient_id is not present'})
        else:
            return jsonify({'success':False,'message':'Not Authorised, Not a Patient'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400

# GET API FOR Immunizations for Doctor
@app.route('/api/getImmunizationsForDoctor',methods=['GET'])
def getImmunizationsForDoctor():

    try:
        token = request.headers['token']
        decoded = jwt.decode(token, options={"verify_signature": False})
        doctor_check= doctor_details.query.filter_by(email=decoded["email"], password=decoded['password']).first()
        if doctor_check:
            all_data=request.get_json()
            patient_uid = all_data['patient_uid']
            result1 = db.session.query(Immunizations).filter(Immunizations.patient_uid==patient_uid).all()
            result2 = db.session.query(Immunization).filter(Immunization.patient_uid==patient_uid).all()
            output=[]   
            for value in result1:
                pat = {}
                pat['patient_uid']=value.patient_uid
                pat['absence_of_info_absence_statement']=value.absence_of_info_absence_statement
                pat['absence_of_info_protocol_last_updated']=value.absence_of_info_protocol_last_updated
                output.append(pat)
            for value in result2:  
                pat={}  
                pat['patient_uid']=value.patient_uid
                pat['administration_details_route']=value.administration_details_route
                pat['administration_details_target_site']=value.administration_details_target_site
                pat['sequence_number']=value.sequence_number
                output.append(pat)
                
            if output:    
                return jsonify({"history":output})
            else:
                return jsonify({'success':False,'message':'patient_id is not present'})
        else:
            return jsonify({'success':False,'message':'Not Authorised, Not a Doctor'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400

# API for POST Medical Device
@app.route('/api/addMedicalDevice',methods=['POST'])
def addMedicalDevice():
    try:
        token = request.headers['token']
        decoded = jwt.decode(token, options={"verify_signature": False})
        admin_check= Admin_Login.query.filter_by(email=decoded["email"], password=decoded['password']).first()
        if admin_check:
            data=request.get_json()
            entry = Medical_devices(
                patient_uid=data['patient_id'],
                device_name = data['device_name'],
                body_site = data['body_site'],
                type = data['type'],
                description = data['description'],
                UDI = data['UDI'],
                manufacturer = data['manufacturer'],
                date_of_manufacture = data['date_of_manufacture'],
                serial_number = data['serial_number'],
                catalogue_number = data['catalogue_number'],
                model_number = data['model_number'],
                batch_number = data['batch_number'],
                software_version = data['software_version'],
                date_of_expiry = data['date_of_expiry'],
                other_identifier = data['other_identifier'],
                comment = data['comment']

            )
            db.session.add(entry)
            db.session.commit()
            return jsonify({'success':True,'message':'Medical Devices Added successfully'})
        else:
            return jsonify({'success':False,'message':'Not Authorised'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400


# Api for Get MedicalDevice For Patient 
@app.route('/api/getMedicalDeviceForPatient',methods=['GET'])
def getMedicalDeviceForPatient():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = Patient_details.query.filter_by(email=value['email'], password=value['password']).first()
        if res:
            result = db.session.query(Medical_devices).filter(Medical_devices.patient_uid==res.id).all()
            output=[]   
            for value in result:
                pat = {}
                pat['patient_id']=value.patient_uid
                pat['device_name']=value.device_name
                pat['body_site']=value.body_site
                pat['type']=value.type
                pat['description']=value.description
                pat['UDI']=value.UDI
                pat['manufacturer']=value.manufacturer
                pat['date_of_manufacture']=value.date_of_manufacture
                pat['serial_number']=value.serial_number
                pat['catalogue_number']=value.catalogue_number
                pat['model_number']=value.model_number
                pat['batch_number']=value.batch_number
                pat['software_version']=value.software_version
                pat['date_of_expiry']=value.date_of_expiry
                pat['other_identifier']=value.other_identifier
                pat['comment']=value.comment
                output.append(pat)
                print(output)
            if output:    
                return jsonify({"history":output})
            else:
                return jsonify({'success':False,'message':'patient_id is not present'}) 
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404       
    except:
        return jsonify({'success':False,'message':'not recieved JSON data'}),400      

# Api for Get MedicalDevice For Doctor 
@app.route('/api/getMedicalDeviceForDoctor',methods=['GET'])
def getMedicalDeviceForDoctor():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = doctor_details.query.filter_by(email=value['email'], password=value['password']).first()
        if res:
            result = db.session.query(Medical_devices).filter(Medical_devices.patient_uid==res.id).all()
            output=[]   
            for value in result:
                pat = {}
                pat['patient_id']=value.patient_uid
                pat['device_name']=value.device_name
                pat['body_site']=value.body_site
                pat['type']=value.type
                pat['description']=value.description
                pat['UDI']=value.UDI
                pat['manufacturer']=value.manufacturer
                pat['date_of_manufacture']=value.date_of_manufacture
                pat['serial_number']=value.serial_number
                pat['catalogue_number']=value.catalogue_number
                pat['model_number']=value.model_number
                pat['batch_number']=value.batch_number
                pat['software_version']=value.software_version
                pat['date_of_expiry']=value.date_of_expiry
                pat['other_identifier']=value.other_identifier
                pat['comment']=value.comment
                output.append(pat)
                print(output)
            if output:    
                return jsonify({"history":output})
            else:
                return jsonify({'success':False,'message':'Doctor Id is not present'}) 
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404       
    except:
        return jsonify({'success':False,'message':'not recieved JSON data'}),400      

#prashast
#apis for allergies
#add allergy
@app.route('/api/add_allergies_and_intolerances', methods=['POST'])
def add_allergies_and_intolerances():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        admin = Admin_Login.query.filter_by(email=value['email'], password=value['password']).first()
        if admin:
            data = request.get_json()
            result = Patient_details.query.filter_by(id = data['patient_id']).first()
            if result:
                result_allergies = allergies_and_intolerances.query.filter_by(patient_id = data['patient_id']).first()
                if result_allergies:
                    result_allergies.global_exclusion_of_adverse_reactions = data['global_exclusion_of_adverse_reactions']
                    result_allergies.absence_of_information_statement = data['absence_of_information_statement']
                    result_allergies.absence_of_information_protocol_last_updated = data['absence_of_information_protocol_last_updated']
                else:
                    entry_allergies = allergies_and_intolerances(patient_id = data['patient_id'], global_exclusion_of_adverse_reactions = data['global_exclusion_of_adverse_reactions'], absence_of_information_statement = data['absence_of_information_statement'], absence_of_information_protocol_last_updated = data['absence_of_information_protocol_last_updated'])
                    db.session.add(entry_allergies)
                entry_allergy = Allergy(patient_id=data['patient_id'], substance=data['substance'], verification_status=data['verification_status'], critically=data['critically'], type=data['type'], comment=data['comment'], reaction_manifestation = data['reaction_manifestation'], onset = data['onset'], severity = data['severity'], protocol_last_updated = data['protocol_last_updated'])
                db.session.add(entry_allergy)
                db.session.commit()
                return jsonify({'success':True, 'message':'data added'}), 200
            else:
                return jsonify({'success':False,'message':'patient with this id doesent exist'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised, not Admin'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400 

#get all allergies
    #for doctor
@app.route('/api/get_all_allergies_and_intolerances_for_doctor', methods=['GET'])
def getallAllergiesForDoctor():
    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]
        
        doctor = doctor_details.query.filter_by(email=email,password=password).first()
        if doctor:
            data = request.get_json()
            patient_id = data['patient_id']
            result = allergies_and_intolerances.query.filter_by(patient_id = patient_id).first()
            if result:
                output = {}
                output['global_exclusion_of_adverse_reactions'] = result.global_exclusion_of_adverse_reactions
                output['absence_of_information_statement'] = result.absence_of_information_statement
                output['absence_of_information_protocol_last_updated'] = result.absence_of_information_protocol_last_updated
                
                allergy_list = []
                allergies = Allergy.query.filter_by(patient_id = patient_id).all()
                for allergy in allergies:
                    obj = {}
                    obj['substance']= allergy.substance
                    obj['allergy_id']= allergy.id
                    allergy_list.append(obj)
                output['allergy_list'] = allergy_list

                return jsonify({'all_allergies_and_intolerances':output}), 200
            else:
                return jsonify({'success':False,'message':'no record for this id'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised, not a Doctor'}), 404

    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400 


#get all allergies
    #for patient
@app.route('/api/get_all_allergies_and_intolerances_for_patient', methods=['GET'])
def getallAllergiesForPatient():
    try:
        #patient verification
        token = request.header['token']
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]

        patient = Patient_details.query.filter_by(email=email,password=password).first()
        if patient:
            result = allergies_and_intolerances.query.filter_by(patient_id = patient.id).first()
            if result:
                output = {}
                output['global_exclusion_of_adverse_reactions'] = result.global_exclusion_of_adverse_reactions
                output['absence_of_information_statement'] = result.absence_of_information_statement
                output['absence_of_information_protocol_last_updated'] = result.absence_of_information_protocol_last_updated
                
                allergy_list = []
                allergies = Allergy.query.filter_by(patient_id = patient.id).all()
                for allergy in allergies:
                    obj = {}
                    obj['substance']= allergy.substance
                    obj['allergy_id']= allergy.id
                    allergy_list.append(obj)
                output['allergy_list'] = allergy_list

                return jsonify({'all_allergies_and_intolerances':output}), 200
            else:
                return jsonify({'success':False,'message':'no record for this id'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised, not a Patient'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400 


#get allergy by id
    #for doctor
@app.route('/api/get_allergy_by_id_for_doctor', methods = ['GET'])
def getAllergyByIdForDoctor():
    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]
        
        doctor = doctor_details.query.filter_by(email=email,password=password).first()
        if doctor:
            data = request.get_json()
            allergy_id = data['allergy_id']

            result = Allergy.query.filter_by(id = allergy_id).first()
            if result:
                output = {}
                output['substance'] = result.substance
                output['verification_status'] = result.verification_status
                output['critically'] = result.critically
                output['type'] = result.type
                output['comment'] = result.comment
                output['reaction_manifestation'] = result.reaction_manifestation
                output['onset'] = result.onset
                output['severity'] = result.severity
                output['protocol_last_updated'] = result.protocol_last_updated

                return jsonify({'allergy':output}), 200
            else:
                return jsonify({'success':False, "message":"Allergy does not exist for patient"}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400 


#get allergy by id
    #for patient
@app.route('/api/get_allergy_by_id_for_patient', methods = ['GET'])
def getAllergyByIdForPatient():
    try:
        token = request.headers['token']    #patient token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]
        
        patient = Patient_details.query.filter_by(email=email,password=password).first()
        if patient:
            data = request.get_json()
            allergy_id = data['allergy_id']

            result = Allergy.query.filter_by(id = allergy_id, patient_id=patient.id).first()
            if result:
                output = {}
                output['substance'] = result.substance
                output['verification_status'] = result.verification_status
                output['critically'] = result.critically
                output['type'] = result.type
                output['comment'] = result.comment
                output['reaction_manifestation'] = result.reaction_manifestation
                output['onset'] = result.onset
                output['severity'] = result.severity
                output['protocol_last_updated'] = result.protocol_last_updated

                return jsonify({'allergy':output}), 200
            else:
                return jsonify({'success':False, "message":"This Allergy does not exist for this patient"}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised, not a Patient'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400 


#APIs for vital signs
#add/update vital signs
@app.route('/api/add_vital_signs', methods=['POST'])
def add_vital_signs():
    try:
        #Admin verification
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        admin = Admin_Login.query.filter_by(email=value['email'], password=value['password']).first()
        if admin:
            data = request.get_json()
            result = Patient_details.query.filter_by(id = data['patient_id']).first()
            if result:
                result_vitals = vital_signs.query.filter_by(patient_id= data['patient_id']).first()
                if result_vitals:
                    result_vitals.body_weight = data['body_weight']
                    result_vitals.body_weight_unit = data['body_weight_unit']
                    result_vitals.height = data['height']
                    result_vitals.height_unit = data['height_unit']
                    result_vitals.respiration_rate = data['respiration_rate']
                    result_vitals.pulse_rate = data['pulse_rate']
                    result_vitals.body_temperature = data['body_temperature']
                    result_vitals.body_temperature_unit = data['body_temperature_unit']
                    result_vitals.head_circumference = data['head_circumference']
                    result_vitals.head_circumference_unit = data['head_circumference_unit']
                    result_vitals.pulse_oximetry = data['pulse_oximetry']
                    result_vitals.body_mass_index = data['body_mass_index']
                    result_vitals.body_mass_index_unit = data['body_mass_index_unit']
                    result_vitals.blood_pressure_systolic = data['blood_pressure_systolic']
                    result_vitals.blood_pressure_diastolic = data['blood_pressure_diastolic']
                else:
                    entry = vital_signs(patient_id = data['patient_id'], body_weight = data['body_weight'], body_weight_unit = data['body_weight_unit'], height = data['height'],height_unit = data['height_unit'],respiration_rate = data['respiration_rate'],pulse_rate = data['pulse_rate'],body_temperature = data['body_temperature'],body_temperature_unit = data['body_temperature_unit'],head_circumference = data['head_circumference'],head_circumference_unit = data['head_circumference_unit'],pulse_oximetry = data['pulse_oximetry'],body_mass_index = data['body_mass_index'],body_mass_index_unit = data['body_mass_index_unit'],blood_pressure_systolic = data['blood_pressure_systolic'],blood_pressure_diastolic = data['blood_pressure_diastolic'])
                    db.session.add(entry)
                db.session.commit()
                return jsonify({'success':True, 'message':'data added'}), 200
            else:
                return jsonify({'success':False,'message':'patient with this id doesent exist'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised, not Admin'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400 

#get vital signs
    #for doctor
@app.route('/api/get_vital_signs_for_doctor', methods=['GET'])
def get_vital_signs_for_doctor():
    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]
        
        doctor = doctor_details.query.filter_by(email=email,password=password).first()
        if doctor:
            data = request.get_json()
            p_id = data['patient_id']
            patient = Patient_details.query.filter_by(id = p_id).first()
            if patient:
                result_vitals = vital_signs.query.filter_by(patient_id = patient.id).first()
                if result_vitals:
                    obj = {}
                    obj['body_weight']=result_vitals.body_weight 
                    obj['body_weight_unit']=result_vitals.body_weight_unit 
                    obj['height']=result_vitals.height
                    obj['height_unit']=result_vitals.height_unit 
                    obj['respiration_rate']=result_vitals.respiration_rate 
                    obj['pulse_rate']=result_vitals.pulse_rate 
                    obj['body_temperature']=result_vitals.body_temperature 
                    obj['body_temperature_unit']=result_vitals.body_temperature_unit 
                    obj['head_circumference']=result_vitals.head_circumference 
                    obj['head_circumference_unit']=result_vitals.head_circumference_unit 
                    obj['pulse_oximetry']=result_vitals.pulse_oximetry
                    obj['body_mass_index']=result_vitals.body_mass_index 
                    obj['body_mass_index_unit']=result_vitals.body_mass_index_unit 
                    obj['blood_pressure_systolic']=result_vitals.blood_pressure_systolic 
                    obj['blood_pressure_diastolic']=result_vitals.blood_pressure_diastolic
                    return jsonify({'data':obj}), 200
                else:
                    return jsonify({'success':False,'message':'no vital signs recorded for patient id'}), 404
            else:
                return jsonify({'success':False,'message':'wrong patient id'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised, not a doctor'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400 


#get vital signs
    #for patient
@app.route('/api/get_vital_signs', methods=['GET'])
def get_vital_signs():
    try:
        token = request.headers['token']    #patient token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]
        
        patient = Patient_details.query.filter_by(email=email,password=password).first()
        if patient:
            result_vitals = vital_signs.query.filter_by(patient_id = patient.id).first()
            if result_vitals:
                obj = {}
                obj['body_weight']=result_vitals.body_weight 
                obj['body_weight_unit']=result_vitals.body_weight_unit 
                obj['height']=result_vitals.height
                obj['height_unit']=result_vitals.height_unit 
                obj['respiration_rate']=result_vitals.respiration_rate 
                obj['pulse_rate']=result_vitals.pulse_rate 
                obj['body_temperature']=result_vitals.body_temperature 
                obj['body_temperature_unit']=result_vitals.body_temperature_unit 
                obj['head_circumference']=result_vitals.head_circumference 
                obj['head_circumference_unit']=result_vitals.head_circumference_unit 
                obj['pulse_oximetry']=result_vitals.pulse_oximetry
                obj['body_mass_index']=result_vitals.body_mass_index 
                obj['body_mass_index_unit']=result_vitals.body_mass_index_unit 
                obj['blood_pressure_systolic']=result_vitals.blood_pressure_systolic 
                obj['blood_pressure_diastolic']=result_vitals.blood_pressure_diastolic
                return jsonify({'data':obj}), 200
            else:
                return jsonify({'success':False,'message':'no vital signs recorded'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised, not a patient'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400 

#APIs for dignostics
#add dignosis
@app.route('/api/add_dignostics_results', methods=['POST'])
def add_dignostics_results():
    try:
        #Admin verification
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        admin = Admin_Login.query.filter_by(email=value['email'], password=value['password']).first()
        if admin:
            data = request.get_json()
            patient = Patient_details.query.filter_by(id = data['patient_id']).first()
            if patient:
                #diagnostic_lab_test_result
                entry = dignostic_test_result(
                    patient_id = data['patient_id'],
                    lab_test_name = data['lab_test_name'],
                    specimen_type = data['specimen_type'],
                    specimen_method = data['specimen_method'],
                    specimen_bodysite = data['specimen_bodysite'],
                    diagnostic_service_category = data['diagnostic_service_category'],
                    laboratory_analyte_result_analyte_name = data['laboratory_analyte_result_analyte_name'],
                    interpretation = data['interpretation'],
                    multimedia_source_resource_name = data['multimedia_source_resource_name'],
                    multimedia_source_content = data['multimedia_source_content'],
                    patient_id = data['patient_id'],
                    imaging_test_name = data['imaging_test_name'],
                    modality = data['modality'],
                    anatomical_site = data['anatomical_site'],
                    imaging_finding_name = data['imaging_finding_name'],
                    anatomical_location = data['anatomical_location'],
                    presence = data['presence'],
                    description = data['description'],
                    comparison_to_previous = data['comparison_to_previous'],
                    comment = data['comment'],
                    comparison_with_previous = data['comparison_with_previous'],
                    conclusion = data['conclusion'],
                    imaging_differential_diagnosis = data['imaging_differential_diagnosis'],
                    imaging_diagnosis = data['imaging_diagnosis'],
                    multimedia_resource_name = data['multimedia_resource_name'],
                    multimedia_content = data['multimedia_content'],
                    technique = data['technique'],
                    imaging_quality = data['imaging_quality'],
                    examination_requester_order_identifier = data['examination_requester_order_identifier'],
                    examination_requested_name = data['examination_requested_name'],
                    examination_receiver_order_identifier = data['examination_receiver_order_identifier'],
                    dicom_study_identifier = data['dicom_study_identifier'],
                    examination_report_identifier = data['examination_report_identifier'],
                    image_identifier = data['image_identifier'],
                    dicom_series_identifier = data['dicom_series_identifier'],
                    view = data['view'],
                    position = data['position'],
                    image_datetime = data['image_datetime'],
                    image = data['image']
                )
                db.session.add(entry)
                db.session.commit()
                return jsonify({'success':True, 'message':'data added'}), 200    
            else:
                return jsonify({'success':False,'message':'patient with this id doesent exist'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised, not Admin'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400 


#get all dignosis
    #for doctor
@app.route('/api/get_dignosis_results_for_doctor', methods=['GET'])
def getDignosisResultsForDoctor():
    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]
        
        doctor = doctor_details.query.filter_by(email=email,password=password).first()
        if doctor:
            data = request.get_json()
            patient_id = data['patient_id']
            patient = Patient_details.query.filter_by(id = patient_id).first()
            if patient:
                results = dignostic_test_result.query.filter_by(patient_id=patient.id).all()
                output =[]
                for result in results:
                    obj ={}
                    obj['dignostic_id']= result.id
                    obj['lab_test_name'] = result.lab_test_name
                    obj['imaging_test_name'] = result.imaging_test_name
                    output.append(obj)
                return jsonify({'dignostic_test_result':output}), 200
            else:
                return jsonify({'success':False,'message':'wrong patient id'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised, not a doctor'}), 404

    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data'}),400 


#get all dignosis
    #for patient
@app.route('/api/get_dignosis_results_for_patient', methods=['GET'])
def getDignosisResultsForPatient():
    try:
        token = request.headers['token']    #patient token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]
        
        patient = Patient_details.query.filter_by(email=email,password=password).first()
        if patient:
            results = dignostic_test_result.query.filter_by(patient_id=patient.id).all()
            output =[]
            for result in results:
                obj ={}
                obj['dignosis_id']= result.id
                obj['lab_test_name'] = result.lab_test_name
                obj['imaging_test_name'] = result.imaging_test_name
                output.append(obj)
            return jsonify({'dignostic_test_result':output}), 200
        else:
            return jsonify({'success':False,'message':'Not Authorised, not a patient'}), 404

    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data/token'}),400 

#get dignostics_by_id
    #for doctor
@app.route('/api/get_dognostics_by_id_for_doctor', methods='GET')
def getDignosticsByIdForDoctor():
    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]
        
        doctor = doctor_details.query.filter_by(email=email,password=password).first()
        if doctor:
            data = request.get_json()
            dignostic_id = data['dignostic_id']
            result = dignostic_test_result.query.filter_by(id = dignostic_id).first()
            if result:
                obj = {}
                obj['lab_test_name'] = result.test_name
                obj['specimen_type'] = result.specimen_type
                obj['specimen_method'] = result.specimen_method
                obj['specimen_bodysite'] = result.specimen_bodysite
                obj['diagnostic_service_category'] = result.diagnostic_service_category
                obj['laboratory_analyte_result_analyte_name'] = result.laboratory_analyte_result_analyte_name
                obj['interpretation'] = result.interpretation
                obj['multimedia_source_resource_name'] = result.multimedia_source_resource_name
                obj['multimedia_source_content'] = result.multimedia_source_content
                obj['imaging_test_name'] = result.test_name
                obj['modality'] = result.modality
                obj['anatomical_site'] = result.anatomical_site
                obj['imaging_finding_name'] = result.imaging_finding_name
                obj['anatomical_location'] = result.anatomical_location
                obj['presence'] = result.presence
                obj['description'] = result.description
                obj['comparison_to_previous'] = result.comparison_to_previous
                obj['comment'] = result.comment
                obj['comparison_with_previous'] = result.comparison_with_previous
                obj['conclusion'] = result.conclusion
                obj['imaging_differential_diagnosis'] = result.imaging_differential_diagnosis
                obj['imaging_diagnosis'] = result.imaging_diagnosis
                obj['multimedia_resource_name'] = result.multimedia_resource_name
                obj['multimedia_content'] = result.multimedia_content
                obj['technique'] = result.technique
                obj['imaging_quality'] = result.imaging_quality
                obj['examination_requester_order_identifier'] = result.examination_requester_order_identifier
                obj['examination_requested_name'] = result.examination_requested_name
                obj['examination_receiver_order_identifier'] = result.examination_receiver_order_identifier
                obj['dicom_study_identifier'] = result.dicom_study_identifier
                obj['examination_report_identifier'] = result.examination_report_identifier
                obj['image_identifier'] = result.image_identifier
                obj['dicom_series_identifier'] = result.dicom_series_identifier
                obj['view'] = result.view
                obj['position'] = result.position
                obj['image_datetime'] = result.image_datetime
                obj['image'] = result.image
                return jsonify({'dignostic':obj})
            else:
                return jsonify({'success':False,'message':'Wrong dignostic id'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised, not a doctor'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data/token'}),400 


#get dignostics_by_id
    #for patient
@app.route('/api/get_dognostics_by_id_for_patient', methods='GET')
def getDignosticsByIdForPatient():
    try:
        token = request.headers['token']    #doctor token
        value = jwt.decode(token, options={"verify_signature": False})
        email = value["email"]
        password = value["password"]
        
        patient = Patient_details.query.filter_by(email=email,password=password).first()
        if patient:
            data = request.get_json()
            dignostic_id = data['dignostic_id']
            result = dignostic_test_result.query.filter_by(id = dignostic_id, patient_id = patient.id).first()
            if result:
                obj = {}
                obj['lab_test_name'] = result.test_name
                obj['specimen_type'] = result.specimen_type
                obj['specimen_method'] = result.specimen_method
                obj['specimen_bodysite'] = result.specimen_bodysite
                obj['diagnostic_service_category'] = result.diagnostic_service_category
                obj['laboratory_analyte_result_analyte_name'] = result.laboratory_analyte_result_analyte_name
                obj['interpretation'] = result.interpretation
                obj['multimedia_source_resource_name'] = result.multimedia_source_resource_name
                obj['multimedia_source_content'] = result.multimedia_source_content
                obj['imaging_test_name'] = result.test_name
                obj['modality'] = result.modality
                obj['anatomical_site'] = result.anatomical_site
                obj['imaging_finding_name'] = result.imaging_finding_name
                obj['anatomical_location'] = result.anatomical_location
                obj['presence'] = result.presence
                obj['description'] = result.description
                obj['comparison_to_previous'] = result.comparison_to_previous
                obj['comment'] = result.comment
                obj['comparison_with_previous'] = result.comparison_with_previous
                obj['conclusion'] = result.conclusion
                obj['imaging_differential_diagnosis'] = result.imaging_differential_diagnosis
                obj['imaging_diagnosis'] = result.imaging_diagnosis
                obj['multimedia_resource_name'] = result.multimedia_resource_name
                obj['multimedia_content'] = result.multimedia_content
                obj['technique'] = result.technique
                obj['imaging_quality'] = result.imaging_quality
                obj['examination_requester_order_identifier'] = result.examination_requester_order_identifier
                obj['examination_requested_name'] = result.examination_requested_name
                obj['examination_receiver_order_identifier'] = result.examination_receiver_order_identifier
                obj['dicom_study_identifier'] = result.dicom_study_identifier
                obj['examination_report_identifier'] = result.examination_report_identifier
                obj['image_identifier'] = result.image_identifier
                obj['dicom_series_identifier'] = result.dicom_series_identifier
                obj['view'] = result.view
                obj['position'] = result.position
                obj['image_datetime'] = result.image_datetime
                obj['image'] = result.image
                return jsonify({'dignostic':obj})
            else:
                return jsonify({'success':False,'message':'This dignostic result is not available for this patient'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised, not a doctor'}), 404
    except Exception as e:
        print(e)
        return jsonify({'success':False,'message':'not recieved JSON data/token'}),400 


if __name__ == "__main__":
    app.run(debug=True, port=7000)