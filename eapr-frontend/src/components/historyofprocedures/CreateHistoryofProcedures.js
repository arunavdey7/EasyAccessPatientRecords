import React,{useState} from 'react';
import { toast } from 'react-toastify';
import { addHistoryOfProcedures } from '../../utilities/HistoryOfProceduresUtility';

const CreateHistoryofProcedures = () => {

    const [data, setData] = useState({

        patient_id : parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
        absence_of_info_absence_statement:'',
        absence_of_info_protocol_last_updated:'',
        global_exclusion_of_procedures:'',
        procedure_name:'',
        body_site:''
    })
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const handleSave = async () => {
        var result = await addHistoryOfProcedures(data)
        if(result === true)
            toast("History of procedure successfully recorded.")
        else
            toast("Unable to record history of procedure right now.")
    }
    return(
        <>
            <h1 className='main_heading'>History of Procedures</h1>
            <div className='form_container'>
            <h1>Procedure</h1>
            <h2>Description</h2>
            <label>Procedure name</label>
            <input name='procedure_name' value={data.procedure_name || ''} onChange={handleChange}></input>
            <br/>
            <h2>Body site</h2>
            <label>Route</label>
            <input name='body_site' value={data.body_site || ''} onChange={handleChange}></input>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement</label>
            <select name = 'absence_of_info_absence_statement' value={data.absence_of_info_absence_statement || ''}>
                <option value='No information about past history of procedures'>No information about past history of procedures</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated</label>
            <input name = 'absence_of_info_protocol_last_updated' value={data.absence_of_info_protocol_last_updated || ''} type='datetime-local'></input>
            <br/>
            <h1>Exclusion - global</h1>
            <h2>Data</h2>
            <label>Global exclusion of procedures</label>
            <select name='global_exclusion_of_procedures' value={data.global_exclusion_of_procedures || ''}>
                <option value='No known procedures'>No known procedures</option>
            </select>
            <br/>
            <button>Temporary save</button>
            <button onClick={handleSave}>Final save</button>
        </div>
        </>
    )
}
export default CreateHistoryofProcedures;