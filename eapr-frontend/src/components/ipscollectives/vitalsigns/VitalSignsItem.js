import React from 'react' 
import VitalSigns from './VitalSigns'
import '../../ipscollectives/vitalsigns/VitalSigns'
const VitalSignsItem = ({
    blood_pressure_diastolic,
    blood_pressure_systolic,
    body_mass_index,
    body_mass_index_unit,
    body_temperature,
    body_temperature_unit,
    body_weight,
    body_weight_unit,
    head_circumference,
    head_circumference_unit,
    height,
    height_unit,
    pulse_oximetry,
    pulse_rate,
    respiration_rate
}) => {
    const handleClick = () => {
        
    }
    return(
        <div onClick={handleClick} className='vitals_container'>
            <div className='name_container'>
                <h1 style={{textAlign:"center"}}>Vital Signs</h1>
                <h3>Blood Pressure (Diastolic): {blood_pressure_diastolic}</h3>
                <h3>Blood Pressure (Systolic): {blood_pressure_systolic}</h3>
                <h3>Body Mass Index: {body_mass_index} {body_mass_index_unit}</h3>
                <h3>Body Temperature: {body_temperature} {body_temperature_unit}</h3>
                <h3>Body Weight: {body_weight} {body_weight_unit}</h3>
                <h3>Head Circumference: {head_circumference} {head_circumference_unit}</h3>
                <h3>Body Height: {height} {height_unit}</h3>
                <h3>Pulse Oximetry: {pulse_oximetry} {pulse_rate}</h3>
                <h3>Respiration Rate: {respiration_rate}</h3>  
            </div>
        </div>
    )
}
export default VitalSignsItem;