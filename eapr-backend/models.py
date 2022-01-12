from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:pass@localhost/testdb"
db = SQLAlchemy(app)

class Prescription(db.Model):
    __tablename__ = 'prescription'
    prescriptionId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    patientId = db.Column(db.Integer, db.ForeignKey('patient.id'),nullable=False)
    doctorId = db.Column(db.Integer, db.ForeignKey('doctor.id'),nullable=False)


class Medication_Order(db.Model):
    __tablename__ = 'medication'
    medId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    prescriptionId = db.Column(db.Integer, db.ForeignKey('prescription.id'),nullable=False)
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


class Dose_Pattern(db.Models):
    __tablename__ = 'dosepattern'
    dosePatternId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    medicationId =  db.Column(db.Integer, db.ForeignKey('medication.id'),nullable=False)
    dose_unit   =  db.Column(db.Integer, unique=False, nullable=False)
    dose_frequency = db.Column(db.Text, unique=False, nullable=False)
    dose_timing   = db.Column(db.DateTime)
    dose_duration = db.Column(db.Text, unique=False, nullable=False)


class Dose_Repetition(db.Models):
    __tablename__ = 'doserepetition'
    doseRepetitionId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    dosePatternId = db.Column(db.Integer, db.ForeignKey('dosepattern.id'),nullable=False)
    repetition_interval = db.Column(db.Text, unique=False, nullable=False)
    Specific_date = db.Column(db.DateTime)
    specific_day_of_week = db.Column(db.Text, unique=False, nullable=True)
    Specific_day_of_month = db.Column(db.Text, unique=False, nullable=True)
    specific_Event = db.Column(db.Text, unique=False, nullable=True)



class Preparation(db.Models):
    __tablename__ = 'preparation'
    preparationId = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    medicationId = db.Column(db.Integer, db.ForeignKey('medication.id'),nullable=False)
    substance_name = db.Column(db.Text, unique=False, nullable=True)
    form = db.Column(db.Text, unique=False, nullable=True)
    strength = db.Column(db.Integer, unique=False, nullable=False)
    strengthUnit = db.Column(db.Text, unique=False, nullable=True)
    diluentAmount = db.Column(db.Integer, unique=False, nullable=False)
    diluentunit = db.Column(db.Text, unique=False, nullable=True)
    description = db.Column(db.Text, unique=False, nullable=True)
