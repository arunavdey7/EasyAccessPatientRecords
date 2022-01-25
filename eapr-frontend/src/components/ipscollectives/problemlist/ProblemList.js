import React,{useEffect,useState} from 'react' 
import ProblemistItem from './ProblemListItem'
import {getAllProblemsForDoctor,getAllProblemsForPatient} from '../../../utilities/ProblemListUtility'
const ProblemList = () => {
    // Load All medication Statements
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    useEffect(() => {
        const sendRequest1 = async () => {
            var result = await getAllProblemsForDoctor(patientId)
            setData(result)
        }
        const sendRequest2 = async () => {
            var result = await getAllProblemsForPatient()
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
            No Problems record found.
        </h1>)
    return(
        <div>
            {
                data.map((info) => <ProblemistItem {...info}/>)
            }
        </div>
    )
}
export default ProblemList;