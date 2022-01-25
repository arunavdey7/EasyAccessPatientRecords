import React,{useState,useEffect} from 'react';
import { getVitalSignsForDoctor, getVitalSignsForPatient } from '../../utilities/VitalSignsUtility';

const ShowVitalSigns = () => {

    const [data, setData] = useState(null)
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    const sendRequest1 = async () => {
        var result = await getVitalSignsForDoctor(patientId)
        setData(result)
    }
    const sendRequest2 = async () => {
        var result = await getVitalSignsForPatient()
        setData(result)
    }
    console.log(role)
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
    if(data === null)
        return (
            <h1 style={{textAlign:"center"}}>No Vital Signs record found.</h1>
        )
    return(
        <div>
            <h1 className='main_heading'>Vital Signs</h1>
        <div className='form_container'>
            <h1>Body weight: </h1>
            <h2>Data</h2>
            <label>Weight 
                <span className='values'>{data.body_weight}</span>
                <span className='values'>{data.body_weight_unit}</span>
            </label>
            <br/>
            <h1>Height/Length</h1>
            <h2>Data</h2>
            <label>Height/Length 
                <span className='values'>{data.height}</span>
                <span className='values'>{data.height_unit}</span>
            </label>
            <br/>
            <h1>Respiration</h1>
            <h2>Data</h2>
            <label>Rate 
                <span className='values'>{data.respiration_rate}</span>
            </label>
            <br/>
            <h1>Pulse/Heartbeat</h1>
            <h2>Data</h2>
            <label>Rate 
                <span className='values'>{data.pulse_rate}</span>
            </label>
            <br/>
            <h1>Body temperature</h1>
            <h2>Data</h2>
            <label>Temperature 
                <span className='values'>{data.body_temperature}</span>
                <span className='values'>{data.body_temperature_unit}</span>
            </label>
            <br/>
            <h1>Head circumference</h1>
            <h2>Data</h2>
            <label>Head circumference 
                <span className='values'>{data.head_circumference}</span>
                <span className='values'>{data.head_circumference_unit}</span>
            </label>
            <br/>
            <h1>Pulse oximetry</h1>
            <h2>Data</h2>
            <label>SpO2 <span className='values'>{data.pulse_oximetry}</span></label>
            <br/>
            <h1>Body mass index</h1>
            <h2>Data</h2>
            <label>Body mass index 
                <span className='values'>{data.body_mass_index}</span>
                <span className='values'>{data.body_mass_index_unit}</span>
            </label>
            <br/>
            <h1>Blood pressure</h1>
            <h2>Data</h2>
            <label>Systolic 
                <span className='values'>{data.blood_pressure_systolic}</span>
            </label>
            <label>Diastolic <span className='values'>{data.blood_pressure_diastolic}</span></label>
            <br/>
        </div>
        </div>
    )
}
export default ShowVitalSigns;