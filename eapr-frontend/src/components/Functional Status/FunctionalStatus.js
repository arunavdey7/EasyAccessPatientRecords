import React,{useState} from 'react'
import { toast } from 'react-toastify'
import { addMedicationStatement } from '../../utilities/MedicationStatementUtility'
import './styles.css'
const  FunctionalStatus = () => {
  
    
    const [diagnosis_name, setDiagnosis_name] = useState("")
    const [body_site, setBody_site] = useState("")
    const [date_of_onsetn, setDate_of_onset] = useState("")
    const [severity, setSeverity] = useState("")

   
    const [date_of_abatement, setDate_of_abatement] = useState(0)
    const [active_inactive, setActive_inactive] = useState("")
    const [resolution_phase, setResolution_phase] = useState(0)
    const [remission_status, setRemission_status] = useState("")
    const [occurrence, setOccurrence] = useState("")
    const [diagnostic_certainty, setDiagnostic_certainty] = useState("")
    const [protocol_last_updated, setProtocol_last_updated] = useState("")
    const [clinical_impression, setClinical_impression] = useState(0)

   
    
    
    const saveFunctionalStatus = () =>{
        var data = {
            patient_id:localStorage.getItem('patientuid'),
            diagnosis_name,
            body_site,
            date_of_onset,
            severity,
            date_of_abatement,
            active_inactive,
            resolution_phase,
            remission_status,
            occurrence,
            diagnostic_certainty,
            protocol_last_updated,
            clinical_impression
    
    
    }
        var result = addFunctionalStatus(data)
        console.log(JSON.stringify(data))
        console.log(result)
        if(result)
            toast("Functional Status added successfully")
        else
            toast("Functional Status cannot be successfully")
    }

    return(
        <>
        <h1 className='main_heading'>Functional Status</h1>
        <div className='form_container'>
            <h1>Problem/Diagnosis</h1>
            <h2>data</h2>
            <label>Problem/Diagnosis name</label>
            <input  onChange={e => setDiagnosis_name(e.target.value)}></input>
            <br />
            <label>Body site</label>
            <input  onChange={e => setBody_site(e.target.value)}></input>
            <br />
            <label>Date/time of onset</label>
            <input   type='datetime-local' onChange={e => setDate_of_onset(e.target.value)}></input>
            <br />
            <label>Severity</label>
            <select>
                <option value='Mild'>Mild</option>
                <option value='Moderate'>Moderate</option>
                <option value='Severe'>Severe</option>
            </select>
            <br />
            <label>Date of abatement</label>
            <input   type='datetime-local' onChange={e => setDate_of_abatement(e.target.value)}></input>
            <br />
            <h2>Problem/Diagnosis qualifier</h2>
            <label>Active/Inactive?</label>
            <select>
                <option value='Active'>Active</option>
                <option value='Inactive'>Inactive</option>
            </select>
            <br />
            <label>Resolution phase</label>
            <select>
                <option value='Resolved'>Resolved</option>
                <option value='Relapsed'>Relapsed</option>
            </select>
            <br />
            <label>Remission status</label>
            <select>
                <option value='In remission'>In remission</option>
            </select>
            <br />
            <label>Occurrence</label>
            <select>
                <option value='Recurrence'>Recurrence</option>
            </select>
            <br />
            <label>Diagnostic certainty</label>
            <select>
                <option value='Suspected'>Suspected</option>
                <option value='Probable'>Probable</option>
                <option value='Confirmed'>Confirmed</option>
            </select>
            <br />
            <h2>protocol</h2>
            <label>Last updated</label>
            <input  type='datetime-local' onChange={e => setProtocol_last_updated(e.target.value)}></input>
            <br />
            <h1>Clinical impression</h1>
            <h2>data</h2>
            <label>Impression</label>
            <input  onChange={e => setClinical_impression(e.target.value)}></input>
            <br />
            </div>
        </>
    )
}
export default FunctionalStatus;
