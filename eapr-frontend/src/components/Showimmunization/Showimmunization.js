import React,{useState} from 'react';

const ShowImmunizations = () => {
 
    var data = {
        
            "immunizations":{
                    "patient_uid":1,
                    "immunisation_item":"Atenolol 100mg",
                    "administration_details_route":"oral",
                    "administration_details_target_site":"left upper arm",
                    "sequence_number":"123",		
                    "absence_of_info_absence_statement":"no information about immunizations",
                    "absence_of_info_protocol_last_updated":"02/03/2021"
                }
        

    }
   
    return(
        <>
            <h1 className='main_heading'>Immunizations</h1>
        <div className='form_container'>
            <h1>Immunization satement</h1>
            <h2>Description</h2>
            <label>Immunization item : <span className='values'>{data["immunizations"]["immunisation_item"]}</span></label>
            <br/>
            <h2>Administration details</h2>
            <label>Route : <span className='values'>{data["immunizations"]["administration_details_route"]}</span></label>
            <br/>
            <label>Target site : <span className='values'>{data["immunizations"]["administration_details_target_site"]}</span></label>
            <br/>
            <label>Sequence number : <span className='values'>{data["immunizations"]["sequence_number"]}</span></label>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement : <span className='values'>{data["immunizations"]["absence_of_info_absence_statement"]}</span></label>
            <select>
                <option value='No information about immunizations'>No information about immunizations</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated : <span className='values'>{data["immunizations"]["absence_of_info_protocol_last_updated"]}</span></label>
            <br/>
            <button>Temporary save</button>
            <button>Final save</button>
        </div>
        </>
    )
}
export default Immunizations;
