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
            patverfify = Prescription.query.filter_by(prescriptionId=presId, doctorId =patRes.id).first()
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





if __name__ == "__main__":
    app.run(debug=True, port=7000)
