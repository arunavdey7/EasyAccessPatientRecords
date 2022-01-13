import React,{useState} from 'react';

const ShowMedicalDevices = () => {

    var data = {

        "medical_devices":{
			"patient_uid":1,
			"device_name":"urinary catheter",
			"body_site":"legs",
			"type":"condom",
			"description":"Keep the catheter secured.",
			"UDI":"123A",
			"manufacturer":"Bard Catheters",
			"date_of_manufacture":"02/03/2021",
			"serial_number":"1234W",
			"catalogue_number":"456",
			"model_number":"12AQ12",
			"batch_number":"QWE123",
			"software_version":"V1 2.3",
			"date_of_expiry":"02/03/2022",
			"other_identifier":"catheter",
			"comment":"Use soap and water if your hands look dirty, not the alcohol-based cleaner."							
		}






}
    return(
        <>
            <h1 className='main_heading'>Medical Devices</h1>
        <div className='form_container'>
            <h1>Device use statement</h1>
            <h2>Data</h2>
            <h2>Device Details</h2>
            <label>Device name : <span className='values'>{data["medical_devices"]["device_name"]}</span></label>
            <br/>
            <label>Body site : <span className='values'>{data["medical_devices"]["body_site"]}</span></label>
            <br/>
            <h2>Medical Device</h2>
            <label>Device name : <span className='values'>{data["medical_devices"]["device_name"]}</span></label>
            <br/>
            <label>Type : <span className='values'>{data["medical_devices"]["type"]}</span></label>
            <br/>
            <label>Description : <span className='values'>{data["medical_devices"]["description"]}</span></label>
            <br/>
            <label>Unique Device Identifier (UDI) : <span className='values'>{data["medical_devices"]["UDI"]}</span></label>
            <br/>
            <label>Manufacturer : <span className='values'>{data["medical_devices"]["manufacturer"]}</span></label>
            <br/>
            <label>Date of manufacture : <span className='values'>{data["medical_devices"]["date_of_manufacture"]}</span></label>
            <br/>
            <label>Serial number : <span className='values'>{data["medical_devices"]["serial_number"]}</span></label>
            <br/>
            <label>Catalogue number : <span className='values'>{data["medical_devices"]["catalogue_number"]}</span></label>
            <br/>
            <label>Model number : <span className='values'>{data["medical_devices"]["model_number"]}</span></label>
            <br/>
            <label>Batch/Lot number : <span className='values'>{data["medical_devices"]["batch_number"]}</span></label>
            <br/>
            <label>Software version : <span className='values'>{data["medical_devices"]["software_version"]}</span></label>
            <br/>
            <label>Date of expiry : <span className='values'>{data["medical_devices"]["date_of_expiry"]}</span></label>
            <br/>
            <label>Other identifier : <span className='values'>{data["medical_devices"]["other_identifier"]}</span></label>
            <br/>
            <label>Comment : <span className='values'>{data["medical_devices"]["comment"]}</span></label>
            <br/>
        </div>
        </>
    )
}
export default MedicalDevices;
