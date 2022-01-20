from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_migrate import Migrate
import os

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgres@db:5432/sample6"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)
migrate = Migrate(app, db)

#1. Model for patient Details
class Patient_details(db.Model):
    __tablename__ ='patient_details'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    name = db.Column(db.Text, unique=False, nullable=False)
    age = db.Column(db.Text,unique=False,nullable = False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(500), unique = False, nullable=False)
    contact = db.Column(db.Text, unique=False, nullable=False)
    gender = db.Column(db.Text, unique=False, nullable=False)
    address=db.Column(db.String(100), unique=False, nullable=False)

#2. Model for Doctor Details
class doctor_details(db.Model):
    __tablename__ ='doctor_details'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    name = db.Column(db.Text, unique=False, nullable=False)
    category = db.Column(db.Text,unique=False,nullable = False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(500), unique = False, nullable=False)

#3. Model for Admin Login
class Admin_Login(db.Model):
    __tablename__='admin_login'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False) 
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(500), unique = False, nullable=False)

#4. Model for Prescription
class Prescription(db.Model):
    __tablename__ = 'prescription'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    #the following three are composite unique key
    patientId = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    doctorId = db.Column(db.Integer, db.ForeignKey('doctor_details.id'),nullable=False)
    dateWritten = db.Column(db.Text, unique = False, nullable=False)

class Medication_Order(db.Model):
    __tablename__ = 'medication_order'
    medId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    #the following three are composite unique key
    patientId = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    doctorId = db.Column(db.Integer, db.ForeignKey('doctor_details.id'),nullable=False)
    dateWritten = db.Column(db.Text, unique = False, nullable=False)
    #medication
    medicationItem = db.Column(db.Text, unique=False, nullable=False)
    route = db.Column(db.String(300), unique=False, nullable=False)    
    dosageInstruction = db.Column(db.Text, unique = False, nullable=False)
    maximumAmount = db.Column(db.Text, unique=False, nullable=False)
    maximumAmountDoseUnit = db.Column(db.Text, unique = False, nullable=False)
    allowedPeriod = db.Column(db.Text, unique = False, nullable=False)
    overrideReason = db.Column(db.Text, unique = False, nullable=False)
    additionalInstructions = db.Column(db.Text, unique=False, nullable=True)
    reasons = db.Column(db.Text, unique = False, nullable=False)
    status=db.Column(db.Text, unique = False, nullable=False)
    dateDiscontinued = db.Column(db.Text, unique = False, nullable=False)
    numOfRepeatsAllowed = db.Column(db.Text, unique=False, nullable=False)
    validityPeriod = db.Column(db.Text, unique = False, nullable=False)
    dispenseInstrution =  db.Column(db.Text, unique = False, nullable=False)
    dispenseAmountDescription = db.Column(db.Text, unique = False, nullable=False)
    dispenseAmount = db.Column(db.Text, unique=False, nullable=False)
    dispenseAmountUnit = db.Column(db.Text, unique=False, nullable=False)
    comment = db.Column(db.Text, unique=False, nullable=False)
    # dose 
    dose_unit   =  db.Column(db.Text, unique=False, nullable=False)
    dose_frequency = db.Column(db.Text, unique=False, nullable=False)
    dose_timing   = db.Column(db.Text, unique = False, nullable=False)
    dose_duration = db.Column(db.Text, unique=False, nullable=False)
    # repetition
    repetition_interval = db.Column(db.Text, unique=False, nullable=False)
    Specific_date = db.Column(db.Text, unique = False, nullable=False)
    specific_day_of_week = db.Column(db.Text, unique=False, nullable=True)
    Specific_day_of_month = db.Column(db.Text, unique=False, nullable=True)
    specific_Event = db.Column(db.Text, unique=False, nullable=True)
    # preparation
    substance_name = db.Column(db.Text, unique=False, nullable=True)
    form = db.Column(db.Text, unique=False, nullable=True)
    strength = db.Column(db.Text, unique=False, nullable=False)
    strengthUnit = db.Column(db.Text, unique=False, nullable=True)
    diluentAmount = db.Column(db.Text, unique=False, nullable=False)
    diluentunit = db.Column(db.Text, unique=False, nullable=True)
    description = db.Column(db.Text, unique=False, nullable=True)

    
