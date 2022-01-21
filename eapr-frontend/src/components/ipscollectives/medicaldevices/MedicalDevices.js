import React,{useState,useEffect} from 'react' 
import { getAllMedicalDevicesForDoctor, getAllMedicalDevicesForPatient } from '../../../utilities/MedicalDevicesUtility';
import MedicalDevicesItem from './MedicalDevicesItem';

const MedicalDevices = () => {
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    useEffect(() => {
        const sendRequest1 = async () => {
            var result = await getAllMedicalDevicesForDoctor(patientId)
            setData(result)
        }
        const sendRequest2 = async () => {
            var result = await getAllMedicalDevicesForPatient()
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
    console.log(data)
    if(data.length === 0)
        return(<h1 style={{textAlign:"center"}}>
            No Medical device record found.
        </h1>)
    return(
        <div>
            {
                data.map((info) => <MedicalDevicesItem {...info}/>)
            }
        </div>
    )
}
export default MedicalDevices;