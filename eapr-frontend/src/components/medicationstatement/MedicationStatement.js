import React,{useState} from 'react'
import { toast } from 'react-toastify'
import { addMedicationStatement } from '../../utilities/MedicationStatementUtility'
import './styles.css'
const MedicationSummary = () => {
    
    const [data, setData] = useState({
            patient_id:parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
            medication_item:'',
            medication_name:'',
            medication_form:'',
            strength:"1",
            exact_timing_critical:"2",
            medication_category:'',
            medication_strength_numerator:9,
            medication_strength_numerator_unit:"",
            medication_strength_denominator:0.3,
            medication_strength_denominator_unit:"",
            unit_of_presentation:"",
            'strength(concentration)':"",
            manufacturer:"",
            batch_id:1,
            expiry:"",
            amount:"1",
            amount_unit:"",
            alternate_amount:"5",
            alternate_amount_unit:"",
            role:"",
            description:"",
            dose_amount:"1",
            dose_unit:"",
            dose_formula:"",
            dose_description:"",
            dose_frequency_lower:"2",
            dose_frequency_lower_rate:"1",
            dose_frequency_higher:"3",
            dose_frequency_higher_rate:"1",
            dose_interval:"",
            dose_specific_time:"",
            dose_specific_time_lower:"",
            dose_specific_time_upper:"",
            dose_timing_description:"",
            dose_exact_timing_critical:"",
            as_required:"",
            as_required_criterion:"",
            dose_event_name:"",
            dose_time_offset:"",
            dose_on:"",
            dose_off:"",
            dose_repetetions:"6",
    
            route:"",
            body_site:"",
    
            time_repetetion_interval:1,
            time_frequency_lower:"2",
            time_frequency_lower_rate:"1",
            time_frequency_higher:"3",
            time_frequency_higher_rate:"3",
            time_specific_date:"",
            time_specific_date_lower:"",
            time_specific_date_upper:"",
            time_specific_day_of_week:"1",
            time_specific_day_of_month:"1",
            time_event_time_offset:"",
            timing_description:"",
            time_event_name:"",
            timing_on:"",
            timing_off:"",
            timing_repetetions:"",
    
            global_exclusion_of_adverse_reactions:"",
            absence_of_information_statement:"",
            absence_of_information_protocol_last_updated:""
    })

    const handleChange = e =>
    {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const saveMedicationStatement = () =>{
        
        var result = addMedicationStatement(data)
        if(result)
            toast("Medication Statement added successfully")
        else
            toast("Medication Statement cannot be successfully")
    }

    return(
        <>
        <h1 className='main_heading'>Medication Summary</h1>
        <div className='form_container'>
            <h1>Medication Statement</h1>
            <h2>Description</h2>
            <label>Medication Item</label>
            <input name='medication_item' value={data.medication_item || ''} onChange={handleChange}></input>
            <h4>Medication</h4>
            <label>Name</label>
            <input name = 'medication_name' value={data.medication_name || ''} onChange={handleChange}></input>
            <br/>
            <label>Form</label>
            <input name='medication_form' value={data.medication_form || ''} onChange={handleChange}></input>
            <label>Category</label>
            <select name='medication_category' value={data.medication_category || ''} onChange={handleChange}>
                <option value='Ad-hoc mixture'>Ad-hoc mixture</option>
                <option value='Ingredient'>Ingredient</option>
                <option value='Multi-ingredient product'>Multi-ingredient product</option>
                <option value='Single-ingredient product'>Single-ingredient product</option>
                <option value='Combination product'>Combination product</option>
            </select>
            <h4>Strength</h4>
            <label>Strength Numerator</label>
            <input name = 'medication_strength_numerator' value={data.medication_strength_numerator || ''} onChange={handleChange}></input>
            <br/>
            <label>Strength numerator unit</label>
            <input name = 'medication_strength_numerator_unit' value={data.medication_strength_numerator_unit || ''}  onChange={handleChange}></input>
            <br/>
            <label>Strength denominator</label>
            <input name = 'medication_strength_denominator' value={data.medication_strength_denominator || ''} onChange={handleChange}></input>
            <br/>
            <label>Strength denominator unit</label>
            <input name = 'medication_strength_denominator_unit' value={data.medication_strength_denominator_unit || ''} onChange={handleChange}></input>
            <br/>
            <label>Unit of presentation</label>
            <input name ='unit_of_presentation' value={data.unit_of_presentation || ''} onChange={handleChange}></input>
            <br/>
            <label>Strength (concentration)</label>
            <input></input>
            <br/>
            <label>Manufacturer</label>
            <input name = 'manufacturer' value={data.manufacturer || ''} onChange={handleChange}></input>
            <br/>
            <label>Batch ID </label>
            <input name='batch_id' value={data.batch_id || ''} onChange={handleChange}></input>
            <br/>
            <label>Expiry </label>
            <input name='expiry' value={data.expiry || ''}  onChange={handleChange}></input>
            <br/>
            <label>Amount </label>
            <input name = 'amount' value={data.amount || ''} onChange={handleChange}></input>
            <br/>
            <label>Amount unit </label>
            <input name='amount_unit' value={data.amount_unit || ''} onChange={handleChange}></input>
            <br/>
            <label>Alternate amount</label>
            <input onChange={handleChange}></input>
            <br/>
            <label>Alternate amount unit</label>
            <input onChange={handleChange}></input>
            <br/>
            <label>Role</label>
            <select name = 'role' value={data.name || ''} onChange={handleChange}>
                <option value='Therapeutic'>Therapeutic</option>
                <option value='Adjuvant'>Ingredient</option>
                <option value='Excipient'>Multi-ingredient product</option>
            </select>
            <br/>
            <label>Description</label>
            <input name = 'description' value={data.description || ''} onChange={handleChange}></input>
            <br/>
            <h4>Dosage</h4>
            <label>Dose amount</label>
            <input name = 'dose_amount' value={data.dose_amount || ''} onChange={handleChange}></input>
            <br/>
            <label>Lower</label>
            <input name = 'dose_frequency_lower' value={data.dose_frequency_lower || ''} onChange={handleChange}></input>
            <br/>
            <label>Upper</label>
            <input name = 'dose_frequency_higher' value={data.dose_frequency_higher || ''} onChange={handleChange}></input>
            <br/>
            <label>Dose unit</label>
            <input name='dose_unit' value={data.dose_unit || ''} onChange={handleChange}></input>
            <br/>
            <label>Dose formula</label>
            <input name = 'dose_formula' value={data.dose_formula || ''} onChange={handleChange}></input>
            <br/>
            <label>Dose description</label>
            <input name = 'dose_description' value={data.dose_description || ''} onChange={handleChange}></input>
            <br/>
            <h4>Timing-daily</h4>
            <label>Frequency</label>
            <input></input>
            <select>
                <option value='1/d'>1/d</option>
                <option value='1/min'>1/min</option>
                <option value='1/s'>1/s</option>
                <option value='1/h'>1/h</option>
            </select>
            <label>Lower</label>
            <input name='dose_frequency_lower' value={data.dose_frequency_lower || ''} onChange={handleChange}></input>
            <label>Upper</label>
            <input name='dose_frequency_higher' value={data.dose_frequency_higher || ''} onChange={handleChange}></input>
            <br/>
            <label>Interval</label>
            <input name='time_repetetion_interval' value={data.time_repetetion_interval || ''} onChange={handleChange}></input>
            <br/>
            <label>Specific time</label>
            <input name = 'dose_specific_time' type='time' onChange={handleChange}></input>
            <br/>
            <label>Timing description</label>
            <input name='timing_description' value={data.timing_description || ''} onChange={handleChange}></input>
            <br/>
            <label>Exact timing critical</label>
            <input name='dose_exact_timing_critical' value={data.dose_exact_timing_critical || ''} type='checkbox' onChange={handleChange}></input>
            <br/>
            <label>As required</label>
            <input name='as_required' value={data.as_required || ''} type='checkbox' onChange={handleChange}></input>
            <br/>
            <label>As required criterion</label>
            <input name='as_required_criterion' value={data.as_required_criterion || ''} onChange={handleChange}></input>
            <br/>
            <h4>Specific Event</h4>
            <label>Event name</label>
            <input name='dose_event_name' value={data.dose_event_name || ''} onChange={handleChange}></input>
            <br/>
            <label>Time offset</label>
            <input name='dose_time_offset' value={data.dose_time_offset || ''} onChange={handleChange}></input>
            <br/>
            <h4>On/Off cycle</h4>
            <label>On</label>
            <input name='dose_on' value={data.dose_on || ''} onChange={handleChange}></input>
            <br/>
            <label>Off</label>
            <input name='dose_off' value={data.dose_off || ''} onChange={handleChange}></input>
            <br/>
            <label>Repetitions</label>
            <input name='dose_repetetions' value={data.dose_repetetions || ''} onChange={handleChange}></input>
            <br/>
            <h4>Administration Details</h4>
            <label>Route</label>
            <input name='route' value={data.route || ''} onChange={handleChange}></input>
            <br/>
            <label>Body site</label>
            <input name='body_site' value={data.body_site || ''} onChange={handleChange}></input>
            <br/>
            <h4>Timing - non-daily</h4>
            <label>Repetition Interval</label>
            <input name='time_repetetion_interval' value={data.time_repetetion_interval || ''} onChange={handleChange}></input>
            <br/>
            <label>Frequency</label>
            <input onChange={handleChange}></input>
            <select onChange={handleChange}>
                <option value='1/wk'>1/wk</option>
                <option value='1/mo'>1/mo</option>
                <option value='1/a'>1/a</option>
            </select>
            <br/>
            <label>Lower</label>
            <input name='time_frequency_lower' value={data.time_frequency_lower || ''} onChange={handleChange}></input>
            <br/>
            <label>Upper</label>
            <input name='time_frequency_higher' values={data.time_frequency_higher} onChange={handleChange}></input>
            <br/>
            <label>Specific Day of the week</label>
            <select name='time_specific_day_of_week' value={data.time_specific_day_of_week || ''} onChange={handleChange}>
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
            <input name='time_specific_day_of_month' value={data.time_specific_day_of_month || ''} onChange={handleChange}></input>
            <br/>
            <label>Lower</label>
            <input name='time_specific_date_lower' value={data.time_specific_date_lower || ''} onChange={handleChange}></input>
            <br/>
            <label>Upper</label>
            <input name='time_specific_date_upper' value={data.time_specific_date_upper || ''} onChange={handleChange}></input>
            <br/>
            <label>Timing description</label>
            <input name='timing_description' value={data.timing_description || ''} onChange={handleChange}></input>
            <br/>
            <h4>Specific event</h4>
            <label>Event name</label>
            <input name='time_event_name' value={data.time_event_name || ''} onChange={handleChange}></input>
            <br/>
            <label>Time offset</label>
            <input name='time_event_time_offset' value={data.time_event_time_offset || ''} onChange={handleChange}></input>
            <br/>
            <h4>On/Off cycle</h4>
            <label>On</label>
            <input name='timing_on' value={data.timing_on || ''} onChange={handleChange}></input>
            <br/>
            <label>Off</label>
            <input name='timing_off' value={data.timing_off || ''} onChange={handleChange}></input>
            <br/>
            <label>Repetitions</label>
            <input name='timing_repetetions' value={data.timing_repetetions || ''} onChange={handleChange}></input>
            <br/>
            <h2>Protocol</h2>
            <label>Order ID</label>
            <input onChange={handleChange}></input>
            <br/>
            <h1>Exclusion Global</h1>
            <h2>Data</h2>
            <label>Global exclusion of medication use</label>
            <select onChange={handleChange}>
                <option value='No known medications'>No known medications</option>
            </select>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement</label>
            <select onChange={handleChange}>
                <option value='No information about medications'>No information about medications</option>
            </select>
            <br/>
            <label>Last Updated</label>
            <input type='datetime-local' onChange={handleChange}></input>
            <br/>
            <button onClick={saveMedicationStatement}>Final save</button>
        </div>
        </>
    )
}
export default MedicationSummary;