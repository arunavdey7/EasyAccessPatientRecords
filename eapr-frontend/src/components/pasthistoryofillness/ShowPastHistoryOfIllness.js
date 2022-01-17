import React,{useState} from 'react';

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
            <label>Problem/Diagnosis name</label>
            
            <br/>
            <label>Body site</label>
            
            <br/>
            <label>Date/Time of onset</label>
            
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
            <label>Diagnostic certainty</label> 

            <br/>
            <h2>Protocol</h2>
            <label>Last updated</label>
            
            <br/>
        </div>
        </>
    )
}
export default ShowPastHistoryofIllness;