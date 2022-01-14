import React,{useState} from 'react';

const PastHistoryofIllness = () => {

    const [data, setData] = useState({

    // Problem/Diagnosis Data (hi)
        hiProblemName:'',
        hiBodySite:'',
        hiDateTimeofOnsetdate:'',
        hiDateTimeofOnsettime:'',
        hiSeverity:'',
        hiDateofAbatementdate:'',
        hiDateofAbatementtime:'',
        hiDiagnosisCertainty:'',

    // Problem/Diagnosis Qualifier (hi)
        hiActiveInactive:'',
        hiResolutionPhase:'',
        hiRemissionStatus:'',
        hiOccurrence:'',

    // Problem/Diagnosis Protocol (hi)
        hiLastUpdateddate:'',
        hiLastUpdatedtime:''
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    console.log(data)
    return(
        <>
            <h1 className='main_heading'>Past History of Illnesses</h1>
        <div className='form_container'>
            <h1>Problem/Diagnosis</h1>
            <h2>Data</h2>
            <label>Problem/Diagnosis name</label>
            <input name='hiProblemName' value={data.hiProblemName || ''} onChange={handleChange}></input>
            <br/>
            <label>Body site</label>
            <input name='hiBodySite' value={data.hiBodySite || ''} onChange={handleChange}></input>
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
        </>
    )
}
export default PastHistoryofIllness;