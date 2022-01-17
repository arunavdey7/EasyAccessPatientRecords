import React,{useState} from 'react';
import { toast } from 'react-toastify';
import { addPastHistory } from '../../utilities/PasthoiUtility';

const CreatePastHistoryofIllness = () => {

    var data = {
            "patient_uid":"1",
            "problem_name": "nephropathy",
            "body_site": "Renal",
            "datetime_of_onset": "2021-01-11",
            "severity": "mild",
            "date_of_abatebent": "2021-01-21",
            "active_or_inactive": "active",
            "resolution_phase": "resolved",
            "remission_status": "In remission",
            "occurrence": "recurrence",
            "diagnostic_certainity": "suspected",
            "protocol_last_updated": "2021-01-21"
        }
    const sendData = () => {
        var result = addPastHistory(data)
        if(result === true)
            toast("Data sucessfully added!")
        else
            toast("Unable to add data right now.")
    }
    return(
        <>
            <h1 className='main_heading'>Past History of Illnesses</h1>
        <div className='form_container'>
            <h1>Problem/Diagnosis</h1>
            <h2>Data</h2>
            <label>Problem/Diagnosis name</label>
            <input name='hiProblemName' value={data.hiProblemName || ''} ></input>
            <br/>
            <label>Body site</label>
            <input name='hiBodySite' value={data.hiBodySite || ''} ></input>
            <br/>
            <label>Date/Time of onset</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <label>Severity</label> 
            <select>
                <option value='Mild'>Mild</option>
                <option value='Moderate'>Moderate</option>
                <option value='Severe'>Severe</option>
            </select>
            <br/>
            <label>Date of abatement</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <h2>Problem/Diagnosis qualifier</h2>
            <label>Active/Inactive?</label> 
            <select>
                <option value='Active'>Active</option>
                <option value='Inactive'>Inactive</option>
            </select>
            <br/>
            <label>Resolution phase</label> 
            <select>
                <option value='Resolved'>Resolved</option>
                <option value='Relapsed'>Relapsed</option>
            </select>
            <br/>
            <label>Remission status</label> 
            <select>
                <option value='In remission'>In remission</option>
            </select>
            <br/>
            <label>Occurence</label> 
            <select>
                <option value='Recurrence'>In remission</option>
            </select>
            <br/>
            <label>Diagnostic certainty</label> 
            <select>
                <option value='Suspected'>Suspected</option>
                <option value='Probable'>Probable</option>
                <option value='Confirmed'>Confirmed</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last updated</label>
            <input type="datetime-local"></input>
            <br/>
        </div>
        <button onClick={sendData}>Finalize</button>
        </>
    )
}
export default CreatePastHistoryofIllness;