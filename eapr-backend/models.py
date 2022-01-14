from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:pass@localhost/capstonedb1"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

#Model for patient Details
class Patient_details(db.Model):
    tablename ='patient_details'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    name = db.Column(db.Text, unique=False, nullable=False)
    age = db.Column(db.Integer,unique=False,nullable = False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(500), unique = False, nullable=False)
    contact = db.Column(db.Text, unique=False, nullable=False)
    gender = db.Column(db.Text, unique=False, nullable=False)
    address=db.Column(db.String(100), unique=False, nullable=False)

#Model for Doctor Details
class doctor_details(db.Model):
    tablename ='doctor_details'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    name = db.Column(db.Text, unique=False, nullable=False)
    category = db.Column(db.Text,unique=False,nullable = False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(500), unique = False, nullable=False)

#Model for Admin Login
class Admin_Login(db.Model):
    tablename='admin_login'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False) 
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(500), unique = False, nullable=False)

# Models for Prescription
class Prescription(db.Model):
    __tablename__ = 'prescription'
    prescriptionId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patientId = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    doctorId = db.Column(db.Integer, db.ForeignKey('doctor_details.id'),nullable=False)


class Medication_Order(db.Model):
    __tablename__ = 'medication_order'
    medId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    prescriptionId = db.Column(db.Integer, db.ForeignKey('prescription.prescriptionId'),nullable=False)
    medicationItem = db.Column(db.Text, unique=False, nullable=False)
    route = db.Column(db.Text, unique=False, nullable=False)    
    dosageInstruction = db.Column(db.Text, unique = False, nullable=False)
    maximumAmount = db.Column(db.Integer, unique=False, nullable=False)
    maximumAmountDoseUnit = db.Column(db.Text, unique = False, nullable=False)
    allowedPeriod = db.Column(db.Text, unique = False, nullable=False)
    overrideReason = db.Column(db.Text, unique = False, nullable=False)
    additionalInstructions = db.Column(db.Text, unique=False, nullable=True)
    reasons = db.Column(db.Text, unique = False, nullable=False)
    status=db.Column(db.Text, unique = False, nullable=False)
    dateDiscontinued = db.Column(db.Text, unique = False, nullable=False)
    dateWritten = db.Column(db.Text, unique = False, nullable=False)
    numOfRepeatsAllowed = db.Column(db.Integer, unique=False, nullable=False)
    validityPeriod = db.Column(db.Text, unique = False, nullable=False)
    dispenseInstrution =  db.Column(db.Text, unique = False, nullable=False)
    dispenseAmountDescription = db.Column(db.Text, unique = False, nullable=False)
    dispenseAmount = db.Column(db.Integer, unique=False, nullable=False)
    dispenseAmountUnit = db.Column(db.Integer, unique=False, nullable=False)
    comment = db.Column(db.Text, unique=False, nullable=False)


class Dose_Pattern(db.Model):
    __tablename__ = 'dose_pattern'
    dosePatternId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    medicationId =  db.Column(db.Integer, db.ForeignKey('medication_order.medId'),nullable=False)
    dose_unit   =  db.Column(db.Integer, unique=False, nullable=False)
    dose_frequency = db.Column(db.Text, unique=False, nullable=False)
    dose_timing   = db.Column(db.Text, unique = False, nullable=False)
    dose_duration = db.Column(db.Text, unique=False, nullable=False)


class Dose_Repetition(db.Model):
    __tablename__ = 'dose_repetition'
    doseRepetitionId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    dosePatternId = db.Column(db.Integer, db.ForeignKey('dose_pattern.dosePatternId'),nullable=False)
    repetition_interval = db.Column(db.Text, unique=False, nullable=False)
    Specific_date = db.Column(db.Text, unique = False, nullable=False)
    specific_day_of_week = db.Column(db.Text, unique=False, nullable=True)
    Specific_day_of_month = db.Column(db.Text, unique=False, nullable=True)
    specific_Event = db.Column(db.Text, unique=False, nullable=True)



