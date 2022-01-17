import React,{useState,useEffect} from 'react';
import {addProblem} from '../../utilities/ProblemListUtility'
const CreateProblemList = () => {

    const [data, setData] = useState({

    // Problem/Diagnosis Data (pd)
        pdName:'',
        pdBodySite:'',
        pdDateTimeofOnset:'',
        pdSeverity:'',
        pdDateofAbatement:'',
        pdDiagnosticCertainity:'',

    // Problem/Diagnosis Qualifier (pd)
        pdActiveInactive:'',
        pdResolutionPhase:'',
        pdRemissionStatus:'',
        pdOccurence:'',

    // Problem/Diagnosis Protocol (pd)
        pdLastUpdated:'',

    // Problem/Diagnosis Exclusion-Global Data (pd)
        pdGlobalExclusionofProblems:'',

    // Problem/Diagnosis Absence of Information Data (pd)
        pdAbsenceStatement:'',

    // Problem/Diagnosis Protocol (pd)
        pdLastUpdated:''

    })
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    var data2 = {
            "patient_id":"1",
            "global_exclusion_of_adverse_reactions":"sss",
            "absence_of_information_statement":"sss",
            "absence_of_information_protocol_last_updated":"sss",
            "problem_name":"headache",
            "body_site":"lower head",
            "datetime_of_onset":"2021-07-21",
            "severity":"mild",
            "date_of_abatebent":"2021-07-24",
            "active_or_inactive":"active",
            "resolution_phase":"resolved",
            "remission_status":"in remession",
            "occurrence":"recurrence",
            "diagnostic_certainity":"probable",
            "protocol_last_updated":"2021-08-03"
    }
    
    const sendData = async () => {
        const result = await addProblem(data2)
     }
    return(
        <>
            <h1 className='main_heading'>Problem List</h1>
        <div className='form_container'>
            <h1>Problem/Diagnosis</h1>
            <h2>Data</h2>
            <label>Problem/Diagnosis name</label>
            <input name='pdName' value={data.pdName || ''} onChange={handleChange}></input>
            <br/>
            <label>Body site</label>
            <input name='pdBodySite' value={data.pdBodySite || ''} onChange={handleChange}></input>
            <br/>
            <label>Date/time of onset</label>
            <input name='pdDateTimeofOnset' value={data.pdDateTimeofOnset || ''} onChange={handleChange}></input>
            <br/>
            <label>Severity</label>
            <select>
                <option value='Mild'>Mild</option>
                <option value='Moderate'>Moderate</option>
                <option value='Severe'>Severe</option>
            </select>
            <br/>
            <label>Date of abatement</label>
            <input name='pdDateofAbatement' value={data.pdDateofAbatement || ''} onChange={handleChange}></input>
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
                <option value='Recurrence'>Recurrence</option>
            </select>
            <br/>
            <label>Diagnostic certainity</label>
            <select>
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