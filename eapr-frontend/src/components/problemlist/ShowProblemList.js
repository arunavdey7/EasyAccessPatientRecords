import React,{useState,useEffect} from 'react';
import {addProblem,getAllProblemsForDoctor,getAllProblemsForPatient} from '../../utilities/ProblemListUtility'
const ShowProblemList = () => {

    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    var problem_id = localStorage.getItem('problem_id')
    const sendRequest1 = async () => {
        var result = await getAllProblemsForDoctor(patientId)
        setData(result[problem_id-1])
    }
    const sendRequest2 = async () => {
        var result = await getAllProblemsForPatient()
        setData(result[problem_id-1])
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
            <h1 className='main_heading'>Problem List</h1>
        <div className='form_container'>
            <h1>Problem/Diagnosis</h1>
            <h2>Data</h2>
            <label>Problem/Diagnosis name: <span>{data["problem_name"]}</span></label>
            
            <br/>
            <label>Body site</label>
            
            <br/>
            <label>Date/time of onset</label>
            
            <br/>
            <label>Severity</label>
            
            <br/>
            <label>Date of abatement</label>
            
            <br/>
            <h2>Problem/Diagnosis qualifier</h2>
            <label>Active/Inactive?</label>
        
            <br/>
            <label>Resolution phase</label>
        
            <br/>
            <label>Remission status</label>
            
            <br/>
            <label>Occurence</label>
            
            <br/>
            <label>Diagnostic certainity</label>
            
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated</label>
            <input type='datetime-local'></input>
            <br/>
            <h1>Exclusion - global</h1>
            <h2>Data</h2>
            <label>Global exclusion of problems/diagnoses</label>
            
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement</label>
           
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated</label>
            
            <br/>
        </div>
        </>
    )
}
export default ShowProblemList;