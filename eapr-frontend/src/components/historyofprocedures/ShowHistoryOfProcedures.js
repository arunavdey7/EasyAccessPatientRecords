import React,{useState} from 'react';

const ShowHistoryofProcedures = () => {

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
    return(
        <>
            <h1 className='main_heading'>History of Procedures</h1>
            <div className='form_container'>
                <h1>Procedure</h1>
                <h2>Description</h2>
                <label>Procedure name</label>
                
                <br/>
                <h2>Body site</h2>
                <label>Route</label>
                
                <br/>
                <h1>Absence of Information</h1>
                <h2>Data</h2>
                <label>Absence statement</label>
                
                <br/>
                <h2>Protocol</h2>
                <label>Last Updated</label>
                
                <br/>
                <h1>Exclusion - global</h1>
                <h2>Data</h2>
                <label>Global exclusion of procedures</label>
            </div>
        </>
    )
}
export default ShowHistoryofProcedures;