class Preparation(db.Model):
    __tablename__ = 'preparation'
    preparationId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    medicationId = db.Column(db.Integer, db.ForeignKey('medication_order.medId'),nullable=False)
    substance_name = db.Column(db.Text, unique=False, nullable=True)
    form = db.Column(db.Text, unique=False, nullable=True)
    strength = db.Column(db.Integer, unique=False, nullable=False)
    strengthUnit = db.Column(db.Text, unique=False, nullable=True)
    diluentAmount = db.Column(db.Integer, unique=False, nullable=False)
    diluentunit = db.Column(db.Text, unique=False, nullable=True)
    description = db.Column(db.Text, unique=False, nullable=True)
    
    
# Models for medication


class Medication_summary(db.Model):
    tablename = 'medication_summary'
    medication_summary_id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False,unique=True)
    global_exclusion_of_medication_use = db.Column(db.Text, unique=False)
    absence_of_info_statement = db.Column(db.Text, unique=False)
    absence_of_info_protocol_last_updated = db.Column(db.Text, unique=False)


class Medication_statement(db.Model):
    tablename = 'medication_statement'
    order_id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)

class Medication(db.Model):
    tablename = 'medication'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('medication_statement.order_id'),nullable=False,unique=True)
    medication_item = db.Column(db.Text, unique=False, nullable=False)
    medication_name = db.Column(db.Text, unique=False, nullable=False)
    medication_form = db.Column(db.Text, unique=False, nullable=False)
    medication_category = db.Column(db.Text, unique=False, nullable=False)
    medication_strength_numerator = db.Column(db.Integer, unique=False, nullable=False)
    medication_strength_numerator_unit = db.Column(db.Text, unique=False, nullable=False)
    medication_strength_denominator = db.Column(db.Integer, unique=False, nullable=False)
    medication_strength_denominator_unit = db.Column(db.Text, unique=False, nullable=False)
    unit_of_presentation = db.Column(db.Text, unique=False, nullable=False)
    strength = db.Column(db.Text, unique=False, nullable=False)
    manufacturer = db.Column(db.Text, unique=False, nullable=False)
    batch_id = db.Column(db.Text, unique=False, nullable=False)
    expiry = db.Column(db.Text, unique=False, nullable=False)
    amount = db.Column(db.Integer, unique=False, nullable=False)
    amount_unit = db.Column(db.Text, unique=False, nullable=False)
    alternate_amount = db.Column(db.Integer, unique=False, nullable=False)
    alternate_amount_unit = db.Column(db.Text, unique=False, nullable=False)
    role = db.Column(db.Text, unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=False)


class Dosage(db.Model):
    tablename = 'dosage'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('medication_statement.order_id'),nullable=False,unique=True)
    dose_amount = db.Column(db.Integer, unique=False, nullable=False)
    dose_unit = db.Column(db.Text, unique=False, nullable=False)
    dose_formula = db.Column(db.Text, unique=False, nullable=False)
    dose_description = db.Column(db.Text, unique=False, nullable=False)
    frequency_lower = db.Column(db.Integer, unique=False, nullable=False)
    frequency_lower_rate = db.Column(db.Text, unique=False, nullable=False)
    frequency_higher = db.Column(db.Integer, unique=False, nullable=False)
    frequency_higher_rate = db.Column(db.Text, unique=False, nullable=False)
    interval = db.Column(db.Text, unique=False, nullable=False)
    specific_time = db.Column(db.Text, unique=False, nullable=False)
    specific_time_lower = db.Column(db.Text, unique=False, nullable=False)
    specific_time_upper = db.Column(db.Text, unique=False, nullable=False)
    timing_description = db.Column(db.Text, unique=False, nullable=False)
    exact_timing_critical = db.Column(db.Text, unique=False, nullable=False)
    as_required = db.Column(db.Text, unique=False, nullable=False)
    as_required_criterion = db.Column(db.Text, unique=False, nullable=False)
    event_name = db.Column(db.Text, unique=False, nullable=False)
    time_offset = db.Column(db.Text, unique=False, nullable=False)
    on = db.Column(db.Text, unique=False, nullable=False)
    off = db.Column(db.Text, unique=False, nullable=False)
    repetetions = db.Column(db.Integer, unique=False, nullable=False)

    
class Administration_details(db.Model):
    tablename = 'administration_details'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('medication_statement.order_id'),nullable=False,unique=True)
    route = db.Column(db.Text, unique=False, nullable=False)
    body_site = db.Column(db.Text, unique=False, nullable=False)


