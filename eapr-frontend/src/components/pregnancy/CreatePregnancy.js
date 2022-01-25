import React,{useState} from 'react';

const Pregnancy = () => {

    const [pregnancy_status, setPregnancy_status] = useState("");
    const [pregnancy_outcome, setPregnancy_outcome] = useState("");
    const [estimated_date_of_delivery_by_date_of_conseption, setEstimated_date_of_delivery_by_date_of_conseption] = useState("");
    const [estimated_date_of_delivery_by_cycle, setEstimated_date_of_delivery_by_cycle] = useState("");
    const [estimated_date_of_delivery_by_ultrasound, setEstimated_date_of_delivery_by_ultrasound] = useState("");
    const [agreed_date, setAgreed_date] = useState("");
    const [protocol_last_updated, setProtocol_last_updated] = useState("");
    const [exclusion_of_pregnancy_statement, setExclusion_of_pregnancy_statement] = useState("");

    const saveMedicationStatement = () =>{
        var data = {
            patient_uid:localStorage.getItem('patientuid'),
		    pregnancy_status,
		    pregnancy_outcome,
		    estimated_date_of_delivery_by_date_of_conseption,
		    estimated_date_of_delivery_by_cycle,
		    estimated_date_of_delivery_by_ultrasound,
		    agreed_date,
		    protocol_last_updated,
		    exclusion_of_pregnancy_statement
        }
        var result = addPregnancy(data)
        console.log(JSON.stringify(data))
        console.log(result)
        if(result)
            toast("Pregnancy added successfully")
        else
            toast("Pregnancy cannot be added successfully ")
    }

    return(
        <>
            <h1 className='main_heading'>Pregnancy</h1>
        <div className='form_container'>
            <h1>Pregnancy Summary</h1>
            <h2>Data</h2>
            <label>Status</label>
            <select>
                <option value='Current pregnancy'>Current pregnancy</option>
            </select>
            <br/>
            <h2>Per pregnancy</h2>
            <label>Pregnancy outcome</label>
            <input onChange={e => setPregnancy_outcome(e.target.value)}></input>
            <br/>
            <h1>Estimated date of delivery</h1>
            <h2>Data</h2>
            <label>By date of conception</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <label>By cycle</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <h2>By ultrasound</h2>
            <label>Estimated date by ultrasound</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <h2>Agreed EDD</h2>
            <label>Agreed date</label>
            <input type="date"></input><input type="time"></input>
            <br/>
            <h2>Protocol</h2>
            <label>Last updated</label>
            <input type="datetime-local"></input>
            <br/>
            <h1>Exclusion of pregnancy</h1>
            <h2>Data</h2>
            <label>Exclusion statement</label>
            <select>
                <option value='Not pregnant'>Not pregnant</option>
            </select>
            <br/>
        </div>
        </>
    )
}
export default Pregnancy;