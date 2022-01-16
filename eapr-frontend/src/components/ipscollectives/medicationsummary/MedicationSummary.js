import React,{useState, useEffect, useContext} from 'react' 
import MedSummaryItem from './MedSummaryItem';
import {getAllMedicationStatements, getAllMedicationStatementsForDoctor} from '../../../utilities/MedicationStatementUtility'
import SessionContext from '../../../utilities/SessionContext'

const MedicationSummary = () => {
    // Load All medication Statements
    const [data, setData] = useState([])
    var patientInfo = JSON.parse(localStorage.getItem('patient_info'))
    var sessionData = JSON.parse(localStorage.getItem('sessionData'))
    if(sessionData.role === 'Patient')
    {
        const getData1 = async () => {
            var result = await getAllMedicationStatements(patientInfo.id)
            setData(result)
        }
        getData1()
    }
    else if(sessionData.role === 'Doctor')
    {
        const getData2 = async () => {
            var result = await getAllMedicationStatementsForDoctor(patientInfo.id)
            setData(result)
        }
        getData2()
    }
   console.log(sessionData)

    return(
        // Multiple medical statements will be loaded here
        <div>
            {
                data === undefined ? <h1 style={{textAlign:"center"}}>No previous medication statements found.</h1> : 
                data.map((info) => <MedSummaryItem {...info}/>)
            }
        </div>
    )
}
export default MedicationSummary;