class Timing_non_daily(db.Model):
    tablename = 'timing_non_daily'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('medication_statement.order_id'),nullable=False,unique=True)
    repetetion_interval = db.Column(db.Integer, unique=False, nullable=False)
    frequency_lower = db.Column(db.Integer, unique=False, nullable=False)
    frequency_lower_rate = db.Column(db.Text, unique=False, nullable=False)
    frequency_higher = db.Column(db.Integer, unique=False, nullable=False)
    frequency_higher_rate = db.Column(db.Text, unique=False, nullable=False)
    specific_date = db.Column(db.Text, unique=False, nullable=False,default=datetime.datetime.utcnow)
    specific_date_lower = db.Column(db.Text, unique=False, nullable=False,default=datetime.datetime.utcnow)
    specific_date_upper = db.Column(db.Text, unique=False, nullable=False,default=datetime.datetime.utcnow)
    specific_day_of_week = db.Column(db.Text, unique=False, nullable=False)
    specific_day_of_month = db.Column(db.Integer, unique=False, nullable=False)
    timing_description = db.Column(db.Text, unique=False, nullable=False)
    event_name = db.Column(db.Text, unique=False, nullable=False)
    event_time_offset = db.Column(db.Text, unique=False, nullable=False)
    on = db.Column(db.Text, unique=False, nullable=False)
    off = db.Column(db.Text, unique=False, nullable=False)
    repetetions = db.Column(db.Integer, unique=False, nullable=False)
    
 # Model for Advance care Directive
class Advance_care_directive(db.Model):
    __tablename__ = 'advance_care_directive'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    type_of_directive = db.Column(db.Text, unique=False, nullable=False)
    status = db.Column(db.Text, unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=False)
    condition = db.Column(db.Text, unique=False, nullable=False)
    directive_location = db.Column(db.Text, unique=False, nullable=False)
    comment = db.Column(db.Text, unique=False, nullable=False)
    valid_period_start = db.Column(db.Text, unique=False, nullable=False)
    valid_period_end = db.Column(db.Text, unique=False, nullable=False)
    review_due_date = db.Column(db.Text, unique=False, nullable=False)
    last_updated = db.Column(db.Text, unique=False, nullable=False) 
    mandate = db.Column(db.Text, unique=False, nullable=False)      


# Model for Limitation of Treatment

class Limitation_of_treatment(db.Model):
    __tablename__ ='limitation_of_treatment'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    status = db.Column(db.Text, unique=False, nullable=False)
    type_of_limitation =db.Column(db.Text, unique=False, nullable=False)
    decision = db.Column(db.Text, unique=False, nullable=False)
    qualification = db.Column(db.Text, unique=False, nullable=False)
    rationale = db.Column(db.Text, unique=False, nullable=False)
    patient_awareness = db.Column(db.Text, unique=False, nullable=False)
    carer_awareness =db.Column(db.Text, unique=False, nullable=False)
    comment = db.Column(db.Text, unique=False, nullable=False)
    element = db.Column(db.Text, unique=False, nullable=False)
    protocol_review_date = db.Column(db.Text, unique=False, nullable=False)
    

# Model For Problem List

class Problem_list(db.Model):
    __tablename__ = 'problem_list'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    global_exclusion_of_adverse_reactions = db.Column(db.Text, unique=False, nullable=False)
    absence_of_information_statement = db.Column(db.Text, unique=False, nullable=False)
    absence_of_information_protocol_last_updated = db.Column(db.Text, unique=False, nullable=False)

# Model for Problem

class Problem(db.Model):
    __tablename__ = 'problem'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    problem_name = db.Column(db.Text, unique=False, nullable=False)
    body_site = db.Column(db.Text, unique=False, nullable=False)
    datetime_of_onset = db.Column(db.Text, unique=False, nullable=False)
    severity = db.Column(db.Text, unique=False, nullable=False) 
    date_of_abatebent = db.Column(db.Text, unique=False, nullable=False)
    active_or_inactive = db.Column(db.Text, unique=False, nullable=False) 
    resolution_phase = db.Column(db.Text, unique=False, nullable=False) 
    remission_status = db.Column(db.Text, unique=False, nullable=False) 
    occurrence = db.Column(db.Text, unique=False, nullable=False)
    diagnostic_certainity = db.Column(db.Text, unique=False, nullable=False) 
    protocol_last_updated = db.Column(db.Text, unique=False, nullable=False)
    
