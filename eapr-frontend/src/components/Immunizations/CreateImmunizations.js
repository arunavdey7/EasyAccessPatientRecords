import React,{useState} from 'react';
import { toast } from 'react-toastify';
import { addImmunization } from '../../utilities/ImmunizationsUtility';

const CreateImmunizations = () => {

    const [data, setData] = useState({

        patient_id : parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
        description_immunization_item:'',
        absence_of_info_absence_statement:'',
        absence_of_info_protocol_last_updated:'2021-12-31',
        administration_details_route:'',
        administration_details_target_site:'',
        sequence_number:"015"

    })
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const handleSave = async () => {
        var result = await addImmunization(data)
        if(result === true)
            toast("Immunization record successfully added!")
        else if(result === false)
            toast("Unable to add  immunization record right now.")
    }
    return(
        <>
            <h1 className='main_heading'>Immunizations</h1>
        <div className='form_container'>
            <h1>Immunization satement</h1>
            <h2>Description</h2>
            <label>Immunization item</label>
            <input name='description_immunization_item' value={data.description_immunization_item || ''} onChange={handleChange}></input>
            <br/>
            <h2>Administration details</h2>
            <label>Route</label>
            <input name='isdRoute' value={data.isdRoute || ''} onChange={handleChange}></input>
            <br/>
            <label>Target site</label>
            <input name='administration_details_target_site' value={data.administration_details_target_site || ''} onChange={handleChange}></input>
            <br/>
            <label>Sequence number</label>
            <input name='sequence_number' value={data.sequence_number || ''} onChange={handleChange}></input>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement</label>
            <select>
                <option value='No information about immunizations'>No information about immunizations</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated</label>
            <input type='absence_of_info_protocol_last_updated' value={data.absence_of_info_protocol_last_updated || ''} onChange={handleChange}></input>
            <br/>
            <button>Temporary save</button>
            <button onClick={handleSave}>Final save</button>
        </div>
        </>
    )
}
export default CreateImmunizations;