#5. Model for medication summary
class Medication_summary(db.Model):
    __tablename__ = 'medication_summary'
    medication_summary_id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False,unique=True)
    global_exclusion_of_medication_use = db.Column(db.Text, unique=False)
    absence_of_info_statement = db.Column(db.Text, unique=False)
    absence_of_info_protocol_last_updated = db.Column(db.Text, unique=False)


class Medication_statement(db.Model):
    __tablename__ = 'medication_statement'
    order_id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    #medication
    medication_item = db.Column(db.Text, unique=False, nullable=False)
    medication_name = db.Column(db.Text, unique=False, nullable=True)
    medication_form = db.Column(db.Text, unique=False, nullable=True)
    strength = db.Column(db.Text, unique=False, nullable=True)
    medication_category = db.Column(db.Text, unique=False, nullable=True)
    medication_strength_numerator = db.Column(db.Text, unique=False, nullable=True)
    medication_strength_numerator_unit = db.Column(db.Text, unique=False, nullable=True)
    medication_strength_denominator = db.Column(db.Text, unique=False, nullable=True)
    medication_strength_denominator_unit = db.Column(db.Text, unique=False, nullable=True)
    unit_of_presentation = db.Column(db.Text, unique=False, nullable=True)
    strength_concentration = db.Column(db.Text, unique=False, nullable=True)
    manufacturer = db.Column(db.Text, unique=False, nullable=True)
    batch_id = db.Column(db.Text, unique=False, nullable=True)
    expiry = db.Column(db.Text, unique=False, nullable=True)
    amount = db.Column(db.Text, unique=False, nullable=True)
    amount_unit = db.Column(db.Text, unique=False, nullable=True)
    alternate_amount = db.Column(db.Text, unique=False, nullable=True)
    alternate_amount_unit = db.Column(db.Text, unique=False, nullable=True)
    role = db.Column(db.Text, unique=False, nullable=True)
    description = db.Column(db.Text, unique=False, nullable=True)
    #dosage
    dose_amount = db.Column(db.Text, unique=False, nullable=True)
    dose_unit = db.Column(db.Text, unique=False, nullable=True)
    dose_formula = db.Column(db.Text, unique=False, nullable=True)
    dose_description = db.Column(db.Text, unique=False, nullable=True)
    dose_frequency_lower = db.Column(db.Text, unique=False, nullable=True)
    dose_frequency_lower_rate = db.Column(db.Text, unique=False, nullable=True)
    dose_frequency_higher = db.Column(db.Text, unique=False, nullable=True)
    dose_frequency_higher_rate = db.Column(db.Text, unique=False, nullable=True)
    dose_interval = db.Column(db.Text, unique=False, nullable=True)
    dose_specific_time = db.Column(db.Text, unique=False, nullable=True)
    dose_specific_time_lower = db.Column(db.Text, unique=False, nullable=True)
    dose_specific_time_upper = db.Column(db.Text, unique=False, nullable=True)
    dose_timing_description = db.Column(db.Text, unique=False, nullable=True)
    dose_exact_timing_critical = db.Column(db.Text, unique=False, nullable=True)
    as_required = db.Column(db.Text, unique=False, nullable=True)
    as_required_criterion = db.Column(db.Text, unique=False, nullable=True)
    dose_event_name = db.Column(db.Text, unique=False, nullable=True)
    dose_time_offset = db.Column(db.Text, unique=False, nullable=True)
    dose_on = db.Column(db.Text, unique=False, nullable=True)
    dose_off = db.Column(db.Text, unique=False, nullable=True)
    dose_repetetions = db.Column(db.Text, unique=False, nullable=True)    
    #administration_details
    route = db.Column(db.Text, unique=False, nullable=True)
    body_site = db.Column(db.Text, unique=False, nullable=True)
    #timing_non_daily
    time_repetetion_interval = db.Column(db.Text, unique=False, nullable=True)
    time_frequency_lower = db.Column(db.Text, unique=False, nullable=True)
    time_frequency_lower_rate = db.Column(db.Text, unique=False, nullable=True)
    time_frequency_higher = db.Column(db.Text, unique=False, nullable=True)
    time_frequency_higher_rate = db.Column(db.Text, unique=False, nullable=True)
    time_specific_date = db.Column(db.Text, unique=False, nullable=True,default=datetime.datetime.utcnow)
    time_specific_date_lower = db.Column(db.Text, unique=False, nullable=True,default=datetime.datetime.utcnow)
    time_specific_date_upper = db.Column(db.Text, unique=False, nullable=True,default=datetime.datetime.utcnow)
    time_specific_day_of_week = db.Column(db.Text, unique=False, nullable=True)
    time_specific_day_of_month = db.Column(db.Text, unique=False, nullable=True)
    timing_description = db.Column(db.Text, unique=False, nullable=True)
    time_event_name = db.Column(db.Text, unique=False, nullable=True)
    time_event_time_offset = db.Column(db.Text, unique=False, nullable=True)
    timing_on = db.Column(db.Text, unique=False, nullable=True)
    timing_off = db.Column(db.Text, unique=False, nullable=True)
    timing_repetetions = db.Column(db.Text, unique=False, nullable=True)
    
 #6. Model for Advance care Directive
