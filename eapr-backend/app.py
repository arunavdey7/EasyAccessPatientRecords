from flask.json import jsonify
from flask import app, request
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

if __name__ == "__main__":
    app.run(debug=True, port=7000)
