import React,{useState} from 'react';

const MedicalDevices = () => {

    const [data, setData] = useState({

    // Device Use Statement Device Details (md)
        mdDeviceName:'',
        mdBodySite:'',

    // Device Use Statement Medical Device (du)
        duDeviceName:'',
        duType:'',
        duDescription:'',
        duUniqueDeviceIdentifier:'',
        duManufacturer:'',
        duDateofManufacture:'',
        duSerialNumber:'',
        duCatalogueNumber:'',
        duModelNumber:'',
        duBatchNumber:'',
        duSoftwareVersion:'',
        duDateofExpiry:'',
        duOtherIdentifier:'',
        duComment:''

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
            <h1 className='main_heading'>Medical Devices</h1>
        <div className='form_container'>
            <h1>Device use statement</h1>
            <h2>Data</h2>
            <h2>Device Details</h2>
            <label>Device name</label>
            <input name='mdDeviceName' value={data.mdDeviceName || ''} onChange={handleChange}></input>
            <br/>
            <label>Body site</label>
            <input name='mdBodySite' value={data.mdBodySite || ''} onChange={handleChange}></input>
            <br/>
            <h2>Medical Device</h2>
            <label>Device name</label>
            <input name='duDeviceName' value={data.duDeviceName || ''} onChange={handleChange}></input>
            <br/>
            <label>Type</label>
            <input name='duType' value={data.duType || ''} onChange={handleChange}></input>
            <br/>
            <label>Description</label>
            <input name='duDescription' value={data.duDescription || ''} onChange={handleChange}></input>
            <br/>
            <label>Unique Device Identifier (UDI)</label>
            <input name='duUniqueDeviceIdentifier' value={data.duUniqueDeviceIdentifier || ''} onChange={handleChange}></input>
            <br/>
            <label>Manufacturer</label>
            <input name='duManufacturer' value={data.duManufacturer || ''} onChange={handleChange}></input>
            <br/>
            <label>Date of manufacture</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <label>Serial number</label>
            <input name='duSerialNumber' value={data.duSerialNumber || ''} onChange={handleChange}></input>
            <br/>
            <label>Catalogue number</label>
            <input name='duCatalogueNumber' value={data.duCatalogueNumber || ''} onChange={handleChange}></input>
            <br/>
            <label>Model number</label>
            <input name='duModelNumber' value={data.duModelNumber || ''} onChange={handleChange}></input>
            <br/>
            <label>Batch/Lot number</label>
            <input name='duBatchNumber' value={data.duBatchNumber || ''} onChange={handleChange}></input>
            <br/>
            <label>Software version</label>
            <input name='duSoftwareVersion' value={data.duSoftwareVersion || ''} onChange={handleChange}></input>
            <br/>
            <label>Date of expiry</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <label>Other identifier</label>
            <input name='duOtherIdentifier' value={data.duOtherIdentifier || ''} onChange={handleChange}></input>
            <br/>
            <label>Comment</label>
            <input name='duComment' value={data.duComment || ''} onChange={handleChange}></input>
            <br/>
        </div>
        </>
    )
}
export default MedicalDevices;