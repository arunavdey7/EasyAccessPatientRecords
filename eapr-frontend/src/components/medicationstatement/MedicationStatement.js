//changesinArunavBranch
import React,{useState} from 'react'
import { toast } from 'react-toastify'
import { addMedicationStatement } from '../../utilities/MedicationStatementUtility'
import './styles.css'
const MedicationSummary = () => {
    // Medication
    
    const [medicationItem, setMedicationItem] = useState("")
    const [medicationName, setMedicationName] = useState("")
    const [medicationForm, setMedicationForm] = useState("")
    const [medicationCategory, setMedicationCategory] = useState("")

    // Strength
    const [strengthNumerator, setStrengthNumerator] = useState("")
    const [strengthNumeratorUnit, setStrengthNumeratorUnit] = useState("")
    const [strengthDenominator, setStrengthDenominator] = useState("")
    const [strengthDenominatorUnit, setStrengthDenominatorUnit] = useState("")
    const [unitOfPresentation, setUnitOfPresentation] = useState("")
    const [strength, setStrength] = useState("")
    const [manufacturer, setManufacturer] = useState("")
    const [batchId, setBatchId] = useState("")
    const [expiry, setExpiry] = useState("")
    const [amount, setAmount] = useState("")
    const [amountUnit, setAmountUnit] = useState("")
    const [alternateAmount, setAlternateAmount] = useState("")
    const [alternateAmountUnit, setAlternateAmountUnit] = useState("")
    const [role, setRole] = useState("");
    const [description, setDescription] = useState("");

    // Dosage
    const [doseAmount, setDoseAmount] = useState("");
    const [doseLower, setDoseLower] = useState("");
    const [doseUpper, setDoseUpper] = useState("");
    const [doseUnit, setDoseUnit] = useState("");
    const [doseFormula, setDoseFormula] = useState("");
    const [doseDescription, setDoseDescription] = useState("");

    // Timing

    const [timingDoseDescription, setTimingDoseDesrciption] = useState("");
    
    // Timing Daily
    const [timingDailyFrequency, setTimingDailyTimingFrequency] = useState("");
    const [timingDailyFrequencyLower, setTimingDailyTimingFrequencyLower] = useState("");
    const [timingDailyFrequencyUpper, setTimingDailyTimingFrequencyUpper] = useState("");
    const [timingDailyInterval, setTimingDailyTimingInterval] = useState("");
    const [timingDailySpecificTime, setTimingDailyTimingSpecificTime] = useState("");
    const [timingDailyDescription, setTimingDailyDescription] = useState("");
    const [timingDailyExactTimingCritical, setTimingDailyExactTimingCritical] = useState("");
    const [timingDailyAsRequired, setTimingDailyAsRequired] = useState("");
    const [timingDailyAsRequiredCriterion, setTimingDailyAsRequiredCriterion] = useState("");
    const [timingDailySpecificEventEventName, setTimingDailySpecificEventEventName] = useState("");
    const [timingDailySpecificEventTimeOffset, setTimingDailySpecificEventTimeOffset] = useState("");
    const [timingDailyCycleOn, setTimingDailyCycleOn] = useState("");
    const [timingDailyCycleOff, setTimingDailyCycleOff] = useState("");
    const [timingDailyCycleRepetitions, setTimingDailyCycleRepetitions] = useState("");

    // Administration details
    const [administrationDetailsRoute, setAdministrationDetailsRoute] = useState("");
    const [administrationDetailsBodySite, setAdministrationDetailsBodySite] = useState("");

    // Timing Non-Daily
    const [timingNonDailyRepetitionInterval, setTimingNonDailyRepetitionInterval] = useState("");
    const [timingNonDailyFrequency, setTimingNonDailyFrequency ]= useState("");
    const [timingNonDailyFrequencyLower, setTimingNonDailyFrequencyLower] = useState("");
    const [timingNonDailyFrequencyUpper, setTimingNonDailyFrequencyUpper] = useState("");
    const [timingNonDailySpecificDate, setTimingNonDailySpecificDate] = useState("");
    const [timingNonDailySpecificDateLower, setTimingNonDailySpecificDateLower] = useState("");
    const [timingNonDailySpecificDateUpper, setTimingNonDailySpecificDateUpper] = useState("");
    const [timingNonDailySpecificDayOfWeek, setTimingNonDailySpecificDayOfWeek] = useState("");
    const [timingNonDailySpecificDayOfMonth, setTimingNonDailySpecificDayOfMonth] = useState("");
    const [timingNonDailySpecificDayOfMonthLower, setTimingNonDailySpecificDayOfMonthLower] = useState("");
    const [timingNonDailySpecificDayOfMonthUpper, setTimingNonDailySpecificDayOfMonthUpper] = useState("");
    const [timingNonDailyTimingDescription, setTimingNonDailyTimingDescription] = useState("");
    const [timingNonDailyCycleOn, setTimingNonDailyCycleOn] = useState("");
    const [timingNonDailyCycleOff, setTimingNonDailyCycleOff] = useState("");
    const [timingNonDailyCycleRepetitions, setTimingNonDailyCycleRepetitions] = useState("");
    
    // Medication Protocol
    const [medicationProtocolOrderId, setMedicationProtocolOrderId] = useState("");

    // Exclusion-Global Data
    const [exclusionGlobalData, setExclusionGlobalData] = useState("");

    // Absence of Information Data
    const [absenceOfInformationDataAbsenceStatement, setAbsenceOfInformationDataAbsenceStatement] = useState("");

    // Absence of Information Protocol
    const [absenceOfInformationProtocolLastUpdated, setAbsenceOfInformationProtocolLastUpdated] = useState("");
    
    const saveMedicationStatement = () =>{
        var data = {

            "medication_summary":{
                    "patient_uid":1,
                    "global_exclusion_of_medication_use":"",
                    "absence_of_info_statement":"",
                    "absence_of_info_protocol_last_updated":""
                },
        
        
                "medication_statement":{
                    "patient_uid":1,
                    "order_id":1
                },
        
        
                "medication":{
                    "order_id":1,
                    "medication_item":"atenolol 100mg",
                    "medication_name":"cefuroxim",
                    "medication_form":"tablet",
                    "medication_category":"ad-hoc mixture",
                    "medication_strength_numerator":9,
                    "medication_strength_numerator_unit":"mg",
                    "medication_strength_denominator":0.3,
                    "medication_strength_denominator_unit":"g",
                    "unit_of_presentation":"capsule",
                    "strength(concentration)":"10 mg/ml",
                    "manufacturer":"abbott",
                    "batch_id":1,
                    "expiry":"2023-09-12",
                    "amount":"1",
                    "amount_unit":"mg",
                    "alternate_amount":"5",
                    "alternate_amount_unit":"ml",
                    "role":"therapeutic",
                    "description":"therapy related medication"
                },
        
        
                "dosage":{
                    "order_id":1,
                    "dose_amount":"1",
                    "dose_unit":"mg",
                    "dose_formula":"",
                    "dose_description":"2 to 3 times a day",
                    "frequency_lower":"2",
                    "frequency_lower_rate":"1/d",
                    "frequency_higher":"3",
                    "frequency_higher_rate":"1/d",
                    "interval":"3h",
                    "specific_time":"",
                    "specific_time_lower":"10:00",
                    "specific_time_upper":"20:00",
                    "timing_description":"every day",
                    "exact_timing_critical?":"FALSE",
                    "as_required":"TRUE",
                    "as_required_criterion":"for stress relieve",
                    "event_name":"after every meal",
                    "time_offset":"meal + 10 minutes",
                    "on":"",
                    "off":"",
                    "repetetions":""
                },
        
                "administration_details":{
                    "order_id":1,
                    "route":"oral",
                    "body_site":"head"
                },
                    
        
                "timing_non_daily":{
                    "order_id":1,
                    "repetetion_interval":"",
                    "frequency_lower":"",
                    "frequency_lower_rate":"",
                    "frequency_higher":"",
                    "frequency_higher_rate":"",
                    "specific_date":"",
                    "specific_date_lower":"",
                    "specific_date_upper":"",
                    "specific_day_of_week":"",
                    "specific_day_of_month":"",
                    "timing_description":"",
                    "event_name":"",
                    "event_time_offset":"",
                    "on":"",
                    "off":"",
                    "repetetions":""
                }
        }
        //var result = addMedicationStatement(data)
        console.log({...JSON.stringify(data)})
        // //console.log(result)
        // if(result)
        //     toast("Medication Statement added successfully")
        // else
        //     toast("Medication Statement cannot be successfully")
    }

    return(
        <>
        <h1 className='main_heading'>Medication Summary</h1>
        <div className='form_container'>
            <h1>Medication Statement</h1>
            <h2>Description</h2>
            <label>Medication Item</label>
            <input onChange={e => setMedicationItem(e.target.value)}></input>
            <h4>Medication</h4>
            <label>Name</label>
            <input onChange={e => setMedicationName(e.target.value)}></input>
            <br/>
            <label>Form</label>
            <input onChange={e => setMedicationForm(e.target.value)}></input>
            <label>Category</label>
            <select>
                <option value='Ad-hoc mixture'>Ad-hoc mixture</option>
                <option value='Ingredient'>Ingredient</option>
                <option value='Multi-ingredient product'>Multi-ingredient product</option>
                <option value='Single-ingredient product'>Single-ingredient product</option>
                <option value='Combination product'>Combination product</option>
            </select>
            <h4>Strength</h4>
            <label>Strength Numerator</label>
            <input onChange={e => setStrengthNumerator(e.target.value)}></input>
            <br/>
            <label>Strength numerator unit</label>
            <input onChange={e => setStrengthNumeratorUnit(e.target.value)}></input>
            <br/>
            <label>Strength denominator</label>
            <input onChange={e => setStrengthDenominator(e.target.value)}></input>
            <br/>
            <label>Strength denominator unit</label>
            <input onChange={e => setStrengthDenominatorUnit(e.target.value)}></input>
            <br/>
            <label>Unit of presentation</label>
            <input onChange={e => setUnitOfPresentation(e.target.value)}></input>
            <br/>
            <label>Strength (concentration)</label>
            <input onChange={e => setStrength(e.target.value)}></input>
            <br/>
            <label>Manufacturer</label>
            <input onChange={e => setManufacturer(e.target.value)}></input>
            <br/>
            <label>Batch ID </label>
            <input onChange={e => setBatchId(e.target.value)}></input>
            <br/>
            <label>Expiry </label>
            <input onChange={e => setExpiry(e.target.value)}></input>
            <br/>
            <label>Amount </label>
            <input onChange={e => setAmount(e.target.value)}></input>
            <br/>
            <label>Amount unit </label>
            <input onChange={e => setAmountUnit(e.target.value)}></input>
            <br/>
            <label>Alternate amount</label>
            <input onChange={e => setAlternateAmount(e.target.value)}></input>
            <br/>
            <label>Alternate amount unit</label>
            <input onChange={e => setAlternateAmountUnit(e.target.value)}></input>
            <br/>
            <label>Role</label>
            <select>
                <option value='Therapeutic'>Therapeutic</option>
                <option value='Adjuvant'>Ingredient</option>
                <option value='Excipient'>Multi-ingredient product</option>
            </select>
            <br/>
            <label>Description</label>
            <input onChange={e => setDescription(e.target.value)}></input>
            <br/>
            <h4>Dosage</h4>
            <label>Dose amount</label>
            <input onChange={e => setDoseAmount(e.target.value)}></input>
            <br/>
            <label>Lower</label>
            <input onChange={e => setDoseLower(e.target.value)}></input>
            <br/>
            <label>Upper</label>
            <input onChange={e => setDoseUpper(e.target.value)}></input>
            <br/>
            <label>Dose unit</label>
            <input onChange={e => setDoseUnit(e.target.value)}></input>
            <br/>
            <label>Dose formula</label>
            <input onChange={e => setDoseFormula(e.target.value)}></input>
            <br/>
            <label>Dose description</label>
            <input onChange={e => setDoseDescription(e.target.value)}></input>
            <br/>
            <h4>Timing</h4>
            <label>Dose description</label>
            <input onChange={e => setTimingDoseDesrciption(e.target.value)}></input>
            <br/>
            <h4>Timing-daliy</h4>
            <label>Frequency</label>
            <input onChange={e => setTimingDailyTimingFrequency(e.target.value)}></input>
            <select>
                <option value='1/d'>1/d</option>
                <option value='1/min'>1/min</option>
                <option value='1/s'>1/s</option>
                <option value='1/h'>1/h</option>
            </select>
            <label>Lower</label>
            <input onChange={e => setTimingDailyTimingFrequencyLower(e.target.value)}></input>
            <label>Upper</label>
            <input onChange={e => setTimingDailyTimingFrequencyUpper(e.target.value)}></input>
            <br/>
            <label>Interval</label>
            <input onChange={e => setTimingDailyTimingInterval(e.target.value)}></input>
            <br/>
            <label>Specific time</label>
            <input type='time' onChange={e => setTimingDailyTimingSpecificTime(e.target.value)}></input>
            <br/>
            <label>Timing description</label>
            <input onChange={e => setTimingDailyDescription(e.target.value)}></input>
            <br/>
            <label>Exact timing critical</label>
            <input type='checkbox' onChange={e => setTimingDailyExactTimingCritical(e.target.value)}></input>
            <br/>
            <label>As required</label>
            <input type='checkbox' onChange={e => setTimingDailyAsRequired(e.target.value)}></input>
            <br/>
            <label>As required criterion</label>
            <input onChange={e => setTimingDailyAsRequiredCriterion(e.target.value)}></input>
            <br/>
            <h4>Specific Event</h4>
            <label>Event name</label>
            <input onChange={e => setTimingDailySpecificEventEventName(e.target.value)}></input>
            <br/>
            <label>Time offset</label>
            <input onChange={e => setTimingDailySpecificEventTimeOffset(e.target.value)}></input>
            <br/>
            <h4>On/Off cycle</h4>
            <label>On</label>
            <input onChange={e => setTimingDailyCycleOn(e.target.value)}></input>
            <br/>
            <label>Off</label>
            <input onChange={e => setTimingDailyCycleOff(e.target.value)}></input>
            <br/>
            <label>Repetitions</label>
            <input onChange={e => setTimingDailyCycleRepetitions(e.target.value)}></input>
            <br/>
            <h4>Administration Details</h4>
            <label>Route</label>
            <input onChange={e => setAdministrationDetailsRoute(e.target.value)}></input>
            <br/>
            <label>Body site</label>
            <input onChange={e => setAdministrationDetailsBodySite(e.target.value)}></input>
            <br/>
            <h4>Timing - non-daily</h4>
            <label>Repetition Interval</label>
            <input onChange={e => setTimingNonDailyRepetitionInterval(e.target.value)}></input>
            <br/>
            <label>Frequency</label>
            <input onChange={e => setTimingNonDailyFrequency(e.target.value)}></input>
            <select>
                <option value='1/wk'>1/wk</option>
                <option value='1/mo'>1/mo</option>
                <option value='1/a'>1/a</option>
            </select>
            <br/>
            <label>Lower</label>
            <input onChange={e => setTimingNonDailyFrequencyLower(e.target.value)}></input>
            <br/>
            <label>Upper</label>
            <input onChange={e => setTimingNonDailyFrequencyUpper(e.target.value)}></input>
            <br/>
            <label>Specific Day of the week</label>
            <select>
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
                <option value='Saturday'>Saturday</option>
                <option value='Sunday'>Sunday</option>
            </select>
            <br/>
            <label>Specific Day of month</label>
            <input onChange={e => setTimingNonDailySpecificDayOfMonth(e.target.value)}></input>
            <br/>
            <label>Lower</label>
            <input onChange={e => setTimingNonDailySpecificDayOfMonthLower(e.target.value)}></input>
            <br/>
            <label>Upper</label>
            <input onChange={e => setTimingNonDailySpecificDayOfMonthUpper(e.target.value)}></input>
            <br/>
            <label>Timing description</label>
            <input onChange={e => setTimingNonDailyTimingDescription(e.target.value)}></input>
            <br/>
            <h4>Specific event</h4>
            <label>Event name</label>
            <input onChange={e => setTimingNonDailyFrequencyUpper(e.target.value)}></input>
            <br/>
            <label>Time offset</label>
            <input onChange={e => setTimingNonDailyFrequencyUpper(e.target.value)}></input>
            <br/>
            <h4>On/Off cycle</h4>
            <label>On</label>
            <input onChange={e => setTimingNonDailyCycleOn(e.target.value)}></input>
            <br/>
            <label>Off</label>
            <input onChange={e => setTimingNonDailyCycleOff(e.target.value)}></input>
            <br/>
            <label>Repetitions</label>
            <input onChange={e => setTimingNonDailyCycleRepetitions(e.target.value)}></input>
            <br/>
            <h2>Protocol</h2>
            <label>Order ID</label>
            <input onChange={e => setMedicationProtocolOrderId(e.target.value)}></input>
            <br/>
            <h1>Exclusion Global</h1>
            <h2>Data</h2>
            <label>Global exclusion of medication use</label>
            <select>
                <option value='No known medications'>No known medications</option>
            </select>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement</label>
            <select>
                <option value='No information about medications'>No information about medications</option>
            </select>
            <br/>
            <label>Last Updated</label>
            <input type='datetime-local' onChange={e => setAbsenceOfInformationProtocolLastUpdated(e.target.value)}></input>
            <br/>
            <button>Temporary save</button>
            <button onClick={saveMedicationStatement}>Final save</button>
        </div>
        </>
    )
}
export default MedicationSummary;
