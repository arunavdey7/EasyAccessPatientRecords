import React,{useState,useEffect} from 'react';
import { toast } from 'react-toastify';
import { addMedicalDevice, getAllMedicalDevicesForDoctor, getAllMedicalDevicesForPatient } from '../../utilities/MedicalDevicesUtility';

const ShowMedicalDevices = () => {

    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    var medDeviceId = localStorage.getItem('med_device_id')
    const sendRequest1 = async () => {
        var result = await getAllMedicalDevicesForDoctor(patientId)
        setData(result[medDeviceId-1])
    }
    const sendRequest2 = async () => {
        var result = await getAllMedicalDevicesForPatient()
        setData(result[medDeviceId-1])
    }
    useEffect(() => {
        if(role === 'Doctor')
        {
            sendRequest1()
        }
        else if(role === 'Patient')
        {
            sendRequest2()
        }
    }, [])
    
    return(
        <>
            <h1 className='main_heading'>Medical Devices</h1>
            <div className='form_container'>
            <h1>Device use statement</h1>
            <h2>Data</h2>
            <h2>Device Details</h2>
            <label>Device name
                <span className='values'></span>
            </label>
            
            <br/>
            <label>Body site</label>
            
            <br/>
            <h2>Medical Device</h2>
            <label>Device name</label>
            
            <br/>
            <label>Type</label>
            
            <br/>
            <label>Description</label>
            
            <br/>
            <label>Unique Device Identifier (UDI)</label>
            
            <br/>
            <label>Manufacturer</label>
            
            <br/>
            <label>Date of manufacture</label>
            
            <br/>
            <label>Serial number</label>
            
            <br/>
            <label>Catalogue number</label>
            
            <br/>
            <label>Model number</label>
            
            <br/>
            <label>Batch/Lot number</label>
            
            <br/>
            <label>Software version</label>
            
            <br/>
            <label>Date of expiry</label>
           
            
            <br/>
            <label>Other identifier</label>
            
            <br/>
            <label>Comment</label>
            
            <br/>
        </div>
        </>
    )
}
export default ShowMedicalDevices;