import React,{useState} from 'react';

const ShowPlanofCare = () => {
    var data = {
        "care_plan_description": "manage_diabetes_complications",
        "care_plan_expiry_date": "2022-10-21",
        "care_plan_name": "share care1",
        "care_plan_reason": "diabetes_complications",
        "clinical_indication": "Angina",
        "comment": "Repeat CBC,ESR,CRP a week before the next follow-up review",
        "description": "diabetes_complications",
        "indefinite": "TRUE",
        "information_description": "Supplemental magnesium may improve insulin sensitivity in diabetics",
        "intent": "Suggestion to Consult a Nephrologists",
        "patient_id": parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
        "reason_description": "The patient's diabetes has recently become more difficult to stabilise",
        "reason_for_request": "manage_diabetes_complications",
        "receiver_order_identifier": "456",
        "request_status": "initial request",
        "requester_order_identifier": "123",
        "service_due": "2021-01-11",
        "service_name": "referral",
        "service_period_expiry": "2022-01-11",
        "service_period_start": "2021-01-11",
        "service_type": "ultrasound",
        "supplementary_information": "TRUE",
        "urgency": "Routine"
    }

    return(
        <>
            <h1 className='main_heading'>Plan of Care</h1>
        <div className='form_container'>
            <h1>Care Plan</h1>
            <h2>Description</h2>
            <label>Care Plan Name : <span className='values'>{data["care_plan_name"]}</span></label>
            <br/>
            <label>Description : <span className='values'>{data["description"]}</span></label>
            <br/>
            <label>Reason : <span className='values'>{data["care_plan_reason"]}</span></label>
            <br/>
            <h2>Protocol</h2>
            <label>Expiry Date : <span className='values'>{data["care_plan_expiry_date"]}</span></label>
            <br/>
            <h1>Service Request</h1>
            <h2>Current Activity</h2>
            <h2>Description</h2>
            <label>Service name : <span className='values'>{data["service_name"]}</span></label>
            <br/>
            <label>Service type : <span className='values'>{data["service_type"]}</span></label>
            <br/>
            <label>Description : <span className='values'>{data["description"]}</span></label>
            <br/>
            <label>Reason for request : <span className='values'>{data["reason_for_request"]}</span></label>
            <br/>
            <label>Reason description : <span className='values'>{data["reason_description"]}</span></label>
            <br/>
            <label>Clinical indication : <span className='values'>{data["clinical_indication"]}</span></label>
            <br/>
            <label>Intent : <span className='values'>{data["intent"]}</span></label>
            <br/>
            <label>Urgency : <span className='values'>{data["urgency"]}</span></label>
            <br/>   
            <label>Service due : <span className='values'>{data["service_due"]}</span></label>
            <br/>
            <label>Service period start : <span className='values'>{data["service_period_start"]}</span></label>
            <br/>
            <label>Service period expiry : <span className='values'>{data["service_period_expiry"]}</span></label>
            <br/>
            <label>Indefinite? : <span className='values'>{data["indefinite"]}</span></label>
            <br/>
            <label>Supplementary information? : <span className='values'>{data["supplementary_information"]}</span></label>
            <br/>
            <label>Information description : <span className='values'>{data["information_description"]}</span></label>
            <br/>
            <label>Comment : <span className='values'>{data["comment"]}</span></label>
            <br/>       
            <h2>Protocol</h2>
            <label>Requester order identifier : <span className='values'>{data["requester_order_identifier"]}</span></label>
            <br/>
            <label>Receiver order identifier : <span className='values'>{data["receiver_order_identifier"]}</span></label>
            <br/>
            <label>Request status : <span className='values'>{data["request_status"]}</span></label>
            <br/>
        </div>
        </>
    )
}
export default ShowPlanofCare;