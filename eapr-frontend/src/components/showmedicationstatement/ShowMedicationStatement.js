import React,{useState, useEffect} from 'react'
import { toast } from 'react-toastify'
import { addMedicationStatement, getMedicationStatement,getMedicationStatementForDoctor } from '../../utilities/MedicationStatementUtility'
import './styles.css'
const ShowMedicationStatement = () => {
    
    const [data, setData] = useState(null)
    var currOrderId = parseInt(localStorage.getItem('currOrderId') || 0)
    var sessionData = JSON.parse(localStorage.getItem('sessionData'))
    useEffect(() => {
        if(sessionData.role === 'Doctor')
            sendRequest2()
        else if(sessionData.role === 'Patient')
            sendRequest1()
    },[])
    const sendRequest1 = async () => {
        var result =  await getMedicationStatement(currOrderId)
        setData(result)
    }
    const sendRequest2 = async () => {
        var result =  await getMedicationStatementForDoctor(currOrderId)
        setData(result)
    }

    if(data === null)
        return (<h1 style={{textAlign:"center"}}>Cannot load medical statement</h1>)
    return(
        <>
        <h1 className='main_heading'>Medication Summary</h1>
        <div className='form_container'>
            <h1>Medication Statement</h1>
            <h2>Description</h2>
            <label>Medication Item : <span className='values'>{data["medication"]["medication_item"]}</span></label>
            <h4>Medication</h4>
            <label>Name: <span className='values'>{data["medication"]["medication_name"]}</span></label>
            <br/>
            <label>Form : <span className='values'>{data["medication"]["medication_form"]}</span></label>
            <br/>
            <label>Category : <span className='values'>{data["medication"]["medication_category"]}</span></label>
            
            <h4>Strength</h4>
            <label>Strength Numerator : <span className='values'>{data["medication"]["medication_strength_numerator"]}</span></label>
            
            <br/>
            <label>Strength numerator unit : <span className='values'>{data["medication"]["medication_strength_numerator_unit"]}</span></label>

            <br/>
            <label>Strength denominator : <span className='values'>{data["medication"]["medication_strength_denominator"]}</span></label>
            
            <br/>
            <label>Strength denominator unit : <span className='values'>{data["medication"]["medication_strength_denominator_unit"]}</span></label>
            
            <br/>
            <label>Unit of presentation : <span className='values'>{data["medication"]["unit_of_presentation"]}</span></label>
        
            <br/>
            <label>Strength (concentration) : <span className='values'>{data["medication"]["strength"]}</span></label>
            
            <br/>
            <label>Manufacturer : <span className='values'>{data["medication"]["manufacturer"]}</span></label>
            
            <br/>
            <label>Batch ID : <span className='values'>{data["medication"]["batch_id"]}</span></label>
            
            <br/>
            <label>Expiry : <span className='values'>{data["medication"]["expiry"]}</span></label>
            
            <br/>
            <label>Amount : <span className='values'>{data["medication"]["amount"]}</span></label>
            
            <br/>
            <label>Amount unit : <span className='values'>{data["medication"]["amount_unit"]}</span></label>
            
            <br/>
            <label>Alternate amount : <span className='values'>{data["medication"]["alternate_amount"]}</span></label>
           
            <br/>
            <label>Alternate amount unit : <span className='values'>{data["medication"]["alternate_amount_unit"]}</span></label>
           
            <br/>
            <label>Role : <span className='values'>{data["medication"]["role"]}</span></label>
            <br/>
            <label>Description : <span className='values'>{data["medication"]["description"]}</span></label>
            
            <br/>
            <h4>Dosage</h4>
            <label>Dose amount : <span className='values'>{data["dosage"]["dose_amount"]}</span></label>
            
            <br/>
            <label>Lower : <span className='values'>{data["dosage"]["medication_form"]}</span></label>
            
            <br/>
            <label>Upper : <span className='values'>{data["dosage"]["medication_form"]}</span></label>
           
            <br/>
            <label>Dose unit : <span className='values'>{data["dosage"]["dose_unit"]}</span></label>
            
            <br/>
            <label>Dose formula : <span className='values'>{data["dosage"]["dose_formula"]}</span></label>
            
            <br/>
            <label>Dose description : <span className='values'>{data["dosage"]["dose_description"]}</span></label>
           
            <br/>
            <h4>Timing</h4>
            <label>Dose description : <span className='values'>{data["dosage"]["timing_description"]}</span></label>
            
            <br/>
            <h4>Timing-daliy</h4>
            <label>Frequency : <span className='values'>{data["dosage"]["medication_form"]}</span></label>
            
            <label>Lower : <span className='values'>{data["dosage"]["frequency_lower"]}</span></label>
            
            <label>Upper : <span className='values'>{data["dosage"]["frequency_higher"]}</span></label>
            
            <br/>
            <label>Interval : <span className='values'>{data["dosage"]["interval"]}</span></label>
            
            <br/>
            <label>Specific time : <span className='values'>{data["dosage"]["specific_time"]}</span></label>
            
            <br/>
            <label>Timing description : <span className='values'>{data["dosage"]["timing_description"]}</span></label>
            
            <br/>
            <label>Exact timing critical : <span className='values'>{data["dosage"]["exact_timing_critical?"]}</span></label>
         
            <br/>
            <label>As required : <span className='values'>{data["dosage"]["as_required"]}</span></label>
            
            <br/>
            <label>As required criterion : <span className='values'>{data["dosage"]["as_required_criterion"]}</span></label>
            
            <br/>
            <h4>Specific Event</h4>
            {/* <label>Event name : <span className='values'>{data["timing_non_daily"]["event_name"]}</span></label> */}
            
            <br/>
            <label>Time offset : <span className='values'>{data["dosage"]["time_offset"]}</span></label>
            
            <br/>
            <h4>On/Off cycle</h4>
            <label>On : <span className='values'>{data["dosage"][ "on"]}</span></label>
            
            <br/>
            <label>Off : <span className='values'>{data["dosage"][ "off"]}</span></label>
            
            <br/>
            <label>Repetitions : <span className='values'>{data["dosage"]["repetetions"]}</span></label>
            
            <br/>
            <h4>Administration Details</h4>
            <label>Route : <span className='values'>{data["administration_details"]["route"]}</span></label>
            
            <br/>
            <label>Body site : <span className='values'>{data["administration_details"]["body_site"]}</span></label>
            
            <br/>
            <h4>Timing - non-daily</h4>
            {/* <label>Repetition Interval : <span className='values'>{data["timing_non_daily"][ "repetetion_interval"]}</span></label> */}
            
            <br/>
            <label>Frequency :</label>
            
            <br/>
            {/* <label>Lower : <span className='values'>{data["timing_non_daily"]["frequency_lower"]}</span></label> */}
            
            <br/>
            {/* <label>Upper : <span className='values'>{data["timing_non_daily"]["frequency_higher"]}</span></label> */}
            
            <br/>
            {/* <label>Specific Day of the week : <span className='values'>{data["timing_non_daily"]["specific_day_of_week"]}</span></label> */}
            
            <br/>
            {/* <label>Specific Day of month : <span className='values'>{data["timing_non_daily"]["specific_day_of_month"]}</span></label> */}
            
            <br/>
            <label>Lower : <span className='values'>{data["medication"]["medication_form"]}</span></label>
           
            <br/>
            <label>Upper : <span className='values'>{data["medication"]["medication_form"]}</span></label>
            
            <br/>
            {/* <label>Timing description : <span className='values'>{data["timing_non_daily"]["timing_description"]}</span></label> */}
           
            <br/>
            <h4>Specific event</h4>
            {/* <label>Event name : <span className='values'>{data["timing_non_daily"]["event_name"]}</span></label> */}
           
            <br/>
            <label>Time offset : <span className='values'>{data["medication"]["event_time_offset"]}</span></label>
            
            <br/>
            <h4>On/Off cycle</h4>
            {/* <label>On : <span className='values'>{data["timing_non_daily"]["on"]}</span></label> */}
            
            <br/>
            {/* <label>Off : <span className='values'>{data["timing_non_daily"]["off"]}</span></label> */}
            
            <br/>
            {/* <label>Repetitions : <span className='values'>{data["timing_non_daily"]["repetetions"]}</span></label> */}
           
            <br/>
            <h2>Protocol</h2>
            <label>Order ID : <span className='values'>{data["medication"]["medication_form"]}</span></label>
            
            <br/>
            <h1>Exclusion Global</h1>
            <h2>Data</h2>
            <label>Global exclusion of medication use : <span className='values'>{data["medication"]["medication_form"]}</span></label>
            
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement : <span className='values'>{data["medication"]["medication_form"]}</span></label>
            <br/>
            <label>Last Updated : <span className='values'>{data["medication"]["medication_form"]}</span></label>
            
            <br/>
        
        </div>
        </>
    )
}
export default ShowMedicationStatement;