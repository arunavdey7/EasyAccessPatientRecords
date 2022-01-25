import React,{useState,useEffect} from 'react';
import {addProblem} from '../../utilities/ProblemListUtility'
const CreateProblemList = () => {

    const [data, setData] = useState({
            patient_id:parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
            global_exclusion_of_adverse_reactions:"",
            absence_of_information_statement:"",
            absence_of_information_protocol_last_updated:"",
            problem_name:"",
            body_site:"",
            datetime_of_onset:"",
            severity:"",
            date_of_abatebent:"",
            active_or_inactive:"",
            resolution_phase:"",
            remission_status:"",
            occurrence:"",
            diagnostic_certainity:"",
            protocol_last_updated:""
    })
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const sendData = async () => {
        const result = await addProblem(data)
     }
    return(
        <>
            <h1 className='main_heading'>Problem List</h1>
            <div className='form_container'>
            <h1>Problem/Diagnosis</h1>
            <h2>Data</h2>
            <label>Problem/Diagnosis name</label>
            <input name='problem_name' value={data.problem_name || ''} onChange={handleChange}></input>
            <br/>
            <label>Body site</label>
            <input name='body_site' value={data.body_site || ''} onChange={handleChange}></input>
            <br/>
            <label>Date/time of onset</label>
            <input name='datetime_of_onset' value={data.datetime_of_onset || ''} onChange={handleChange}></input>
            <br/>
            <label>Severity</label>
            <select name='severity' value={data.severity || ''} onChange={handleChange}>
                <option value='Mild'>Mild</option>
                <option value='Moderate'>Moderate</option>
                <option value='Severe'>Severe</option>
            </select>
            <br/>
            <label>Date of abatement</label>
            <input name='date_of_abatebent' value={data.pdDateofAbatement || ''} onChange={handleChange}></input>
            <br/>
            <h2>Problem/Diagnosis qualifier</h2>
            <label>Active/Inactive?</label>
            <select name='active_or_inactive' value={data.active_or_inactive || ''} onChange={handleChange}>
                <option value='Active'>Active</option>
                <option value='Inactive'>Inactive</option>
            </select>
            <br/>
            <label>Resolution phase</label>
            <select name='resolution_phase' value={data.resolution_phase || ''} onChange={handleChange}>
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
            <select name='occurrence' value={data.occurrence || ''} onChange={handleChange}>
                <option value='Recurrence'>Recurrence</option>
            </select>
            <br/>
            <label>Diagnostic certainity</label>
            <select name='diagnostic_certainity' value={data.diagnostic_certainity || ''} onChange={handleChange}>
                <option value='Suspected'>Suspected</option>
                <option value='Probable'>Probable</option>
                <option value='Confirmed'>Confirmed</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated</label>
            <input type='datetime-local'></input>
            <br/>
            <h1>Exclusion - global</h1>
            <h2>Data</h2>
            <label>Global exclusion of problems/diagnoses</label>
            <select>
                <option value='No known Problems'>No known Problems</option>
            </select>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement</label>
            <select>
                <option value='No information about current problems'>No information about current problems</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated</label>
            <input type='datetime-local'></input>
            <br/>
            <button>Temporary save</button>
            <button onClick={sendData}>Final save</button>
        </div>
        </>
    )
}
export default CreateProblemList;