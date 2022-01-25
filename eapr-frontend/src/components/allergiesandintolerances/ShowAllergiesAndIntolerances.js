import React,{useState, useEffect} from 'react'

import {getAllergyAndIntoleranceByIdForDoctor, getAllergyAndIntoleranceByIdForPatient, } from '../../utilities/AllergiesAndIntolerancesUtility'
const ShowAllergiesAndIntolerances = () => {
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    var allergy_id = localStorage.getItem('allergy_id',allergy_id)
    const sendRequest1 = async () => {
        var result = await getAllergyAndIntoleranceByIdForDoctor(allergy_id)
        console.log(result)
        setData(result)
    }
    const sendRequest2 = async () => {
        var result = await getAllergyAndIntoleranceByIdForPatient(allergy_id)
        console.log(result)
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
            <label>Substance
                <span className='values'></span>
            </label>
            <br/>
            <label>Verification Status
            <span className='values'>{data.verification_status}</span>
            </label>
            <br/>
            <label>Criticality
            <span className='values'>{data.critically}</span>
            </label>
            <br/>
            <label>Type
            <span className='values'>{data.type}</span>
            </label>
            <br/>
            <label>Comment
            <span className='values'>{data.comment}</span>
            </label>
            <br/>
            <h4>Reaction</h4>
            <label>Manifestation
            <span className='values'>{data.reaction_manifestation}</span>
            </label>
            <br/>
            <label>Onset
            <span className='values'>{data.substance}</span>
            </label>
            <br/>
            <label>Severity
            <span className='values'>{data.onset}</span>
            </label>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated
            <span className='values'>{data.protocol_last_updated}</span>
            </label>
            <br/>
            <h1>Exclusion Global
            <span className='values'></span>
            </h1>
            <h2>Data</h2>
            <label>Global exclusion of adverse reactions
            <span className='values'>{data.global_exclusion_of_adverse_reactions}</span>
            </label>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement
            <span className='values'>{data.absence_of_information_statement}</span>
            </label>
            <br/>
            <label>Last Updated
            <span className='values'></span>
            </label>
            <br/>
        </div>
        </>
    )
}
export default ShowAllergiesAndIntolerances;