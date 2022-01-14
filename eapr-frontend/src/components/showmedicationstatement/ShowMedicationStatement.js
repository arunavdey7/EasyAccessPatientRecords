//changesinArunavBranch
import React,{useState} from 'react'
import { toast } from 'react-toastify'
import { addMedicationStatement } from '../../utilities/MedicationStatementUtility'
import './styles.css'
const ShowMedicationStatement = () => {
    
    var data = {
        "administration_details": {
            "body_site": "head",
            "id": 3,
            "order_id": 3,
            "route": "oral"
        },
        "dosage": {
            "as_required": "TRUE",
            "as_required_criterion": "for stress relieve",
            "dose_amount": 1,
            "dose_description": "2 to 3 times a day",
            "dose_formula": "12",
            "dose_unit": "mg",
            "event_name": "after every meal",
            "exact_timing_critical": "FALSE",
            "frequency_higher": 3,
            "frequency_higher_rate": "1",
            "frequency_lower": 2,
            "frequency_lower_rate": "1",
            "id": 3,
            "interval": "03:00",
            "off": "03:00",
            "on": "03:00",
            "order_id": 3,
            "repetetions": 6,
            "specific_time": "03:00",
            "specific_time_lower": "10:00",
            "specific_time_upper": "20:00",
            "time_offset": "03:00",
            "timing_description": "every day"
        },
        "medication": {
            "alternate_amount": 5,
            "alternate_amount_unit": "ml",
            "amount": 1,
            "amount_unit": "mg",
            "batch_id": "1",
            "description": "therapy related medication",
            "expiry": "2023-09-12",
            "manufacturer": "abbott",
            "medication_category": "ad-hoc mixture",
            "medication_form": "tablet",
            "medication_item": "atenolol 100mg",
            "medication_name": "cefuroxim",
            "medication_strength_denominator": 0,
            "medication_strength_denominator_unit": "g",
            "medication_strength_numerator": 9,
            "medication_strength_numerator_unit": "mg",
            "order_id": 3,
            "role": "therapeutic",
            "strength": "1",
            "unit_of_presentation": "capsule"
        },
        "medication_statement": {
            "order_id": 3,
            "patient_id": 1
        },
        "timing_non-daily": {
            "event_name": "after meal",
            "event_time_offset": "01:00",
            "frequency_higher": 3,
            "frequency_higher_rate": "3",
            "frequency_lower": 2,
            "frequency_lower_rate": "1",
            "id": 3,
            "off": "08:00",
            "on": "03:00",
            "order_id": 3,
            "repetetion_interval": 1,
            "repetetions": 9,
            "specific_date": "2020-01-01",
            "specific_date_lower": "2020-01-01",
            "specific_date_upper": "2020-01-01",
            "specific_day_of_month": 1,
            "specific_day_of_week": "1",
            "timing_description": "every day"
        }
    
    }

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
            <label>Event name : <span className='values'>{data["timing_non_daily"]["event_name"]}</span></label>
            
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
            <label>Repetition Interval : <span className='values'>{data["timing_non_daily"][ "repetetion_interval"]}</span></label>
            
            <br/>
            <label>Frequency : <span className='values'>{data["medication"]["medication_form"]}</span></label>
            
            
            <br/>
            <label>Lower : <span className='values'>{data["timing_non_daily"]["frequency_lower"]}</span></label>
            
            <br/>
            <label>Upper : <span className='values'>{data["timing_non_daily"]["frequency_higher"]}</span></label>
            
            <br/>
            <label>Specific Day of the week : <span className='values'>{data["timing_non_daily"]["specific_day_of_week"]}</span></label>
            
            <br/>
            <label>Specific Day of month : <span className='values'>{data["timing_non_daily"]["specific_day_of_month"]}</span></label>
            
            <br/>
            <label>Lower : <span className='values'>{data["medication"]["medication_form"]}</span></label>
           
            <br/>
            <label>Upper : <span className='values'>{data["medication"]["medication_form"]}</span></label>
            
            <br/>
            <label>Timing description : <span className='values'>{data["timing_non_daily"]["timing_description"]}</span></label>
           
            <br/>
            <h4>Specific event</h4>
            <label>Event name : <span className='values'>{data["timing_non_daily"]["event_name"]}</span></label>
           
            <br/>
            <label>Time offset : <span className='values'>{data["medication"]["event_time_offset"]}</span></label>
            
            <br/>
            <h4>On/Off cycle</h4>
            <label>On : <span className='values'>{data["timing_non_daily"]["on"]}</span></label>
            
            <br/>
            <label>Off : <span className='values'>{data["timing_non_daily"]["off"]}</span></label>
            
            <br/>
            <label>Repetitions : <span className='values'>{data["timing_non_daily"]["repetetions"]}</span></label>
           
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
