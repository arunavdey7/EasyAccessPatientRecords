import React,{useState} from 'react'
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
    //const [strengthDenominatorUnit, setStrengthDenominatorUnit] = useState("")



    return(
        <>
        <h1 className='main_heading'>Medication Summary</h1>
        <div className='form_container'>
            <h1>Medication Statement</h1>
            <h2>Description</h2>
            <label>Medication Item</label>
            <input></input>
            <h4>Medication</h4>
            <label>Name</label>
            <input></input>
            <br/>
            <label>Form</label>
            <input></input>
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
            <input></input>
            <br/>
            <label>Strength numerator unit</label>
            <input></input>
            <br/>
            <label>Strength denominator</label>
            <input></input>
            <br/>
            <label>Strength denominator unit</label>
            <input></input>
            <br/>
            <label>Unit of presentation</label>
            <input></input>
            <br/>
            <label>Strength (concentration)</label>
            <input></input>
            <br/>
            <label>Manufacturer</label>
            <input></input>
            <br/>
            <label>Batch ID </label>
            <input></input>
            <br/>
            <label>Expiry </label>
            <input></input>
            <br/>
            <label>Amount </label>
            <input></input>
            <br/>
            <label>Amount unit </label>
            <input></input>
            <br/>
            <label>Alternate amount</label>
            <input></input>
            <br/>
            <label>Alternate amount unit</label>
            <input></input>
            <br/>
            <label>Role</label>
            <select>
                <option value='Therapeutic'>Therapeutic</option>
                <option value='Adjuvant'>Ingredient</option>
                <option value='Excipient'>Multi-ingredient product</option>
            </select>
            <br/>
            <label>Description</label>
            <input></input>
            <br/>
            <h4>Dosage</h4>
            <label>Dose amount</label>
            <input></input>
            <br/>
            <label>Lower</label>
            <input></input>
            <br/>
            <label>Upper</label>
            <input></input>
            <br/>
            <label>Dose unit</label>
            <input></input>
            <br/>
            <label>Dose formula</label>
            <input></input>
            <br/>
            <label>Dose description</label>
            <input></input>
            <br/>
            <h4>Timing</h4>
            <label>Dose description</label>
            <input></input>
            <br/>
            <h4>Timing-daliy</h4>
            <label>Frequency</label>
            <input></input>
            <select>
                <option value='1/d'>1/d</option>
                <option value='1/min'>1/min</option>
                <option value='1/s'>1/s</option>
                <option value='1/h'>1/h</option>
            </select>
            <label>Lower</label>
            <input></input>
            <label>Upper</label>
            <input></input>
            <br/>
            <label>Interval</label>
            <input></input>
            <br/>
            <label>Specific time</label>
            <input type='time'></input>
            <br/>
            <label>Timing description</label>
            <input></input>
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
            <h4>Specific Event</h4>
            <label>Event name</label>
            <input></input>
            <br/>
            <label>Time offset</label>
            <input></input>
            <br/>
            <h4>On/Off cycle</h4>
            <label>On</label>
            <input></input>
            <br/>
            <label>Off</label>
            <input></input>
            <br/>
            <label>Repetitions</label>
            <input></input>
            <br/>
            <h4>Administration Details</h4>
            <label>Route</label>
            <input></input>
            <br/>
            <label>Body site</label>
            <input></input>
            <br/>
            <h4>Timing - non-daily</h4>
            <label>Repetition Interval</label>
            <input></input>
            <br/>
            <label>Frequency</label>
            <input></input>
            <select>
                <option value='1/wk'>1/wk</option>
                <option value='1/mo'>1/mo</option>
                <option value='1/a'>1/a</option>
            </select>
            <br/>
            <label>Lower</label>
            <input></input>
            <br/>
            <label>Upper</label>
            <input></input>
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
            <input></input>
            <br/>
            <label>Lower</label>
            <input></input>
            <br/>
            <label>Upper</label>
            <input></input>
            <br/>
            <label>Timing description</label>
            <input></input>
            <br/>
            <h4>Specific event</h4>
            <label>Event name</label>
            <input></input>
            <br/>
            <label>Time offset</label>
            <input></input>
            <br/>
            <h4>On/Off cycle</h4>
            <label>On</label>
            <input></input>
            <br/>
            <label>Off</label>
            <input></input>
            <br/>
            <label>Repetitions</label>
            <input></input>
            <br/>
            <h2>Protocol</h2>
            <label>Order ID</label>
            <input></input>
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
            <input type='datetime-local'></input>
            <br/>
            <button>Temporary save</button>
            <button>Final save</button>
        </div>
        </>
    )
}
export default MedicationSummary;