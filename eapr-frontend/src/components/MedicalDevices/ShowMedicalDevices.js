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
            <label>Device name</label>
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