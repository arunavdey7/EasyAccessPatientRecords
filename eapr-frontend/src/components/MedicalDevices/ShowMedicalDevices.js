import React,{useState} from 'react';

const ShowMedicalDevices = () => {
    var data = {
        "UDI": "refv",
        "batch_number": "drftgyhu",
        "body_site": "hgbvf",
        "catalogue_number": "brvef",
        "comment": "ujyhgtr",
        "date_of_expiry": "2021-11-02",
        "date_of_manufacture": "tefe",
        "description": "ytrgvfe",
        "device_name": "hgfd",
        "manufacturer": "rgvfe",
        "model_number": "5tgrf",
        "other_identifier": "jynhgtbvf",
        "patient_id": parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
        "serial_number": "gthjb",
        "software_version": "tgre",
        "type": "ytgfe"
    }

    return(
        <>
            <h1 className='main_heading'>Medical Devices</h1>
        <div className='form_container'>
            <h1>Device use statement</h1>
            <h2>Data</h2>
            <h2>Device Details</h2>
            <label>Device name : <span className='values'>{data["device_name"]}</span></label>
            <br/>
            <label>Body site : <span className='values'>{data["body_site"]}</span></label>
            <br/>
            <h2>Medical Device</h2>
            <label>Device name : <span className='values'>{data["device_name"]}</span></label>
            <br/>
            <label>Type : <span className='values'>{data["type"]}</span></label>
            <br/>
            <label>Description : <span className='values'>{data["description"]}</span></label>
            <br/>
            <label>Unique Device Identifier (UDI) : <span className='values'>{data["UDI"]}</span></label>
            <br/>
            <label>Manufacturer : <span className='values'>{data["manufacturer"]}</span></label>
            <br/>
            <label>Date of manufacture : <span className='values'>{data["date_of_manufacture"]}</span></label>
            <br/>
            <label>Serial number : <span className='values'>{data["serial_number"]}</span></label>
            <br/>
            <label>Catalogue number : <span className='values'>{data["catalogue_number"]}</span></label>
            <br/>
            <label>Model number : <span className='values'>{data["model_number"]}</span></label>
            <br/>
            <label>Batch/Lot number : <span className='values'>{data["batch_number"]}</span></label>
            <br/>
            <label>Software version : <span className='values'>{data["software_version"]}</span></label>
            <br/>
            <label>Date of expiry : <span className='values'>{data["date_of_expiry"]}</span></label>
            <br/>
            <label>Other identifier : <span className='values'>{data["other_identifier"]}</span></label>
            <br/>
            <label>Comment : <span className='values'>{data["comment"]}</span></label>
            <br/>
        </div>
        </>
    )
}
export default ShowMedicalDevices;