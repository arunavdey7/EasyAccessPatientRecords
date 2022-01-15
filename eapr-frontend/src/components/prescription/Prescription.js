import React,{useState} from 'react'
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
            order_id:currCount + 1
        })
        localStorage.setItem('tempMedOrders',JSON.stringify(medOrders))
        localStorage.setItem('currCount',JSON.stringify(currCount))
        window.location.href = '/createprescription'
    }
    return(
    <div className='prescription_container'>
        <h1 className='prescription_heading'>Prescription</h1>
        <label>Prescription Identifier</label>
        <input></input>
        <h2>Medication Order</h2>
        <h4>Order</h4>
        <label>Medication Item</label>
        <input onChange={e => setMedicationItem(e.target.value)}></input>
        <br/>
        <h4>Preparation</h4>
        <label>Substance name</label>
        <input onChange={e => setSubstance_name(e.target.value)}></input>
        <br/>
        <label>Form</label>
        <input onChange={e => setForm(e.target.value)}></input>
        <br/>
        <label>Strength</label>
        <input onChange={e => setStrength(e.target.value)}></input>
        <br/>
        <label>Strength unit</label>
        <input onChange={e => setStrengthUnit(e.target.value)}></input>
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
        <input onChange={e => setDescription(e.target.value)}></input>
        <br/>
        <label>Route</label>
        <input onChange={e => setRoute(e.target.value)}></input>
        <br/>
        <label>Dosage instructions</label>
        <input onChange={e => setDosageInstruction(e.target.value)}></input>
        <br/>
        <h4>Dose Direction</h4>
        <h4>Dose pattern</h4>
        <label >Dose</label>
        <input></input>
        <br/>
        <label>Lower</label>
        <input></input>
        <br/>
        <label>Upper</label>
        <input></input>
        <br/>
        <label>Dose Unit</label>
        <input onChange={e => setDose_unit(e.target.value)}></input>
        <br/>
        <h4>Dose timing</h4>
        <label>Frequency</label>
        <input onChange={e => setDose_frequency(e.target.value)}></input>
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
        <label>Repetition Interval</label>
        <input onChange={e => setRepetition_interval(e.target.value)}></input>
        <br/>
        <label>Specific Date</label>
        <input type='date'></input>
        <input type='time'></input>
        <br/>
        <label>Specific day of the week</label>
        <input onChange={e => setSpecific_day_of_week(e.target.value)}></input>
        <br/>
        <label>Specific day of the month</label>
        <input onChange={e => setSpecific_day_of_month(e.target.value)}></input>
        <br/>
        <h4>Specific event</h4>
        <label>Event name</label>
        <input onChange={e => setSpecific_Event(e.target.value)}></input>
        <br/>
        <label>Start interval</label>
        <input onChange={e => (e.target.value)}></input>
        <br/>
        <h4>Medication Safety</h4>
        <h4>Max dose per period</h4>
        <label>Maximum amount</label>
        <input onChange={e => setMaximumAmount(e.target.value)}></input>
        <br/>
        <label>Maximum amount dose unit</label>
        <input onChange={e => setMaximumAmountDoseUnit(e.target.value)}></input>
        <br/>
        <label>Allowed period</label>
        <input onChange={e => setAllowedPeriod(e.target.value)}></input>
        <br/>
        <label>Override reason</label>
        <input onChange={e => setOverrideReason(e.target.value)}></input>
        <br/>
        <label>Additional Instructions</label>
        <input onChange={e => setAdditionalInstructions(e.target.value)}></input>
        <br/>
        <label>Reason</label>
        <input onChange={e => setReasons(e.target.value)}></input>
        <br/>
        <h4>Order details</h4>
        <h4>Course Summary</h4>
        <label>Status</label>
        <input onChange={e => setStatus(e.target.value)}></input>
        <br/>
        <label>Date discontinued</label>
        <input type='datetime-local'></input>
        <br/>
        <label>Date written</label>
        <input type='datetime-local'></input>
        <br/>
        <h4>Authorization details</h4>
        <label>Number of repeats allowed</label>
        <input onChange={e => setNumOfRepeatsAllowed(e.target.value)}></input>
        <br/>
        <label>Validity period</label>
        <input type='datetime-local'></input>
        <br/>
        <h4>Dispense Directions</h4>
        <label>Dispense instructions</label>
        <input onChange={e => setDispenseInstrution(e.target.value)}></input>
        <br/>
        <h4>Dispense amount</h4>
        <label>Amount description</label>
        <input onChange={e => setDispenseAmountDescription(e.target.value)}></input>
        <br/>
        <label>Amount</label>
        <input onChange={e => setDispenseAmount(e.target.value)}></input>
        <br/>
        <label>Units</label>
        <input onChange={e => setDispenseAmountUnit(e.target.value)}></input>
        <br/>
        <label>Duration of supply</label>
        <input></input>
        <br/>
        <label>Comment</label>
        <input onChange={e => setComment(e.target.value)}></input>
        <br/>
        <label>Identifier</label>
        <input></input>
        <br/>
        <button onClick={handleAddMore}>Add More</button>
        <button>Finalize</button>
    </div>
    )

}
export default Prescription;