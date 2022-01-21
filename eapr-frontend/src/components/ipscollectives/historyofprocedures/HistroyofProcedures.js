import React,{useState,useEffect} from 'react' 
import { getAllHistoryOfProceduresForDoctor, getAllHistoryOfProceduresForPatient } from '../../../utilities/HistoryOfProceduresUtility';
import HistoryofProceduresItem from './HistoryofProceduresItem';

const HistoryofProcedures = () => {
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    useEffect(() => {
        const sendRequest1 = async () => {
            var result = await getAllHistoryOfProceduresForDoctor(patientId)
            setData(result)
        }
        const sendRequest2 = async () => {
            var result = await getAllHistoryOfProceduresForPatient()
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
            No history of procedures record found.
        </h1>)
    return(
        <div>
            {
                data.map((info) => <HistoryofProceduresItem {...info}/>)
            }
        </div>
    )
}
export default HistoryofProcedures;