class Advance_care_directive(db.Model):
    __tablename__ = 'advance_care_directive'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    type_of_directive = db.Column(db.Text, unique=False, nullable=True)
    status = db.Column(db.Text, unique=False, nullable=True)
    description = db.Column(db.Text, unique=False, nullable=True)
    condition = db.Column(db.Text, unique=False, nullable=True)
    directive_location = db.Column(db.Text, unique=False, nullable=True)
    comment = db.Column(db.Text, unique=False, nullable=True)
    valid_period_start = db.Column(db.Text, unique=False, nullable=True)
    valid_period_end = db.Column(db.Text, unique=False, nullable=True)
    review_due_date = db.Column(db.Text, unique=False, nullable=True)
    last_updated = db.Column(db.Text, unique=False, nullable=True) 
    mandate = db.Column(db.Text, unique=False, nullable=True)      


#7. Model for Limitation of Treatment

class Limitation_of_treatment(db.Model):
    __tablename__ ='limitation_of_treatment'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    status = db.Column(db.Text, unique=False, nullable=True)
    type_of_limitation =db.Column(db.Text, unique=False, nullable=True)
    decision = db.Column(db.Text, unique=False, nullable=True)
    qualification = db.Column(db.Text, unique=False, nullable=True)
    rationale = db.Column(db.Text, unique=False, nullable=True)
    patient_awareness = db.Column(db.Text, unique=False, nullable=True)
    carer_awareness =db.Column(db.Text, unique=False, nullable=True)
    comment = db.Column(db.Text, unique=False, nullable=True)
    element = db.Column(db.Text, unique=False, nullable=True)
    protocol_review_date = db.Column(db.Text, unique=False, nullable=True)
    

#8. Model For Problem List

class Problem_list(db.Model):
    __tablename__ = 'problem_list'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    global_exclusion_of_adverse_reactions = db.Column(db.Text, unique=False, nullable=True)
    absence_of_information_statement = db.Column(db.Text, unique=False, nullable=True)
    absence_of_information_protocol_last_updated = db.Column(db.Text, unique=False, nullable=True)


class Problem(db.Model):
    __tablename__ = 'problem'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    problem_name = db.Column(db.Text, unique=False, nullable=True)
    body_site = db.Column(db.Text, unique=False, nullable=True)
    datetime_of_onset = db.Column(db.Text, unique=False, nullable=True)
    severity = db.Column(db.Text, unique=False, nullable=True) 
    date_of_abatebent = db.Column(db.Text, unique=False, nullable=True)
    active_or_inactive = db.Column(db.Text, unique=False, nullable=True) 
    resolution_phase = db.Column(db.Text, unique=False, nullable=True) 
    remission_status = db.Column(db.Text, unique=False, nullable=True) 
    occurrence = db.Column(db.Text, unique=False, nullable=True)
    diagnostic_certainity = db.Column(db.Text, unique=False, nullable=True) 
    protocol_last_updated = db.Column(db.Text, unique=False, nullable=True)
    
#9. Model for past history of illnesses

