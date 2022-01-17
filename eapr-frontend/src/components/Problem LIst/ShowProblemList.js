import React,{useState} from 'react';

const ShowProblemList = () => {
    var data = {
        "active_or_inactive": "active",
        "body_site": "lower head",
        "date_of_abatebent": "2021-07-24",
        "datetime_of_onset": "2021-07-21",
        "diagnostic_certainity": "probable",
        "occurrence": "recurrence",
        "patient_id": parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
        "problem_name": "headache",
        "protocol_last_updated": "2021-08-03",
        "remission_status": "resolved",
        "resolution_phase": "resolved",
        "severity": "mild"
    }
    return(
        <>
            <h1 className='main_heading'>Problem List</h1>
        <div className='form_container'>
            <h1>Problem/Diagnosis</h1>
            <h2>Data</h2>
            <label>Problem/Diagnosis name : <span className='values'>{data["problem_name"]}</span></label>
            <br/>
            <label>Body site : <span className='values'>{data["body_site"]}</span></label>
            <br/>
            <label>Date/time of onset : <span className='values'>{data["datetime_of_onset"]}</span></label>
            <br/>
            <label>Severity : <span className='values'>{data["severity"]}</span></label>
            <br/>
            <label>Date of abatement : <span className='values'>{data["date_of_abatebent"]}</span></label>
            <br/>
            <h2>Problem/Diagnosis qualifier</h2>
            <label>Active/Inactive? : <span className='values'>{data["active_or_inactive"]}</span></label>
            <br/>
            <label>Resolution phase : <span className='values'>{data["resolution_phase"]}</span></label>
            <br/>
            <label>Remission status : <span className='values'>{data["remission_status"]}</span></label>
            <br/>
            <label>Occurrence : <span className='values'>{data["occurrence"]}</span></label>
            <br/>
            <label>Diagnostic certainity : <span className='values'>{data["diagnostic_certainity"]}</span></label>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated : <span className='values'>{data["protocol_last_updated"]}</span></label>
            <br/>
        </div>
        </>
    )
}
export default ShowProblemList;