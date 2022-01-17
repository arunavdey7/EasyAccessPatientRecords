import React,{useState,useEffect} from 'react' 
import PastHoiItem from './PastHoiItem';
import {getAllPastHistoryForDoctor,getAllPastHistoryForPatient} from '../../../utilities/PasthoiUtility'

const PastHoi = () =>
{
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    useEffect(() => {
        const sendRequest1 = async () => {
            var result = await getAllPastHistoryForDoctor(patientId)
            setData(result)
        }
        const sendRequest2 = async () => {
            var result = await getAllPastHistoryForPatient()
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
    {
        return(<h1 style={{textAlign:"center"}}>
            No Past history of illness record found.
        </h1>)
    }
    return(
        <div>
            {
                data.map((info) => <PastHoiItem {...info}/>)
            }
        </div>
    )
}
export default PastHoi;