import React,{useState,useEffect} from 'react' 
import DiagnosticResultsItem from './DiagnosticResultsItem';
import {getAllDiagnosticResultsForDoctor,getAllDiagnosticResultsForPatient} from '../../../utilities/DiagnosticResultsUtility'
const ListDiagnosticResults = () => {
    // Load All Diagnostic results
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    useEffect(() => {
        const sendRequest1 = async () => {
            var result = await getAllDiagnosticResultsForDoctor(patientId)
            setData(result)
        }
        const sendRequest2 = async () => {
            var result = await getAllDiagnosticResultsForPatient()
            setData(result)
        }
        if(role === 'Doctor')
        {
            sendRequest1()
        }
        else if(role === 'Patient')
        {
            sendRequest2()
        }
    }, [])
    
    
    if(data.length === 0)
        return(<h1 style={{textAlign:"center"}}>
            No Diagnostics record found.
        </h1>)
    return(
        <div>
            {
                data.map((info) => <DiagnosticResultsItem {...info}/>)
            }
        </div>
    )
}
export default ListDiagnosticResults;