class Past_history_of_illnesses(db.Model):
    __tablename__ = 'past_history_of_illnesses'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    problem_name = db.Column(db.Text, unique=False, nullable=True)
    body_site = db.Column(db.Text, unique=False, nullable=True)
    datetime_of_onset = db.Column(db.Text, unique=False, nullable=True)
    severity = db.Column(db.Text, unique=False, nullable=True) 
    date_of_abatebent = db.Column(db.Text, unique=False, nullable=True)
    active_or_inactive = db.Column(db.Text, unique=False, nullable=True) 
    resolution_phase = db.Column(db.Text, unique=False, nullable=True) 
    remission_status = db.Column(db.Text, unique=False, nullable=True) 
    occurrence = db.Column(db.Text, unique=False, nullable=True)
    diagnostic_certainity = db.Column(db.Text, unique=False, nullable=True) 
    protocol_last_updated = db.Column(db.Text, unique=False, nullable=True)

#10. Model for Social History
   
class Tobacco_smoking(db.Model):
    __tablename__ = 'tobacco_smoking'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    status = db.Column(db.Text, unique=False, nullable=True)

class Alcohol_consumption(db.Model):
    __tablename__ = 'alcohol_consumption'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    status = db.Column(db.Text, unique=False, nullable=True)
    typical_consumption_alcohol_unit = db.Column(db.Text, unique=False, nullable=True)

#11. Model for plan of care
class Care_plan(db.Model):
    __tablename__ = 'care_plan'
    care_plan_id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    care_plan_name = db.Column(db.Text, unique=False, nullable=True)
    care_plan_description = db.Column(db.Text, unique=False, nullable=True)
    care_plan_reason = db.Column(db.Text, unique=False, nullable=True)
    care_plan_expiry_date= db.Column(db.Text, unique=False, nullable=True)


class Service_request(db.Model):
    __tablename__ = 'service_request'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    service_name = db.Column(db.Text, unique=False, nullable=True)
    service_type = db.Column(db.Text, unique=False, nullable=True)
    description = db.Column(db.Text, unique=False, nullable=True)
    reason_for_request= db.Column(db.Text, unique=False, nullable=True)
    reason_description = db.Column(db.Text, unique=False, nullable=True)
    clinical_indication = db.Column(db.Text, unique=False, nullable=True)
    intent = db.Column(db.Text, unique=False, nullable=True)
    urgency= db.Column(db.Text, unique=False, nullable=True)
    service_due= db.Column(db.Text, unique=False, nullable=True)
    service_period_start = db.Column(db.Text, unique=False, nullable=True)
    service_period_expiry = db.Column(db.Text, unique=False, nullable=True)
    indefinite = db.Column(db.Text, unique=False, nullable=True)
    supplementary_information= db.Column(db.Text, unique=False, nullable=True)
    information_description= db.Column(db.Text, unique=False, nullable=True)
    comment= db.Column(db.Text, unique=False, nullable=True)
    requester_order_identifier = db.Column(db.Text, unique=False, nullable=True)
    receiver_order_identifier = db.Column(db.Text, unique=False, nullable=True)
    request_status = db.Column(db.Text, unique=False, nullable=True)


#12. Model for functional status
class Functional_status(db.Model):
    __tablename__ = 'functional_status'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    diagnosis_name = db.Column(db.Text, unique=False, nullable=True)
    body_site = db.Column(db.Text, unique=False, nullable=True)
    date_of_onset = db.Column(db.Text, unique=False, nullable=True)
    severity= db.Column(db.Text, unique=False, nullable=True)
    date_of_abatement = db.Column(db.Text, unique=False, nullable=True)
    active_inactive = db.Column(db.Text, unique=False, nullable=True)
    resolution_phase = db.Column(db.Text, unique=False, nullable=True)
    remission_status= db.Column(db.Text, unique=False, nullable=True)
    occurrence= db.Column(db.Text, unique=False, nullable=True)
    diagnostic_certainty = db.Column(db.Text, unique=False, nullable=True)
    protocol_last_updated = db.Column(db.Text, unique=False, nullable=True)
    clinical_impression = db.Column(db.Text, unique=False, nullable=True)

