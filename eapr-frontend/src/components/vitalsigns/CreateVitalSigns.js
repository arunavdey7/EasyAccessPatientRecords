import React,{useState} from 'react';
import { toast } from 'react-toastify';
import {addVitalSigns} from '../../utilities/VitalSignsUtility'
const CreateVitalSigns = () => {

    const [body_weight, setBody_weight] = useState("");
    const [body_weight_unit, setBody_weight_unit] = useState("");
    const [height, setHeight] = useState("");
    const [height_unit, setHeight_unit] = useState("");
    const [respiration_rate, setRespiration_rate] = useState("");
    const [pulse_rate, setPulse_rate] = useState("");
    const [body_temperature, setBody_temperature] = useState("");
    const [body_temperature_unit, setBody_temperature_unit] = useState("");
    const [head_circumference, setHead_circumference] = useState("");
    const [head_circumference_unit, setHead_circumference_unit] = useState("");
    const [pulse_oximetry, setPulse_oximetry] = useState("");
    const [body_mass_index, setBody_mass_index] = useState("");
    const [body_mass_index_unit, setBody_mass_index_unit] = useState("");
    const [blood_pressure_systolic, setBlood_pressure_systolic] = useState("");
    const [blood_pressure_diastolic, setBlood_pressure_diastolic] = useState("");


    const saveVitalSigns = async () =>{
        var data = {
            patient_uid:localStorage.getItem('patientuid'),
            body_weight,
            body_weight_unit,
            height,
            height_unit,
            respiration_rate,
            pulse_rate,
            body_temperature,
            body_temperature_unit,
            head_circumference,
            head_circumference_unit,
            pulse_oximetry,
            body_mass_index,
            body_mass_index_unit,
            blood_pressure_systolic,
            blood_pressure_diastolic
        }
        var result = await addVitalSigns(data)
        if(result)
            toast("Vital signs added successfully")
        else
            toast("Vital signs cannot be added successfully ")
    }

    return(
        <>
          <h1>Arunav Dey</h1>
        </>
    )
}
export default CreateVitalSigns;