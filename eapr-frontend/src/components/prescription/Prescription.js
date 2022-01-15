import React from 'react' 
import './styles.css'
const Prescription = () => {

        const [medicationItem, setMedicationItem] = useState("")
        const [route, setRoute] = useState("") 
        const [dosageInstruction, setDosageInstruction] = useState("")
        const [maximumAmount, setMaximumAmount] = useState("") 
        const [maximumAmountDoseUnit, setMaximumAmountDoseUnit] = useState("")
        const [allowedPeriod , setAllowedPeriod] = useState("")
        const [overrideReason, setOverrideReason] = useState("")
        additionalInstructions 
        reasons 
        status 
        dateDiscontinued
        dateWritten 
        numOfRepeatsAllowed
        validityPeriod 
        dispenseInstrution
        dispenseAmountDescription
        dispenseAmount 
        dispenseAmountUnit 
        comment 
        dose_unit 
        dose_frequency 
        dose_timing
        dose_duration 
        repetition_interval 
        Specific_date 
        specific_day_of_week 
        Specific_day_of_month 
        specific_Event
        substance_name 
        form 
        strength 
        strengthUnit 
        diluentAmount 
        diluentunit 
        description 
        
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
        <input></input>
        <h4>Preparation</h4>
        <label>Substance name</label>
        <input></input>
        <br/>
        <label>Form</label>
        <input></input>
        <br/>
        <label>Strength</label>
        <input></input>
        <br/>
        <label>Strength unit</label>
        <input></input>
        <br/>
        <h4>Dilutent</h4>
        <label>Dilutent amount</label>
        <input></input>
        <br/>
        <label>Dilutent unit</label>
        <input></input>
        <br/>
        <h4>Ingredient</h4>
        <h4>Ingredient substance</h4>
        <label>Substance name</label>
        <input></input>
        <br/>
        <label>Form</label>
        <input></input>
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
        <button>Finalize</button>
    </div>
    )

}
export default Prescription;