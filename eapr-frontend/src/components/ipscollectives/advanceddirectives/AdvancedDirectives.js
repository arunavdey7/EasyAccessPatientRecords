import React,{useEffect,useState} from 'react' 
import { getAllAdvancedDirectivesForDoctor, getAllAdvancedDirectivesForPatient } from '../../../utilities/AdvancedDirectivesUtility';
import AdvancedDirectivesItem from './AdvancedDirectivesItem';

const AdvancedDirectives = () => {
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    useEffect(() => {
        const sendRequest1 = async () => {
            var result = await getAllAdvancedDirectivesForDoctor(patientId)
            setData(result)
        }
        const sendRequest2 = async () => {
            var result = await getAllAdvancedDirectivesForPatient()
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
            No Advance Directives record found.
        </h1>)
    }
    return(
        <div>
            {
                data.map((info) => <AdvancedDirectivesItem {...info}/>)
            }
        </div>
    )
}
export default AdvancedDirectives;