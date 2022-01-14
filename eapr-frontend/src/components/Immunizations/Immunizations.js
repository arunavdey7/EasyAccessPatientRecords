import React,{useState} from 'react';

const Immunizations = () => {

    const [data, setData] = useState({

    // Immunization Statment Description (isd)
        isdImmunizationItem:'',
        isdSequenceNumber:'',

    // Immunization Statment Description Administration Details (isd)
        isdRoute:'',
        isdTargetSite:'',

    // Immunization Statment Absence of Information Data (isd)
        isdAbsenceStatement:'',

    // Immunization Statment Absence of Information Protocol (isd)
        isdLastUpdated:''

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
            <h1 className='main_heading'>Immunizations</h1>
        <div className='form_container'>
            <h1>Immunization satement</h1>
            <h2>Description</h2>
            <label>Immunization item</label>
            <input name='isdImmunizationItem' value={data.isdImmunizationItem || ''} onChange={handleChange}></input>
            <br/>
            <h2>Administration details</h2>
            <label>Route</label>
            <input name='isdRoute' value={data.isdRoute || ''} onChange={handleChange}></input>
            <br/>
            <label>Target site</label>
            <input name='isdTargetSite' value={data.isdTargetSite || ''} onChange={handleChange}></input>
            <br/>
            <label>Sequence number</label>
            <input name='isdSequenceNumber' value={data.isdSequenceNumber || ''} onChange={handleChange}></input>
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
            <input type='datetime-local'></input>
            <br/>
            <button>Temporary save</button>
            <button>Final save</button>
        </div>
        </>
    )
}
export default Immunizations;