# Model for past history of illnesses

class Past_history_of_illnesses(db.Model):
    __tablename__ = 'past_history_of_illnesses'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    problem_name = db.Column(db.Text, unique=False, nullable=False)
    body_site = db.Column(db.Text, unique=False, nullable=False)
    datetime_of_onset = db.Column(db.Text, unique=False, nullable=False)
    severity = db.Column(db.Text, unique=False, nullable=False) 
    date_of_abatebent = db.Column(db.Text, unique=False, nullable=False)
    active_or_inactive = db.Column(db.Text, unique=False, nullable=False) 
    resolution_phase = db.Column(db.Text, unique=False, nullable=False) 
    remission_status = db.Column(db.Text, unique=False, nullable=False) 
    occurrence = db.Column(db.Text, unique=False, nullable=False)
    diagnostic_certainity = db.Column(db.Text, unique=False, nullable=False) 
    protocol_last_updated = db.Column(db.Text, unique=False, nullable=False)

# Model for tobacco smoking
   
class Tobacco_smoking(db.Model):
    __tablename__ = 'tobacco_smoking'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    status = db.Column(db.Text, unique=False, nullable=False)

# Model for alcohol consumption
class Alcohol_consumption(db.Model):
    __tablename__ = 'alcohol_consumption'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    status = db.Column(db.Text, unique=False, nullable=False)
    typical_consumption_alcohol_unit = db.Column(db.Integer, unique=False, nullable=False)

# Model for care plan
class Care_plan(db.Model):
    __tablename__ = 'care_plan'
    care_plan_id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    care_plan_name = db.Column(db.Text, unique=False, nullable=False)
    care_plan_description = db.Column(db.Text, unique=False, nullable=False)
    care_plan_reason = db.Column(db.Text, unique=False, nullable=False)
    care_plan_expiry_date= db.Column(db.Text, unique=False, nullable=False)
# Model for service request
class Service_request(db.Model):
    __tablename__ = 'service_request'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    service_name = db.Column(db.Text, unique=False, nullable=False)
    service_type = db.Column(db.Text, unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=False)
    reason_for_request= db.Column(db.Text, unique=False, nullable=False)
    reason_description = db.Column(db.Text, unique=False, nullable=False)
    clinical_indication = db.Column(db.Text, unique=False, nullable=False)
    intent = db.Column(db.Text, unique=False, nullable=False)
    urgency= db.Column(db.Text, unique=False, nullable=False)
    service_due= db.Column(db.Text, unique=False, nullable=False)
    service_period_start = db.Column(db.Text, unique=False, nullable=False)
    service_period_expiry = db.Column(db.Text, unique=False, nullable=False)
    indefinite = db.Column(db.Text, unique=False, nullable=False)
    supplementary_information= db.Column(db.Text, unique=False, nullable=False)
    information_description= db.Column(db.Text, unique=False, nullable=False)
    comment= db.Column(db.Text, unique=False, nullable=False)
    requester_order_identifier = db.Column(db.Text, unique=False, nullable=False)
    receiver_order_identifier = db.Column(db.Text, unique=False, nullable=False)
    request_status = db.Column(db.Text, unique=False, nullable=False)

#Model for functional status
class Functional_status(db.Model):
    __tablename__ = 'functional_status'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    diagnosis_name = db.Column(db.Text, unique=False, nullable=False)
    body_site = db.Column(db.Text, unique=False, nullable=False)
    date_of_onset = db.Column(db.Text, unique=False, nullable=False)
    severity= db.Column(db.Text, unique=False, nullable=False)
    date_of_abatement = db.Column(db.Text, unique=False, nullable=False)
    active_inactive = db.Column(db.Text, unique=False, nullable=False)
    resolution_phase = db.Column(db.Text, unique=False, nullable=False)
    remission_status= db.Column(db.Text, unique=False, nullable=False)
    occurrence= db.Column(db.Text, unique=False, nullable=False)
    diagnostic_certainty = db.Column(db.Text, unique=False, nullable=False)
    protocol_last_updated = db.Column(db.Text, unique=False, nullable=False)
    clinical_impression = db.Column(db.Text, unique=False, nullable=False)

