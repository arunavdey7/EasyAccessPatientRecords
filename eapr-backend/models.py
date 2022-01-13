from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:pass@localhost/capstonedb"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

#Model for patient Details
class Patient_details(db.Model):
    __tablename__ ='patient_details'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    name = db.Column(db.Text, unique=False, nullable=False)
    age = db.Column(db.Integer,unique=False,nullable = False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(500), unique = False, nullable=False)
    contact = db.Column(db.Text, unique=False, nullable=False)
    address=db.Column(db.String(100), unique=False, nullable=False)

#Model for Doctor Details
class doctor_details(db.Model):
    __tablename__ ='doctor_details'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    name = db.Column(db.Text, unique=False, nullable=False)
    category = db.Column(db.Text,unique=False,nullable = False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(500), unique = False, nullable=False)

#Model for Admin Login
class Admin_Login(db.Model):
    __tablename__='admin_login'
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
    route = db.Column(db.String(300), unique=False, nullable=False)    
    dosageInstruction = db.Column(db.Text, unique = False, nullable=False)
    maximumAmount = db.Column(db.Integer, unique=False, nullable=False)
    maximumAmountDoseUnit = db.Column(db.Text, unique = False, nullable=False)
    allowedPeriod = db.Column(db.Text, unique = False, nullable=False)
    overrideReason = db.Column(db.Text, unique = False, nullable=False)
    additionalInstructions = db.Column(db.Text, unique=False, nullable=True)
    reasons = db.Column(db.Text, unique = False, nullable=False)
    status=db.Column(db.Text, unique = False, nullable=False)
    dateDiscontinued = db.Column(db.Date)
    dateWritten = db.Column(db.Date)
    numOfRepeatsAllowed = db.Column(db.Integer, unique=False, nullable=False)
    validityPeriod = db.Column(db.Date)
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
    dose_timing   = db.Column(db.DateTime)
    dose_duration = db.Column(db.Text, unique=False, nullable=False)


class Dose_Repetition(db.Model):
    __tablename__ = 'dose_repetition'
    doseRepetitionId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    dosePatternId = db.Column(db.Integer, db.ForeignKey('dose_pattern.dosePatternId'),nullable=False)
    repetition_interval = db.Column(db.Text, unique=False, nullable=False)
    Specific_date = db.Column(db.DateTime)
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
    __tablename__ = 'medication_summary'
    medication_summary_id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    global_exclusion_of_medication_use = db.Column(db.Text, unique=False, nullable=False)
    absence_of_info_statement = db.Column(db.Text, unique=False, nullable=False)
    absence_of_info_protocol_last_updated = db.Column(db.Text, unique=False, nullable=False)


class Medication_statement(db.Model):
    __tablename__ = 'medication_statement'
    order_id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    medication_summary_id = db.Column(db.Integer, db.ForeignKey('medication_summary.medication_summary_id'),nullable=False)

class Medication(db.Model):
    __tablename__ = 'medication'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('medication_statement.order_id'),nullable=False)
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
    expiry = db.Column(db.Date, unique=False, nullable=False)
    amount = db.Column(db.Integer, unique=False, nullable=False)
    amount_unit = db.Column(db.Text, unique=False, nullable=False)
    alternate_amount = db.Column(db.Integer, unique=False, nullable=False)
    alternate_amount_unit = db.Column(db.Text, unique=False, nullable=False)
    role = db.Column(db.Text, unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=False)


class Dosage(db.Model):
    __tablename__ = 'dosage'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('medication_statement.order_id'),nullable=False)
    dose_amount = db.Column(db.Integer, unique=False, nullable=False)
    dose_unit = db.Column(db.Text, unique=False, nullable=False)
    dose_formula = db.Column(db.Text, unique=False, nullable=False)
    dose_description = db.Column(db.Text, unique=False, nullable=False)
    frequency_lower = db.Column(db.Integer, unique=False, nullable=False)
    frequency_lower_rate = db.Column(db.Text, unique=False, nullable=False)
    frequency_higher = db.Column(db.Integer, unique=False, nullable=False)
    frequency_higher_rate = db.Column(db.Text, unique=False, nullable=False)
    interval = db.Column(db.Time, unique=False, nullable=False)
    specific_time = db.Column(db.Time, unique=False, nullable=False)
    specific_time_lower = db.Column(db.Time, unique=False, nullable=False)
    specific_time_upper = db.Column(db.Time, unique=False, nullable=False)
    timing_description = db.Column(db.Text, unique=False, nullable=False)
    exact_timing_critical = db.Column(db.Text, unique=False, nullable=False)
    as_required = db.Column(db.Text, unique=False, nullable=False)
    as_required_criterion = db.Column(db.Text, unique=False, nullable=False)
    event_name = db.Column(db.Text, unique=False, nullable=False)
    time_offset = db.Column(db.Time, unique=False, nullable=False)
    on = db.Column(db.Time, unique=False, nullable=False)
    off = db.Column(db.Time, unique=False, nullable=False)
    repetetions = db.Column(db.Integer, unique=False, nullable=False)

    
