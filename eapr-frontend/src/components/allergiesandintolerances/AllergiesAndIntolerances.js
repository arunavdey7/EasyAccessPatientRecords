import React,{useState} from 'react'

import {addAllergiesAndIntolerances} from '../../utilities/AllergiesAndIntolerancesUtility'
const CreateAllergiesAndIntolerances = () => {
        const [data, setData] = useState({
        patient_id : parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
        global_exclusion_of_adverse_reactions:"",
        absence_of_information_statement :"",
        absence_of_information_protocol_last_updated :"",
        substance :'' ,
        verification_status:"",
        critically :"",
        type :"",
        comment :"",
        reaction_manifestation :"",
        onset :"",
        severity :"",
        protocol_last_updated:""
    
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const sendData = async () => {
       const result = await addAllergiesAndIntolerances(data)
    }
    
    return(
        <>
        <h1 className='main_heading'>Allergies and Intolerances</h1>
        <div className='form_container'>
            <h1>Allergy Intolerance</h1>
            <h2>Data</h2>
            <label>Substance</label>
            <input name ='substance' value={data.substance || ''} onChange={handleChange}></input>
            <br/>
            <label>Verification Status</label>
            <select name ='verification_status' value={data.verification_status || ''} onChange={handleChange}>
                <option value='Suspected'>Suspected</option>
                <option value='Likely'>Likely</option>
                <option value='Confirmed'>Confirmed</option>
                <option value='Resolved'>Resolved</option>
                <option value='Refuted'>Refuted</option>
            </select>
            <br/>
            <label>Criticality</label>
            <select name ='critically' value={data.critically || ''} onChange={handleChange}>
                <option value='Low'>Low</option>
                <option value='High'>High</option>
                <option value='Indeterminate'>Indeterminate</option>
            </select>
            <br/>
            <label>Type</label>
            <select name ='type' value={data.type || ''} onChange={handleChange}>
                <option value='Allergy'>Allergy</option>
                <option value='Intolerance'>Intolerance</option>
            </select>
            <br/>
            <label>Comment</label>
            <input name ='comment' value={data.comment || ''} onChange={handleChange}></input>
            <br/>
            <h4>Reaction</h4>
            <label>Manifestation</label>
            <input name ='reaction_manifestation' value={data.reaction_manifestation || ''} onChange={handleChange}></input>
            <br/>
            <label>Onset</label>
            <input name ='onset' value={data.onset || ''} onChange={handleChange}></input>
            <br/>
            <label>Severity</label>
            <select name ='severity' value={data.severity || ''} onChange={handleChange}>
                <option value='Mild'>Mild</option>
                <option value='Moderate'>Moderate</option>
                <option value='Severe'>Severe</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated</label>
            <input type='date' name ='protocol_last_updated' value={data.protocol_last_updated || ''} onChange={handleChange}></input>
            <br/>
            <h1>Exclusion Global</h1>
            <h2>Data</h2>
            <label>Global exclusion of adverse reactions</label>
            <select name ='global_exclusion_of_adverse_reactions' value={data.global_exclusion_of_adverse_reactions || ''} onChange={handleChange}>
                <option value='No known Allergies'>No known Allergies</option>
                <option value='No known Medication Allergies'>No known Medication Allergies</option>
                <option value='No known Environmental Allergies'>No known Environmental Allergies</option>
                <option value='No known Food Allergies'>No known Food Allergies</option>
            </select>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement</label>
            <select name ='absence_of_information_statement' value={data.absence_of_information_statement || ''} onChange={handleChange}>
                <option value='No information about medications'>No information about allergies</option>
            </select>
            <br/>
            <label>Last Updated</label>
            <input name ='absence_of_information_protocol_last_updated' value={data.absence_of_information_protocol_last_updated || ''} onChange={handleChange}></input>
            <br/>
            <button onClick={sendData}>Final save</button>
        </div>
        </>
    )
}
export default CreateAllergiesAndIntolerances;