# Pregnancy Table
class Pregnancy(db.Model):
    __tablename__ ='pregnancy'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    pregnancy_status = db.Column(db.Text, unique=False, nullable=False)
    pregnancy_outcome = db.Column(db.Text, unique=False, nullable=False)
    estimated_date_of_delivery_by_date_of_conseption = db.Column(db.Text, unique=False, nullable=False)
    estimated_date_of_delivery_by_cycle = db.Column(db.Text, unique=False, nullable=False)
    estimated_date_of_delivery_by_ultrasound = db.Column(db.Text, unique=False, nullable=False)
    agreed_date =   db.Column(db.Text, unique=False, nullable=False)
    protocol_last_updated = db.Column(db.Text, unique=False, nullable=False)
    exclusion_of_pregnancy_statement = db.Column(db.Text, unique=False, nullable=False)


# history_of_procedures
class history_of_procedures(db.Model):
    __tablename__ = 'history_of_procedures'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    absence_of_info_absence_statement = db.Column(db.Text, unique=False, nullable=False)
    absence_of_info_protocol_last_updated = db.Column(db.Text, unique=False, nullable=False)
    global_exclusion_of_procedures = db.Column(db.Text, unique=False, nullable=False)

# procedure table
class Procedure(db.Model):
    __tablename__ = 'procedure'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    procedure_name = db.Column(db.Text, unique=False, nullable=False)
    body_site = db.Column(db.Text, unique=False, nullable=False)

# innunizations table
class Immunizations(db.Model):
    __tablename__ = 'immunizations'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    absence_of_info_absence_statement = db.Column(db.Text, unique=False, nullable=False)
    absence_of_info_protocol_last_updated = db.Column(db.Text, unique=False, nullable=False)

# immunization table
class Immunization(db.Model):
    __tablename__ = "immunization"
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    administration_details_route = db.Column(db.Text, unique=False, nullable=False)
    administration_details_target_site = db.Column(db.Text, unique=False, nullable=False)
    sequence_number = db.Column(db.Integer, unique=False, nullable=False)

# medical device  table
class Medical_devices(db.Model):
    __tablename__ = "medical_devices"
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_uid = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    device_name = db.Column(db.Text, unique=False, nullable=False)
    body_site = db.Column(db.Text, unique=False, nullable=False)
    type = db.Column(db.Text, unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=False)
    UDI = db.Column(db.Text, unique=False, nullable=False)
    manufacturer = db.Column(db.Text, unique=False, nullable=False)
    date_of_manufacture = db.Column(db.Text, unique=False, nullable=False)
    serial_number =db.Column(db.Text, unique=False, nullable=False)
    catalogue_number =db.Column(db.Text, unique=False, nullable=False)
    model_number = db.Column(db.Text, unique=False, nullable=False)
    batch_number = db.Column(db.Text, unique=False, nullable=False)
    software_version = db.Column(db.Text, unique=False, nullable=False)
    date_of_expiry = db.Column(db.Text, unique=False, nullable=False)
    other_identifier = db.Column(db.Text, unique=False, nullable=False)
    comment = db.Column(db.Text, unique=False, nullable=False)

#Model for allergies_and_intolerances
class allergies_and_intolerances(db.Model):
    __tablename__ = 'allergies_and_intolerances'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    global_exclusion_of_adverse_reactions = db.Column(db.Text, unique=False, nullable=True)
    absence_of_information_statement = db.Column(db.Text, unique=False, nullable=True)
    absence_of_information_protocol_last_updated = db.Column(db.Text, unique=False, nullable=True)

class allergy(db.Model):
    __tablename__= 'allergy'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'), nullable=False)
    substance = db.Column(db.Text, unique=False, nullable=False)
    verification_status = db.Column(db.Text, unique=False, nullable=False)
    critically = db.Column(db.Text, unique=False, nullable=False)
    type = db.Column(db.Text, unique=False, nullable=False)
    comment = db.Column(db.Text, unique=False, nullable=True)
    reaction_manifestation = db.Column(db.Text, unique=False, nullable=True)
    onset = db.Column(db.Text, unique=False, nullable=True)
    severity = db.Column(db.Text, unique=False, nullable=False)
    protocol_last_updated = db.Column(db.Text, unique=False, nullable=False)

