//changesinArunavBranch
import React,{useState} from 'react'
import { toast } from 'react-toastify'
import { addMedicationStatement } from '../../utilities/MedicationStatementUtility'
import './styles.css'
const ShowMedicationStatement = () => {
    
    var data = 
    {
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
        },
    
    }

    return(
        <>
        <h1 className='main_heading'>Medication Summary</h1>
        <div className='form_container'>
            <h1>Medication Statement</h1>
            <h2>Description</h2>
            <label>Medication Item : <span className='values'>{data["medication"]["medication_item"]}</span></label>
            <h4>Medication</h4>
            <label>Name: {data["medication"]["medication_name"]}</label>
            <br/>
            <label>Form :{data["medication"]["medication_form"]} </label>
            <br/>
            <label>Category :</label>
            
            <h4>Strength</h4>
            <label>Strength Numerator</label>
            
            <br/>
            <label>Strength numerator unit</label>

            <br/>
            <label>Strength denominator</label>
            
            <br/>
            <label>Strength denominator unit</label>
            
            <br/>
            <label>Unit of presentation</label>
        
            <br/>
            <label>Strength (concentration)</label>
            
            <br/>
            <label>Manufacturer</label>
            
            <br/>
            <label>Batch ID </label>
            
            <br/>
            <label>Expiry </label>
            
            <br/>
            <label>Amount </label>
            
            <br/>
            <label>Amount unit </label>
            
            <br/>
            <label>Alternate amount</label>
           
            <br/>
            <label>Alternate amount unit</label>
           
            <br/>
            <label>Role</label>
            <br/>
            <label>Description</label>
            
            <br/>
            <h4>Dosage</h4>
            <label>Dose amount</label>
            
            <br/>
            <label>Lower</label>
            
            <br/>
            <label>Upper</label>
           
            <br/>
            <label>Dose unit</label>
            
            <br/>
            <label>Dose formula</label>
            
            <br/>
            <label>Dose description</label>
           
            <br/>
            <h4>Timing</h4>
            <label>Dose description</label>
            
            <br/>
            <h4>Timing-daliy</h4>
            <label>Frequency</label>
            
            <label>Lower</label>
            
            <label>Upper</label>
            
            <br/>
            <label>Interval</label>
            
            <br/>
            <label>Specific time</label>
            
            <br/>
            <label>Timing description</label>
            
            <br/>
            <label>Exact timing critical</label>
         
            <br/>
            <label>As required</label>
            
            <br/>
            <label>As required criterion</label>
            
            <br/>
            <h4>Specific Event</h4>
            <label>Event name</label>
            
            <br/>
            <label>Time offset</label>
            
            <br/>
            <h4>On/Off cycle</h4>
            <label>On</label>
            
            <br/>
            <label>Off</label>
            
            <br/>
            <label>Repetitions</label>
            
            <br/>
            <h4>Administration Details</h4>
            <label>Route</label>
            
            <br/>
            <label>Body site</label>
            
            <br/>
            <h4>Timing - non-daily</h4>
            <label>Repetition Interval</label>
            
            <br/>
            <label>Frequency</label>
            
            
            <br/>
            <label>Lower</label>
            
            <br/>
            <label>Upper</label>
            
            <br/>
            <label>Specific Day of the week</label>
            
            <br/>
            <label>Specific Day of month</label>
            
            <br/>
            <label>Lower</label>
           
            <br/>
            <label>Upper</label>
            
            <br/>
            <label>Timing description</label>
           
            <br/>
            <h4>Specific event</h4>
            <label>Event name</label>
           
            <br/>
            <label>Time offset</label>
            
            <br/>
            <h4>On/Off cycle</h4>
            <label>On</label>
            
            <br/>
            <label>Off</label>
            
            <br/>
            <label>Repetitions</label>
           
            <br/>
            <h2>Protocol</h2>
            <label>Order ID</label>
            
            <br/>
            <h1>Exclusion Global</h1>
            <h2>Data</h2>
            <label>Global exclusion of medication use</label>
            
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement</label>
            <br/>
            <label>Last Updated</label>
            
            <br/>
        
        </div>
        </>
    )
}
export default ShowMedicationStatement;
