import React,{useState, useEffect} from 'react'

import {getAllergyAndIntoleranceByIdForDoctor, getAllergyAndIntoleranceByIdForPatient, } from '../../utilities/AllergiesAndIntolerancesUtility'
const ShowAllergiesAndIntolerances = () => {
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    var allergy_id = localStorage.getItem('allergy_id',allergy_id)
    const sendRequest1 = async () => {
        var result = await getAllergyAndIntoleranceByIdForDoctor(allergy_id)
        setData(result)
    }
    const sendRequest2 = async () => {
        var result = await getAllergyAndIntoleranceByIdForPatient(allergy_id)
        setData(result)
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
        <h1 className='main_heading'>Allergies and Intolerances</h1>
        <div className='form_container'>
            <h1>Allergy Intolerance</h1>
            <h2>Data</h2>
            <label>Substance</label>
            <br/>
            <label>Verification Status</label>
            <br/>
            <label>Criticality</label>
            <br/>
            <label>Type</label>
            <br/>
            <label>Comment</label>
            <br/>
            <h4>Reaction</h4>
            <label>Manifestation</label>
            <br/>
            <label>Onset</label>
            <br/>
            <label>Severity</label>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated</label>
            <br/>
            <h1>Exclusion Global</h1>
            <h2>Data</h2>
            <label>Global exclusion of adverse reactions</label>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement</label>
            <br/>
            <label>Last Updated</label>
            <br/>
        </div>
        </>
    )
}
export default ShowAllergiesAndIntolerances;