# Pregnancy Table
class Pregnancy(db.Model):
    __tablename__ ='pregnancy'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    pregnancy_status = db.Column(db.Text, unique=False, nullable=True)
    pregnancy_outcome = db.Column(db.Text, unique=False, nullable=True)
    estimated_date_of_delivery_by_date_of_conseption = db.Column(db.Text, unique=False, nullable=True)
    estimated_date_of_delivery_by_cycle = db.Column(db.Text, unique=False, nullable=True)
    estimated_date_of_delivery_by_ultrasound = db.Column(db.Text, unique=False, nullable=True)
    agreed_date =   db.Column(db.Text, unique=False, nullable=True)
    protocol_last_updated = db.Column(db.Text, unique=False, nullable=True)
    exclusion_of_pregnancy_statement = db.Column(db.Text, unique=False, nullable=True)


#13. Model for history_of_procedures
class history_of_procedures(db.Model):
    __tablename__ = 'history_of_procedures'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    absence_of_info_absence_statement = db.Column(db.Text, unique=False, nullable=True)
    absence_of_info_protocol_last_updated = db.Column(db.Text, unique=False, nullable=True)
    global_exclusion_of_procedures = db.Column(db.Text, unique=False, nullable=True)

class Procedure(db.Model):
    __tablename__ = 'procedure'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    procedure_name = db.Column(db.Text, unique=False, nullable=True)
    body_site = db.Column(db.Text, unique=False, nullable=True)

#14. Model for immunizations
class Immunizations(db.Model):
    __tablename__ = 'immunizations'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    absence_of_info_absence_statement = db.Column(db.Text, unique=False, nullable=True)
    absence_of_info_protocol_last_updated = db.Column(db.Text, unique=False, nullable=True)

class Immunization(db.Model):
    __tablename__ = "immunization"
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    # add in api
    immunization_item = db.Column(db.Text, unique=False, nullable=True) 
    administration_details_route = db.Column(db.Text, unique=False, nullable=True)
    administration_details_target_site = db.Column(db.Text, unique=False, nullable=True)
    # add in api
    sequence_number = db.Column(db.Text, unique=False, nullable=True)

#15. Model for medical device
class Medical_devices(db.Model):
    __tablename__ = "medical_devices"
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    device_name = db.Column(db.Text, unique=False, nullable=True)
    body_site = db.Column(db.Text, unique=False, nullable=True)
    type = db.Column(db.Text, unique=False, nullable=True)
    description = db.Column(db.Text, unique=False, nullable=True)
    UDI = db.Column(db.Text, unique=False, nullable=True)
    manufacturer = db.Column(db.Text, unique=False, nullable=True)
    date_of_manufacture = db.Column(db.Text, unique=False, nullable=True)
    serial_number =db.Column(db.Text, unique=False, nullable=True)
    catalogue_number =db.Column(db.Text, unique=False, nullable=True)
    model_number = db.Column(db.Text, unique=False, nullable=True)
    batch_number = db.Column(db.Text, unique=False, nullable=True)
    software_version = db.Column(db.Text, unique=False, nullable=True)
    date_of_expiry = db.Column(db.Text, unique=False, nullable=True)
    other_identifier = db.Column(db.Text, unique=False, nullable=True)
    comment = db.Column(db.Text, unique=False, nullable=True)

#16. Model for allergies_and_intolerances
class allergies_and_intolerances(db.Model):
    __tablename__ = 'allergies_and_intolerances'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'), unique=True, nullable=False)
    global_exclusion_of_adverse_reactions = db.Column(db.Text, unique=False, nullable=True)
    absence_of_information_statement = db.Column(db.Text, unique=False, nullable=True)
    absence_of_information_protocol_last_updated = db.Column(db.Text, unique=False, nullable=True) #change to date

class Allergy(db.Model):
    __tablename__= 'allergy'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'), nullable=False)
    substance = db.Column(db.Text, unique=False, nullable=True)
    verification_status = db.Column(db.Text, unique=False, nullable=True)
    critically = db.Column(db.Text, unique=False, nullable=True)
    type = db.Column(db.Text, unique=False, nullable=True)
    comment = db.Column(db.Text, unique=False, nullable=True)
    reaction_manifestation = db.Column(db.Text, unique=False, nullable=True)
    onset = db.Column(db.Text, unique=False, nullable=True)
    severity = db.Column(db.Text, unique=False, nullable=True)
    protocol_last_updated = db.Column(db.Text, unique=False, nullable=True)

