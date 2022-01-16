import React,{useState} from 'react';

const PlanofCare = () => {

    const [care_plan_id, setCare_plan_id] = useState("");
    const [care_plan_name, setCare_plan_name] = useState("");
    const [care_plan_description, setCare_plan_description] = useState("");
    const [care_plan_reason, setCare_plan_reason] = useState("");
    const [care_plan_expiry_date, setCare_plan_expiry_date] = useState("");
    const [service_name, setService_name] = useState("");
    const [service_type, setService_type] = useState("");
    const [description, setDescription] = useState("");
    const [reason_for_request, setReason_for_request] = useState("");
    const [reason_description, setReason_description] = useState("");
    const [clinical_indication, setClinical_indication] = useState("");
    const [intent, setIntent] = useState("");
    const [urgency, setUrgency] = useState("");
    const [service_due, setService_due] = useState("");
    const [service_period_start, setService_period_start] = useState("");
    const [service_period_expiry, setService_period_expiry] = useState("");
    const [indefinite, setIndefinite] = useState("");
    const [supplementary_information, setSupplementary_information] = useState("");
    const [information_description, setInformation_description] = useState("");
    const [comment, setComment] = useState("");
    const [requester_order_identifier, setRequester_order_identifier] = useState("");
    const [receiver_order_identifier, setReceiver_order_identifier] = useState("");
    const [request_status, setRequest_status] = useState("");

    const savePlanofCare = () =>{
        var data = {
            patient_id:localStorage.getItem('patientuid'),
		    care_plan_id,
		    care_plan_name,
		    care_plan_description,
		    care_plan_reason,
		    care_plan_expiry_date,
            service_name,
		    service_type,
		    description,
		    reason_for_request,
		    reason_description,
		    clinical_indication,
		    intent,
		    urgency,
		    service_due,
		    service_period_start,
		    service_period_expiry,
		    indefinite,
		    supplementary_information,
		    information_description,
            comment,
            requester_order_identifier,
            receiver_order_identifier,
            request_status
            
        }
        var result = addPlanofCare(data)
        console.log(JSON.stringify(data))
        console.log(result)
        if(result)
            toast("Plan of Care added successfully")
        else
            toast("Plan of Care cannot be added successfully ")
    }

    return(
        <>
            <h1 className='main_heading'>Plan of Care</h1>
        <div className='form_container'>
            <h1>Care Plan</h1>
            <h2>Description</h2>
            <label>Care Plan Name</label>
            <input onChange={e => setCare_plan_name(e.target.value)}></input>
            <br/>
            <label>Description</label>
            <input onChange={e => setCare_plan_description(e.target.value)}></input>
            <br/>
            <label>Reason</label>
            <input onChange={e => setCare_plan_reason(e.target.value)}></input>
            <br/>
            <h2>Protocol</h2>
            <label>Care Plan ID</label>
            <input onChange={e => setCare_plan_id(e.target.value)}></input>
            <br/>
            <label>Expiry Date</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <h1>Service Request</h1>
            <h2>Current Activity</h2>
            <h2>Description</h2>
            <label>Service name</label>
            <input onChange={e => setService_name(e.target.value)}></input>
            <br/>
            <label>Service type</label>
            <input onChange={e => setService_type(e.target.value)}></input>
            <br/>
            <label>Description</label>
            <input onChange={e => setDescription(e.target.value)}></input>
            <br/>
            <label>Reason for request</label>
            <input onChange={e => setReason_for_request(e.target.value)}></input>
            <br/>
            <label>Reason description</label>
            <input onChange={e => setReason_description(e.target.value)}></input>
            <br/>
            <label>Clinical indication</label>
            <input onChange={e => setClinical_indication(e.target.value)}></input>
            <br/>
            <label>Intent</label>
            <input onChange={e => setIntent(e.target.value)}></input>
            <br/>
            <label>Urgency</label>
            <select>
                <option value='Emergency'>Emergency</option>
                <option value='Urgent'>Urgent</option>
                <option value='Routine'>Routine</option>
            </select><span>or</span><input ></input>
            <br/>   
            <label>Service due</label>
            <input type="date"></input><input type="time"></input><span>or</span><input></input>
            <br/>
            <label>Service period start</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <label>Service period expiry</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <label>Indefinite?</label>
            <input type="checkbox" onChange={e => setIndefinite(e.target.value)}></input>
            <br/>
            <label>Supplementary information?</label>
            <input type="checkbox" onChange={e => setSupplementary_information(e.target.value)}></input>
            <br/>
            <label>Information description</label>
            <input onChange={e => setInformation_description(e.target.value)}></input>
            <br/>
            <label>Comment</label>
            <input onChange={e => setComment(e.target.value)}></input>
            <br/>       
            <h2>Protocol</h2>
            <label>Requester order identifier</label>
            <input onChange={e => setRequester_order_identifier(e.target.value)}></input><span>or ID</span><input></input>
            <br/>
            <label>Receiver order identifier</label>
            <input onChange={e => setReceiver_order_identifier(e.target.value)}></input><span>or ID</span><input></input>
            <br/>
            <label>Request status</label>
            <input onChange={e => setRequest_status(e.target.value)}></input>
            <br/>
        </div>
        </>
    )
}
export default PlanofCare;