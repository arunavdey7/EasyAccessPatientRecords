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
    global_exclusion_of_medication_use = db.Column(db.Text, unique=False, nullable=True)
    absence_of_info_statement = db.Column(db.Text, unique=False, nullable=True)
    absence_of_info_protocol_last_updated = db.Column(db.Text, unique=False, nullable=True)


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
             
