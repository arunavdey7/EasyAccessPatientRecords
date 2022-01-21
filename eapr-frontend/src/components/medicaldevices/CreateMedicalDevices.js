import React,{useState} from 'react';
import { toast } from 'react-toastify';
import { addMedicalDevice } from '../../utilities/MedicalDevicesUtility';

const CreateMedicalDevices = () => {

    const [data, setData] = useState({
        patient_id:parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
        device_name:'',
        body_site:'',
        type:'',
        description:'',
        UDI:'',
        manufacturer:'',
        date_of_manufacture:'',
        serial_number :'',
        catalogue_number:'',
        model_number:'',
        batch_number :'',
        software_version:'',
        date_of_expiry:'',
        other_identifier:'',
        comment:''
    })
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const handleSave = async () => {
        var result = await addMedicalDevice(data)
        if(result === true)
            toast("Medical device recorded successfully.")
        else
            toast("Unable to record medical devices successfully")
    }
    return(
        <>
            <h1 className='main_heading'>Medical Devices</h1>
        <div className='form_container'>
            <h1>Device use statement</h1>
            <h2>Data</h2>
            <h2>Device Details</h2>
            <label>Device name</label>
            <input name='device_name' value={data.device_name || ''} onChange={handleChange}></input>
            <br/>
            <label>Body site</label>
            <input name='body_site' value={data.body_site || ''} onChange={handleChange}></input>
            <br/>
            <h2>Medical Device</h2>
            <label>Device name</label>
            <input name='duDeviceName' value={data.duDeviceName || ''} onChange={handleChange}></input>
            <br/>
            <label>Type</label>
            <input name='type' value={data.type || ''} onChange={handleChange}></input>
            <br/>
            <label>Description</label>
            <input name='description' value={data.description || ''} onChange={handleChange}></input>
            <br/>
            <label>Unique Device Identifier (UDI)</label>
            <input name='UDI' value={data.UDI || ''} onChange={handleChange}></input>
            <br/>
            <label>Manufacturer</label>
            <input name='manufacturer' value={data.manufacturer || ''} onChange={handleChange}></input>
            <br/>
            <label>Date of manufacture</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <label>Serial number</label>
            <input name='serial_number' value={data.serial_number || ''} onChange={handleChange}></input>
            <br/>
            <label>Catalogue number</label>
            <input name='catalogue_number' value={data.catalogue_number || ''} onChange={handleChange}></input>
            <br/>
            <label>Model number</label>
            <input name='model_number' value={data.model_number || ''} onChange={handleChange}></input>
            <br/>
            <label>Batch/Lot number</label>
            <input name='batch_number' value={data.batch_number || ''} onChange={handleChange}></input>
            <br/>
            <label>Software version</label>
            <input name='software_version' value={data.software_version || ''} onChange={handleChange}></input>
            <br/>
            <label>Date of expiry</label>
            <input name='date_of_expiry' value={data.date_of_expiry} type="date"></input>
            <input type="time"></input>
            <br/>
            <label>Other identifier</label>
            <input name='other_identifier' value={data.other_identifier || ''} onChange={handleChange}></input>
            <br/>
            <label>Comment</label>
            <input name='comment' value={data.comment || ''} onChange={handleChange}></input>
            <br/>
        </div>
        <button onClick={handleSave}>Save</button>
        </>
    )
}
export default CreateMedicalDevices;