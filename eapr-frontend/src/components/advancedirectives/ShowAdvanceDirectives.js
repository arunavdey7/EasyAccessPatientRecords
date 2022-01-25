import React,{useEffect,useState} from 'react';
import { getAllAdvancedDirectivesForDoctor, getAllAdvancedDirectivesForPatient } from '../../utilities/AdvancedDirectivesUtility';

const ShowAdvanceDirectives = () => {
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    var adv_directive_id = localStorage.getItem('adv_directive_id')
    const sendRequest1 = async () => {
        var result = await getAllAdvancedDirectivesForDoctor(patientId)
        setData(result[adv_directive_id-1])
    }
    const sendRequest2 = async () => {
        var result = await getAllAdvancedDirectivesForPatient()
        setData(result[adv_directive_id-1])
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
export default ShowAdvanceDirectives;