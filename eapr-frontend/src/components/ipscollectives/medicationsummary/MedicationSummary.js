import React,{useState, useEffect, useContext} from 'react' 
import MedSummaryItem from './MedSummaryItem';
import {getAllMedicationStatements, getAllMedicationStatementsForDoctor} from '../../../utilities/MedicationStatementUtility'
import SessionContext from '../../../utilities/SessionContext'
import './medSummaryStyles.css'
const MedicationSummary = () => {
    // Load All medication Statements
    const [data, setData] = useState([])
    var patientInfo = JSON.parse(localStorage.getItem('patient_info'))
    var sessionData = JSON.parse(localStorage.getItem('sessionData'))

    useEffect(() => {
        if(sessionData.role === 'Patient')
        {
            sendRequest1()
        }
        else if(sessionData.role === 'Doctor')
        {
            sendRequest2()
        }
    },[])

    const sendRequest1 = async () => {
        var result = await getAllMedicationStatements(patientInfo.id)
        setData(result)
    }
    const sendRequest2 = async () => {
        var result = await getAllMedicationStatementsForDoctor(patientInfo.id)
        setData(result)
    }
    
    return(
        // Multiple medical statements will be loaded here
        <div>
            <h1 className='page_heading' style={{textAlign:"center"}}>Previous medical records</h1>
            {
                data.length === 0 ? <h1 style={{textAlign:"center"}}>No previous medication statements found.</h1> : 
                data.map((info) => <MedSummaryItem {...info}/>)
            }
        </div>
    )
}
export default MedicationSummary;