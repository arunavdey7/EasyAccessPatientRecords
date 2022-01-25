import React,{useState,useEffect} from 'react';
import { getAllPastHistoryForDoctor, getAllPastHistoryForPatient } from '../../utilities/PasthoiUtility';

const ShowPastHistoryofIllness = () => {

    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    var past_hoi_id = localStorage.getItem('past_hoi_id')
    const sendRequest1 = async () => {
        var result = await getAllPastHistoryForDoctor(patientId)
        setData(result[past_hoi_id-1])
    }
    const sendRequest2 = async () => {
        var result = await getAllPastHistoryForPatient()
        setData(result[past_hoi_id-1])
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
            <h1 className='main_heading'>Past History of Illnesses</h1>
        <div className='form_container'>
            <h1>Problem/Diagnosis</h1>
            <h2>Data</h2>
            <label>Problem/Diagnosis Name
                <span className='values'>{data.problem_name}</span>
            </label>
            
            <br/>
            <label>Body site
                <span className='values'>{data.body_site}</span>
            </label>
            
            <br/>
            <label>Date/Time of onset
                <span className='values'>{data.datetime_of_onset}</span>
            </label>
            
            <br/>
            <label>Severity
                <span className='values'>{data.severity}</span>
            </label> 
            <br/>
            <label>Date of abatement
                <span className='values'>{data.date_of_abatebent}</span>
            </label>
            
            <br/>
            <h2>Problem/Diagnosis qualifier</h2>
            <label>Active/Inactive?
                <span className='values'>{data.active_or_inactive}</span>
            </label> 
        
            <br/>
            <label>Resolution phase
                <span className='values'>{data.resolution_phase}</span>
            </label> 
            
            <br/>
            <label>Remission status
                <span className='values'>{data.remission_status}</span>
            </label> 
            
            <br/>
            <label>Occurence
                <span className='values'>{data.occurrence}</span>
            </label> 
            
            <br/>
            <label>Diagnostic certainty
                <span className='values'>{data.diagnostic_certainity}</span>
            </label> 

            <br/>
            <h2>Protocol</h2>
            <label>Last updated
                <span className='values'>{data.protocol_last_updated}</span>
            </label>
            
            <br/>
        </div>
        </>
    )
}
export default ShowPastHistoryofIllness;