import React,{useState} from 'react';

const VitalSigns = () => {

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


    const saveVitalSigns = () =>{
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
        var result = addVitalSigns(data)
        console.log(JSON.stringify(data))
        console.log(result)
        if(result)
            toast("Vital signs added successfully")
        else
            toast("Vital signs cannot be added successfully ")
    }

    return(
        <>
            <h1 className='main_heading'>Vital Signs</h1>
        <div className='form_container'>
            <h1>Body weight</h1>
            <h2>Data</h2>
            <label>Weight</label>
            <input placeholder='0-1000' onChange={e => setBody_weight(e.target.value)}></input>
            <select>
                <option value='kg'>kg</option>
                <option value='g'>g</option>
            </select>
            <br/>
            <h1>Height/Length</h1>
            <h2>Data</h2>
            <label>Height/Length</label>
            <input placeholder='0-1000' onChange={e => setHeight(e.target.value)}></input>
            <select>
                <option value='cms'>cms</option>
                <option value='inches'>inches</option>
            </select>
            <br/>
            <h1>Respiration</h1>
            <h2>Data</h2>
            <label>Rate</label>
            <input placeholder='0-200' onChange={e => setRespiration_rate(e.target.value)}></input><span>/min</span>
            <br/>
            <h1>Pulse/Heartbeat</h1>
            <h2>Data</h2>
            <label>Rate</label>
            <input placeholder='0-1000' onChange={e => setPulse_rate(e.target.value)}></input><span>/min</span>
            <br/>
            <h1>Body temperature</h1>
            <h2>Data</h2>
            <label>Temperature</label>
            <input placeholder='0-100' onChange={e => setBody_temperature(e.target.value)}></input>
            <select>
                <option value='Cel'>Cel</option>
                <option value='degF'>degF</option>
            </select>
            <br/>
            <h1>Head circumference</h1>
            <h2>Data</h2>
            <label>Head circumference</label>
            <input placeholder='0-100' onChange={e => setHead_circumference(e.target.value)}></input>
            <select>
                <option value='cms'>cms</option>
                <option value='inches'>inches</option>
            </select>
            <br/>
            <h1>Pulse oximetry</h1>
            <h2>Data</h2>
            <label>SpO2</label>
            <input placeholder='0' onChange={e => setPulse_oximetry(e.target.value)}></input><span>%</span>
            <br/>
            <h1>Body mass index</h1>
            <h2>Data</h2>
            <label>Body mass index</label>
            <input placeholder='0-1000' onChange={e => setBody_mass_index(e.target.value)}></input>
            <select>
                <option value='kg/m2'>kg/m2</option>
            </select>
            <br/>
            <h1>Blood pressure</h1>
            <h2>Data</h2>
            <label>Systolic</label>
            <input placeholder='0-1000' onChange={e => setBlood_pressure_systolic(e.target.value)}></input><span>mm[Hg]</span>
            <label>Diastolic</label>
            <input placeholder='0-1000' onChange={e => setBlood_pressure_diastolic(e.target.value)}></input><span>mm[Hg]</span>
            <br/>
        </div>
        </>
    )
}
export default VitalSigns;