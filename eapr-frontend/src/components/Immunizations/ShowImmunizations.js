import React,{useState,useEffect} from 'react';
import { getAllImmunizationsForDoctor, getAllImmunizationsForPatient } from '../../utilities/ImmunizationsUtility';

const ShowImmunizations = () => {

    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    var immunization_item_id = localStorage.getItem('immunization_item_id')
    const sendRequest1 = async () => {
        var result = await getAllImmunizationsForDoctor(patientId)
        setData(result[immunization_item_id-1])
    }
    const sendRequest2 = async () => {
        var result = await getAllImmunizationsForPatient()
        setData(result[immunization_item_id-1])
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
        <>
            <h1 className='main_heading'>Immunizations</h1>
            <div className='form_container'>
            <h1>Immunization satement</h1>
            <h2>Description</h2>
            <label>Immunization item 
                <span className='values'>{data.immunization_item}</span>
            </label>
            
            <br/>
            <h2>Administration details</h2>
            <label>Route 
                <span className='values'>{data.administration_details_route}</span>
            </label>
            
            <br/>
            <label>Target site 
                <span className='values'>{data.administration_details_target_site}</span>
            </label>
            
            <br/>
            <label>Sequence number 
                <span className='values'>{data.sequence_number}</span>
            </label>
        </div>
        </>
    )
}
export default ShowImmunizations;