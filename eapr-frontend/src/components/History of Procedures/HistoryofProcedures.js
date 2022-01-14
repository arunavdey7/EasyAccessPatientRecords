import React,{useState} from 'react';

const HistoryofProcedures = () => {

    const [data, setData] = useState({

    // Procedure Description (hp)
        hpProcedureName:'',
        hpBodySite:'',

    // History of Procedures Absence of Information Data (hp)
        hpAbsenceStatement:'',

    // History of Procedures Absence of Information Protocol (hp)
        hpLastUpdated:'',

    // History of Procedures Exclusion-Global Data (hp)
        hpGlobalExclusionofProcedures:''

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
            <h1 className='main_heading'>History of Procedures</h1>
        <div className='form_container'>
            <h1>Procedure</h1>
            <h2>Description</h2>
            <label>Procedure name</label>
            <input name='hpProcedureName' value={data.hpProcedureName || ''} onChange={handleChange}></input>
            <br/>
            <h2>Body site</h2>
            <label>Route</label>
            <input name='hpBodySite' value={data.hpBodySite || ''} onChange={handleChange}></input>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement</label>
            <select>
                <option value='No information about past history of procedures'>No information about past history of procedures</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated</label>
            <input type='datetime-local'></input>
            <br/>
            <h1>Exclusion - global</h1>
            <h2>Data</h2>
            <label>Global exclusion of procedures</label>
            <select>
                <option value='No known procedures'>No known procedures</option>
            </select>
            <br/>
            <button>Temporary save</button>
            <button>Final save</button>
        </div>
        </>
    )
}
export default HistoryofProcedures;