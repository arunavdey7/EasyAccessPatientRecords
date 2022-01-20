import React,{useEffect,useState} from 'react' 
import { getAllImmunizationsForDoctor, getAllImmunizationsForPatient } from '../../../utilities/ImmunizationsUtility';
import ImmunizationsItem from './ImmunizationsItem';

const Immunizations = () => {
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    useEffect(() => {
        const sendRequest1 = async () => {
            var result = await getAllImmunizationsForDoctor(patientId)
            setData(result)
        }
        const sendRequest2 = async () => {
            var result = await getAllImmunizationsForPatient()
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
            No Immunizations record found.
        </h1>)
    return(
        <div>
            {
                data.map((info) => <ImmunizationsItem {...info}/>)
            }
        </div>
    )
}
export default Immunizations;