class Administration_details(db.Model):
    __tablename__ = 'administration_details'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('medication_statement.order_id'),nullable=False)
    route = db.Column(db.Text, unique=False, nullable=False)
    body_site = db.Column(db.Text, unique=False, nullable=False)


class Timing_non_daily(db.Model):
    __tablename__ = 'timing_non_daily'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('medication_statement.order_id'),nullable=False)
    repetetion_interval = db.Column(db.Integer, unique=False, nullable=False)
    frequency_lower = db.Column(db.Integer, unique=False, nullable=False)
    frequency_lower_rate = db.Column(db.Text, unique=False, nullable=False)
    frequency_higher = db.Column(db.Integer, unique=False, nullable=False)
    frequency_higher_rate = db.Column(db.Text, unique=False, nullable=False)
    specific_date = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)
    specific_date_lower = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)
    specific_date_upper = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)
    specific_day_of_week = db.Column(db.Text, unique=False, nullable=False)
    specific_day_of_month = db.Column(db.Integer, unique=False, nullable=False)
    timing_description = db.Column(db.Text, unique=False, nullable=False)
    event_name = db.Column(db.Text, unique=False, nullable=False)
    event_time_offset = db.Column(db.TIME, unique=False, nullable=False)
    on = db.Column(db.TIME, unique=False, nullable=False)
    off = db.Column(db.TIME, unique=False, nullable=False)
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
    valid_period_start = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)
    valid_period_end = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)
    review_due_date = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)
    last_updated = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow) 
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
    element = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)
    protocol_review_date = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow) 
    

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
    datetime_of_onset = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)
    severity = db.Column(db.Text, unique=False, nullable=False) 
    date_of_abatebent = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)
    active_or_inactive = db.Column(db.Text, unique=False, nullable=False) 
    resolution_phase = db.Column(db.Text, unique=False, nullable=False) 
    remission_status = db.Column(db.Text, unique=False, nullable=False) 
    occurrence = db.Column(db.Text, unique=False, nullable=False)
    diagnostic_certainity = db.Column(db.Text, unique=False, nullable=False) 
    protocol_last_updated = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)  
    
# Model for past history of illnesses

class Past_history_of_illnesses(db.Model):
    __tablename__ = 'past_history_of_illnesses'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient_details.id'),nullable=False)
    problem_name = db.Column(db.Text, unique=False, nullable=False)
    body_site = db.Column(db.Text, unique=False, nullable=False)
    datetime_of_onset = db.Column(db.Date, unique=False, nullable=False)
    severity = db.Column(db.Text, unique=False, nullable=False) 
    date_of_abatebent = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)
    active_or_inactive = db.Column(db.Text, unique=False, nullable=False) 
    resolution_phase = db.Column(db.Text, unique=False, nullable=False) 
    remission_status = db.Column(db.Text, unique=False, nullable=False) 
    occurrence = db.Column(db.Text, unique=False, nullable=False)
    diagnostic_certainity = db.Column(db.Text, unique=False, nullable=False) 
    protocol_last_updated = db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)

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
    care_plan_expiry_date= db.Column(db.Date, unique=False, nullable=False)

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
    service_due= db.Column(db.Date, unique=False, nullable=False)
    service_period_start = db.Column(db.Date, unique=False, nullable=False)
    service_period_expiry = db.Column(db.Date, unique=False, nullable=False)
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
    date_of_onset = db.Column(db.Date, unique=False, nullable=False)
    severity= db.Column(db.Text, unique=False, nullable=False)
    date_of_abatement = db.Column(db.Date, unique=False, nullable=False)
    active_inactive = db.Column(db.Text, unique=False, nullable=False)
    resolution_phase = db.Column(db.Text, unique=False, nullable=False)
    remission_status= db.Column(db.Text, unique=False, nullable=False)
    occurrence= db.Column(db.Text, unique=False, nullable=False)
    diagnostic_certainty = db.Column(db.Text, unique=False, nullable=False)
    protocol_last_updated = db.Column(db.Date, unique=False, nullable=False)
    clinical_impression = db.Column(db.Text, unique=False, nullable=False)