#17. Model for diagnostic_test_results
class dignostic_test_result(db.Model):
    __tablename__ = 'diagnostic_test_result'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    lab_test_name = db.Column(db.Text, unique=False, nullable=True)
    specimen_type = db.Column(db.Text, unique=False, nullable=True)
    specimen_method = db.Column(db.Text, unique=False, nullable=True)
    specimen_bodysite = db.Column(db.Text, unique=False, nullable=True)
    diagnostic_service_category = db.Column(db.Text, unique=False, nullable=True)
    laboratory_analyte_result_analyte_name = db.Column(db.Text, unique=False, nullable=True)
    interpretation = db.Column(db.Text, unique=False, nullable=True)
    multimedia_source_resource_name = db.Column(db.Text, unique=False, nullable=True)
    multimedia_source_content = db.Column(db.Text, unique=False, nullable=True)
    imaging_test_name = db.Column(db.Text, unique=False, nullable=True)
    modality = db.Column(db.Text, unique=False, nullable=True)
    anatomical_site = db.Column(db.Text, unique=False, nullable=True)
    imaging_finding_name = db.Column(db.Text, unique=False, nullable=True)
    anatomical_location = db.Column(db.Text, unique=False, nullable=True)
    presence = db.Column(db.Text, unique=False, nullable=True)
    description = db.Column(db.Text, unique=False, nullable=True)
    comparison_to_previous = db.Column(db.Text, unique=False, nullable=True)
    comment = db.Column(db.Text, unique=False, nullable=True)
    comparison_with_previous = db.Column(db.Text, unique=False, nullable=True)
    conclusion = db.Column(db.Text, unique=False, nullable=True)
    imaging_differential_diagnosis = db.Column(db.Text, unique=False, nullable=True)
    imaging_diagnosis = db.Column(db.Text, unique=False, nullable=True)
    multimedia_resource_name = db.Column(db.Text, unique=False, nullable=True)
    multimedia_content = db.Column(db.Text, unique=False, nullable=True)
    technique = db.Column(db.Text, unique=False, nullable=True)
    imaging_quality = db.Column(db.Text, unique=False, nullable=True)
    examination_requester_order_identifier = db.Column(db.Text, unique=False, nullable=True)
    examination_requested_name = db.Column(db.Text, unique=False, nullable=True)
    examination_receiver_order_identifier = db.Column(db.Text, unique=False, nullable=True)
    dicom_study_identifier = db.Column(db.Text, unique=False, nullable=True)
    examination_report_identifier = db.Column(db.Text, unique=False, nullable=True)
    image_identifier = db.Column(db.Text, unique=False, nullable=True) 
    dicom_series_identifier = db.Column(db.Text, unique=False, nullable=True)
    view = db.Column(db.Text, unique=False, nullable=True)
    position = db.Column(db.Text, unique=False, nullable=True)
    image_datetime = db.Column(db.Text, unique=False, nullable=True)
    image = db.Column(db.Text, unique=False, nullable=True)      

#18. Model for vital_signs
class vital_signs(db.Model):
    __tablename__ = 'vital_signs'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'), unique=True,nullable=False)
    body_weight = db.Column(db.Text, unique=False, nullable=True)
    body_weight_unit = db.Column(db.Text, unique=False, nullable=True)
    height = db.Column(db.Text, unique=False, nullable=True)
    height_unit = db.Column(db.Text, unique=False, nullable=True)
    respiration_rate = db.Column(db.Text, unique=False, nullable=True)
    pulse_rate = db.Column(db.Text, unique=False, nullable=True)
    body_temperature = db.Column(db.Text, unique=False, nullable=True)
    body_temperature_unit = db.Column(db.Text, unique=False, nullable=True)
    head_circumference = db.Column(db.Text, unique=False, nullable=True)
    head_circumference_unit = db.Column(db.Text, unique=False, nullable=True)
    pulse_oximetry = db.Column(db.Text, unique=False, nullable=True)
    body_mass_index = db.Column(db.Text, unique=False, nullable=True)
    body_mass_index_unit = db.Column(db.Text, unique=False, nullable=True)
    blood_pressure_systolic = db.Column(db.Text, unique=False, nullable=True)
    blood_pressure_diastolic = db.Column(db.Text, unique=False, nullable=True)