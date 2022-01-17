import React,{useState,useEffect} from 'react';
import { getVitalSignsForDoctor, getVitalSignsForPatient } from '../../utilities/VitalSignsUtility';

const ShowVitalSigns = () => {

    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    var problem_id = localStorage.getItem('problem_id')
    const sendRequest1 = async () => {
        var result = await getVitalSignsForDoctor(patientId)
        setData(result[problem_id-1])
    }
    const sendRequest2 = async () => {
        var result = await getVitalSignsForPatient()
        setData(result[problem_id-1])
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
        <div>

        </div>
    )
}
export default ShowVitalSigns;