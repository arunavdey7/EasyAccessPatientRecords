import React,{useState, useEffect} from 'react' 
import { toast } from 'react-toastify';
import { addPrescription } from '../../utilities/PrescriptionUtility';
import './styles.css'
const Prescription = () => {

    const [medicationItem, setMedicationItem] = useState("");
    const [route, setRoute] = useState("") ;
    const [dosageInstruction, setDosageInstruction] = useState("");
    const [maximumAmount, setMaximumAmount] = useState(""); 
    const [maximumAmountDoseUnit, setMaximumAmountDoseUnit] = useState("");
    const [allowedPeriod , setAllowedPeriod] = useState("");
    const [overrideReason, setOverrideReason] = useState("");
    const [additionalInstructions, setAdditionalInstructions] = useState("");
    const [reasons, setReasons] = useState("");
    const [status, setStatus] = useState("");
    const [dateDiscontinued, setDateDiscontinued] = useState("");
    const [dateWritten, setDateWritten] = useState("");
    const [numOfRepeatsAllowed, setNumOfRepeatsAllowed] = useState("");
    const [validityPeriod, setValidityPeriod] = useState("");
    const [dispenseInstrution, setDispenseInstrution] = useState("");
    const [dispenseAmountDescription, setDispenseAmountDescription] = useState("");
    const [dispenseAmount, setDispenseAmount] = useState("");
    const [dispenseAmountUnit, setDispenseAmountUnit] = useState("");
    const [comment, setComment] = useState("");
    const [dose_unit, setDose_unit] = useState("");
    const [dose_frequency, setDose_frequency] = useState("");
    const [dose_timing, setDose_timing] = useState("");
    const [dose_duration, setDose_duration] = useState("");
    const [repetition_interval, setRepetition_interval] = useState("");
    const [Specific_date, setSpecific_date] = useState("");
    const [specific_day_of_week, setSpecific_day_of_week] = useState("");
    const [Specific_day_of_month, setSpecific_day_of_month] = useState("");
    const [specific_Event, setSpecific_Event] = useState("");
    const [substance_name, setSubstance_name] = useState("");
    const [form, setForm] = useState("");
    const [strength, setStrength] = useState("");
    const [strengthUnit, setStrengthUnit] = useState("");
    const [diluentAmount, setDiluentAmount] = useState("");
    const [diluentunit, setDiluentunit] = useState("");
    const [description, setDescription] = useState("");
        
    var medOrders = JSON.parse(localStorage.getItem('tempMedOrders')) || []
    var currCount = JSON.parse(localStorage.getItem('currCount')) || [0]
    const handleAddMore = () => {
        
        medOrders.push({
            "medicationItem" : medicationItem,
            "route" : route,
            "dosageInstruction":dosageInstruction,
            "maximumAmount" : maximumAmount,
            "maximumAmountDoseUnit":maximumAmountDoseUnit,
            "allowedPeriod" : allowedPeriod,
            "overrideReason" : overrideReason,
            "additionalInstructions" :additionalInstructions,
            "reasons" : reasons,
            "status" : status,
            "dateDiscontinued":dateDiscontinued,
            "dateWritten" : dateWritten,
            "numOfRepeatsAllowed":numOfRepeatsAllowed,
            "validityPeriod" :validityPeriod,
            "dispenseInstrution":dispenseInstrution,
            "dispenseAmountDescription" :dispenseAmountDescription,
            "dispenseAmount" : dispenseAmount,
            "dispenseAmountUnit" : dispenseAmountUnit,
            "comment" : comment,
            "dose_unit" : dose_unit,
            "dose_frequency" : dose_frequency,
            "dose_timing" : dose_timing,
            "dose_duration" : dose_duration,
            "repetition_interval" : repetition_interval,
            "Specific_date" : Specific_date,
            "specific_day_of_week" : specific_day_of_week,
            "Specific_day_of_month" :Specific_day_of_month,
            "specific_Event" :specific_Event,
            "substance_name" :substance_name,
            "form" :form,
            "strength" :strength,
            "strengthUnit" : strengthUnit,
            "diluentAmount" : diluentAmount,
            "diluentunit" : diluentunit,
            "description" : description
            })
        localStorage.setItem('tempMedOrders',JSON.stringify(medOrders))
        localStorage.setItem('currCount',JSON.stringify(currCount))
        window.location.href = '/createprescription'
    }

    const postPrescriptionData = () => {
        var requestData = {
            patient_id:JSON.parse(localStorage.getItem('patient_info')).id,
            medOrders:JSON.parse(localStorage.getItem('tempMedOrders'))
        }
        var result = addPrescription(requestData)
        if(result)
            toast("Prescription successfully created")
        else
            toast("Prescription was not created")
    }
    return(
    <div className='prescription_container'>
        <h1 className='prescription_heading'>Prescription</h1>
        <h2>Medication Order</h2>
        <h4>Order</h4>
        <label>Medication Item</label>
        <input onChange={e => setMedicationItem(e.target.value)}></input>
        <h4>Preparation</h4>
        <label>Substance name</label>
        <input onChange={e => setSubstance_name(e.target.value)}></input>
        <br/>
        <label>Form</label>
        <input onChange={e => setForm(e.target.value)}></input>
        <br/>
        <label >Strength</label>
        <input onChange={e => setStrength(e.target.value)}></input>
        <br/>
        <label>Strength unit</label>
        <input onChange={e => setStrength(e.target.value)}></input>
        <br/>
        <h4>Dilutent</h4>
        <label>Dilutent amount</label>
        <input onChange={e => setDiluentAmount(e.target.value)}></input>
        <br/>
        <label>Dilutent unit</label>
        <input onChange={e => setDiluentunit(e.target.value)}></input>
        <br/>
        <h4>Ingredient</h4>
        <h4>Ingredient substance</h4>
        <label>Substance name</label>
        <input onChange={e => setSubstance_name(e.target.value)}></input>
        <br/>
        <label>Form</label>
        <input onChange={e => setForm(e.target.value)}></input>
        <br/>
        <label>Category</label>
        <select>
            <option value='Product'>Product</option>
            <option value='Ad-hoc mixture'>Ad-hoc mixture</option>
            <option value='Ingredient'>Ingredient</option>
            <option value='Combination Product'>Combination Product</option>
            <option value='Single-substance product'>Single-substance product</option>
        </select>
        <br/>
        <label>Ingredient amount</label>
        <input></input>
        <br/>
        <label>Ingredient amount unit</label>
        <input></input>
        <br/>
        <label>Role</label>
        <select>
            <option value='Therapeutic'>Therapeutic</option>
            <option value='Electrolyte'>Electrolyte</option>
            <option value='Toxic'>Toxic</option>
            <option value='Adjuvant'>Adjuvant</option>
            <option value='Diluent'>Diluent</option>
            <option value='Propellent'>Propellent</option>
            <option value='Preservative'>Preservative</option>
            <option value='Colouring'>Colouring</option>
            <option value='Ingredient'>Ingredient</option>
        </select>
        <label>or</label>
        <input></input>
        <br/>
        <label>Description</label>
        <input></input>
        <br/>
        <label>Route</label>
        <input></input>
        <br/>
        <label>Dosage instructions</label>
        <input></input>
        <br/>
        <h4>Dose Direction</h4>
        <h4>Dose pattern</h4>
        <label>Dose</label>
        <input></input>
        <br/>
        <label>Lower</label>
        <input></input>
        <br/>
        <label>Upper</label>
        <input></input>
        <br/>
        <label>Dose Unit</label>
        <input></input>
        <br/>
        <h4>Dose timing</h4>
        <label>Frequency</label>
        <input></input>
        <select>
            <option value='1/d'>1/d</option>
            <option value='1/min'>1/min</option>
            <option value='1/s'>1/s</option>
            <option value='1/h'>1/h</option>
        </select>
        <br/>
        <label>Lower</label>
        <input></input>
        <select>
            <option value='1/d'>1/d</option>
            <option value='1/min'>1/min</option>
            <option value='1/s'>1/s</option>
            <option value='1/h'>1/h</option>
        </select>
        <br/>
        <label>Upper</label>
        <input></input>
        <select>
            <option value='1/d'>1/d</option>
            <option value='1/min'>1/min</option>
            <option value='1/s'>1/s</option>
            <option value='1/h'>1/h</option>
        </select>
        <br/>
        <label>Interval</label>
        <input></input>
        <br/>
        <label>Specific time</label>
        <input type='time'></input>
        <br/>
        <label>Named time event</label>
        <input></input>
        <select>
            <option value='immediately(stat)'>immediately(stat)</option>
            <option value='in the morning'>in the morning</option>
            <option value='at night'>at night</option>
            <option value='in the morning and at night'>in the morning and at night</option>
        </select>
        <br/>
        <label>Exact timing critical</label>
        <input type='checkbox'></input>
        <br/>
        <label>As required</label>
        <input type='checkbox'></input>
        <br/>
        <label>As required criterion</label>
        <input></input>
        <br/>
        <label>Infusion administration rate</label>
        <input></input>
        <select>
            <option value='l/h'>l/h</option>
            <option value='ml/min'>ml/min</option>
            <option value='ml/s'>ml/s</option>
            <option value='ml/h'>ml/h</option>
        </select>
        <br/>
        <label>Direction duration</label>
        <input></input>
        <br/>
        <h4>Direction repetetion</h4>
        <label>Repetetion Interval</label>
        <input></input>
        <br/>
        <label>Specific Date</label>
        <input type='date'></input>
        <input type='time'></input>
        <br/>
        <label>Specific day of the week</label>
        <input></input>
        <br/>
        <label>Specific day of the month</label>
        <input></input>
        <br/>
        <h4>Specific event</h4>
        <label>Event name</label>
        <input></input>
        <br/>
        <label>Start interval</label>
        <input></input>
        <br/>
        <h4>Medication Safety</h4>
        <h4>Max dose per period</h4>
        <label>Maximum amount</label>
        <input></input>
        <br/>
        <label>Maximum amount dose unit</label>
        <input></input>
        <br/>
        <label>Allowed period</label>
        <input></input>
        <br/>
        <label>Override reason</label>
        <input></input>
        <br/>
        <label>Additional Instructions</label>
        <input></input>
        <br/>
        <label>Reason</label>
        <input></input>
        <br/>
        <h4>Order details</h4>
        <h4>Course Summary</h4>
        <label>Status</label>
        <input></input>
        <br/>
        <label>Date discontinued</label>
        <input type='datetime-local'></input>
        <br/>
        <label>Date written</label>
        <input type='datetime-local'></input>
        <br/>
        <h4>Authorization details</h4>
        <label>Number of repeats allowed</label>
        <input></input>
        <br/>
        <label>Validity period</label>
        <input type='datetime-local'></input>
        <br/>
        <h4>Dispense Directions</h4>
        <label>Dispense instructions</label>
        <input></input>
        <br/>
        <h4>Dispense amount</h4>
        <label>Amount description</label>
        <input></input>
        <br/>
        <label>Amount</label>
        <input></input>
        <br/>
        <label>Units</label>
        <input></input>
        <br/>
        <label>Duration of supply</label>
        <input></input>
        <br/>
        <label>Comment</label>
        <input></input>
        <br/>
        <label>Identifier</label>
        <input></input>
        <br/>
        <button onClick={handleAddMore}>Add More</button>
        <button onClick={postPrescriptionData}>Finalize</button>
    </div>
    )

}
export default Prescription;