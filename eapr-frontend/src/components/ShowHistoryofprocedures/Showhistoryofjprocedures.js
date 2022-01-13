import React,{useState} from 'react';

const ShowHistoryofProcedures = () => {

    var data = {

        
            "history_of_procedures":{
                    "patient_uid":1,
                    "procedure_name":"intended to treat",
                    "body_site":"right side of the body",
                    "absence_of_info_absence_statement":"NO information about past history of procedures",
                    "absence_of_info_protocol_last_updated":"02/03/2021",
                    "global_exclusion_of_procedures":"No known procedures"
                }
        

    }







    return(
        <>
            <h1 className='main_heading'>History of Procedures</h1>
        <div className='form_container'>
            <h1>Procedure</h1>
            <h2>Description</h2>
            <label>Procedure name : <span className='values'>{data["history_of_procedures"]["procedure_name"]}</span></label>
            <br/>
            <h2>Body site</h2>
            <label>Route : <span className='values'>{data["history_of_procedures"]["body_site"]}</span></label>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement : <span className='values'>{data["history_of_procedures"]["absence_of_info_absence_statement"]}</span></label>
            <select>
                <option value='No information about past history of procedures'>No information about past history of procedures</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated : <span className='values'>{data["history_of_procedures"]["absence_of_info_protocol_last_updated"]}</span></label>
            <br/>
            <h1>Exclusion - global</h1>
            <h2>Data</h2>
            <label>Global exclusion of procedures : <span className='values'>{data["history_of_procedures"]["global_exclusion_of_procedures"]}</span></label>
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