#Model for diagnostic_lab_test_result
class diagnostic_lab_test_result(db.Model):
    __tablename__ = 'diagnostic_lab_test_result'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    test_name = db.Column(db.Text, unique=False, nullable=False)
    specimen_type = db.Column(db.Text, unique=False, nullable=True)
    specimen_method = db.Column(db.Text, unique=False, nullable=True)
    specimen_bodysite = db.Column(db.Text, unique=False, nullable=False)
    diagnostic_service_category = db.Column(db.Text, unique=False, nullable=False)
    laboratory_analyte_result_analyte_name = db.Column(db.Text, unique=False, nullable=False)
    interpretation = db.Column(db.Text, unique=False, nullable=False)
    multimedia_source_resource_name = db.Column(db.Text, unique=False, nullable=False)
    multimedia_source_content = db.Column(db.Text, unique=False, nullable=False)

#Models for diagnostic_imaging_examination_result
class diagnostic_imaging_examination_result(db.Model):
    __tablename__ = 'diagnostic_imaging_examination_result'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    test_name = db.Column(db.Text, unique=False, nullable=False)
    modality = db.Column(db.Text, unique=False, nullable=False)
    anatomical_site = db.Column(db.Text, unique=False, nullable=False)
    imaging_finding_name = db.Column(db.Text, unique=False, nullable=False)
    anatomical_location = db.Column(db.Text, unique=False, nullable=False)
    presence = db.Column(db.Text, unique=False, nullable=False)
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
    examination_requester_order_identifier = db.Column(db.Text, unique=False, nullable=False)
    examination_requested_name = db.Column(db.Text, unique=False, nullable=False)
    examination_receiver_order_identifier = db.Column(db.Text, unique=False, nullable=False)
    dicom_study_identifier = db.Column(db.Text, unique=False, nullable=False)
    examination_report_identifier = db.Column(db.Text, unique=False, nullable=False)
    #In APIs related to this model add a reported_images 

class reported_images(db.Model):
    __tablename__= 'reported_images'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    image_identifier = db.Column(db.Text, unique=True, nullable=True)
    diagnostic_imaging_examination_result_id = db.Column(db.Integer, db.ForeignKey('diagnostic_imaging_examination_result.id'),nullable=False)
    dicom_series_identifier = db.Column(db.Text, unique=False, nullable=False)
    view = db.Column(db.Text, unique=False, nullable=False)
    position = db.Column(db.Text, unique=False, nullable=False)
    image_datetime = db.Column(db.Text, unique=False, nullable=False)
    image = db.Column(db.Text, unique=True, nullable=False)

#vital_signs
class vital_signs(db.Model):
    __tablename__ = 'vital_signs'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    body_weight = db.Column(db.Integer, unique=False, nullable=False)
    body_weight_unit = db.Column(db.Text, unique=False, nullable=False)
    height = db.Column(db.Integer, unique=False, nullable=False)
    height_unit = db.Column(db.Text, unique=False, nullable=False)
    respiration_rate = db.Column(db.Integer, unique=False, nullable=False)
    pulse_rate = db.Column(db.Integer, unique=False, nullable=False)
    body_temperature = db.Column(db.Integer, unique=False, nullable=False)
    body_temperature_unit = db.Column(db.Text, unique=False, nullable=False)
    head_circumference = db.Column(db.Integer, unique=False, nullable=False)
    head_circumference_unit = db.Column(db.Text, unique=False, nullable=False)
    pulse_oximetry = db.Column(db.Integer, unique=False, nullable=False)
    body_mass_index = db.Column(db.Integer, unique=False, nullable=False)
    body_mass_index_unit = db.Column(db.Text, unique=False, nullable=False)
    blood_pressure_systolic = db.Column(db.Integer, unique=False, nullable=False)
    blood_pressure_diastolic = db.Column(db.Integer, unique=False, nullable=False)
