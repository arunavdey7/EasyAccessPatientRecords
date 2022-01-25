import React,{useState} from 'react';
import { toast } from 'react-toastify';
import { addPastHistory } from '../../utilities/PasthoiUtility';

const CreatePastHistoryofIllness = () => {

    const [data, setData] = useState({
            patient_uid: parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
            problem_name: "",
            body_site: "",
            datetime_of_onset: "2021-01-11",
            severity: "",
            date_of_abatebent: "2021-01-21",
            active_or_inactive: "",
            resolution_phase: "",
            remission_status: "In remission",
            occurrence: "In remission",
            diagnostic_certainity: "",
            protocol_last_updated: "2021-01-21"
    });
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const sendData = async () => {
        var result = await addPastHistory(data)
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
            <input onChange={handleChange} name='problem_name' value={data.problem_name || ''} ></input>
            <br/>
            <label>Body site</label>
            <input onChange={handleChange} name='body_site' value={data.body_site || ''} ></input>
            <br/>
            <label>Date/Time of onset</label>
            <input onChange={handleChange} name='datetime_of_onset' value={data.datetime_of_onset || ''} type="date"></input><input type="time"></input>
            <br/>
            <label>Severity</label> 
            <select onChange={handleChange} name='severity' value={data.severity || ''}>
                <option value='Mild'>Mild</option>
                <option value='Moderate'>Moderate</option>
                <option value='Severe'>Severe</option>
            </select>
            <br/>
            <label>Date of abatement</label>
            <input onChange={handleChange} name = 'date_of_abatebent' value={data.date_of_abatebent || ''} type="date"></input><input type="time"></input>
            <br/>
            <h2>Problem/Diagnosis qualifier</h2>
            <label>Active/Inactive?</label> 
            <select onChange={handleChange} name='active_or_inactive' value={data.active_or_inactive || ''}>
                <option value='Active'>Active</option>
                <option value='Inactive'>Inactive</option>
            </select>
            <br/>
            <label>Resolution phase</label> 
            <select onChange={handleChange} name='resolution_phase' value={data.resolution_phase || ''}>
                <option value='Resolved'>Resolved</option>
                <option value='Relapsed'>Relapsed</option>
            </select>
            <br/>
            <label>Remission status</label> 
            <select onChange={handleChange} name= 'remission_status' value={data.remission_status || ''}>
                <option value='In remission'>In remission</option>
            </select>
            <br/>
            <label>Occurence</label> 
            <select onChange={handleChange} name='occurrence' value={data.occurence || ''}>
                <option value='Recurrence'>In remission</option>
            </select>
            <br/>
            <label>Diagnostic certainty</label> 
            <select onChange={handleChange} name = 'diagnostic_certainity' value={data.diagnostic_certainity || ''}>
                <option value='Suspected'>Suspected</option>
                <option value='Probable'>Probable</option>
                <option value='Confirmed'>Confirmed</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last updated</label>
            <input name='protocol_last_updated' type="datetime-local"></input>
            <br/>
        </div>
        <button onClick={sendData}>Finalize</button>
        </>
    )
}
export default CreatePastHistoryofIllness;