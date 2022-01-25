import React,{useState,useEffect} from 'react' 
import {getMedicationOrderByIdForDoctor,getMedicationOrderByIdForPatient} from '../../utilities/PrescriptionUtility'
import './styles.css'
const ShowPrescription = () => {
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    var medicationOrderId = localStorage.getItem('medicationOrderId')
    const sendRequest1 = async () => {
        var result = await getMedicationOrderByIdForDoctor(medicationOrderId)
        setData(result)
    }
    const sendRequest2 = async () => {
        var result = await getMedicationOrderByIdForPatient(medicationOrderId)
        setData(result)
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

    const handlePrescriptionSave = () => {
        window.print()
    }

    return(
        <div className='prescription_container'>
        <h1 className='prescription_heading'>Prescription</h1>
        <h2>Medication Order</h2>
        <h4>Order</h4>
        <label>Medication Item <span className='ans' style={{fontWeight:"bold"}}>{data["medicationItem"]}</span></label>
        
        <h4>Preparation</h4>
        <label>Substance name <span className='ans' style={{fontWeight:"bold"}}>{data["substance_name"]}</span></label>
        
        <br/>
        <label>Form <span className='ans' style={{fontWeight:"bold"}}>{data["form"]}</span></label>
        
        <br/>
        <label>Strength <span className='ans' style={{fontWeight:"bold"}}>{data["strength"]}</span></label>
        
        <br/>
        <label>Strength unit <span className='ans' style={{fontWeight:"bold"}}>{data["strengthUnit"]}</span></label>
        
        <br/>
        <h4>Dilutent</h4>
        <label>Dilutent amount</label>
        
        <br/>
        <label>Dilutent unit</label>
        
        <br/>
        <h4>Ingredient</h4>
        <h4>Ingredient substance</h4>
        <label>Substance name</label>
        
        <br/>
        <label>Form</label>
       
        <br/>
        <label>Category</label>
    
        <br/>
        <label>Ingredient amount</label>
       
        <br/>
        <label>Ingredient amount unit</label>
        
        <br/>
        <label>Role</label>
        
        <label>or</label>
       
        <br/>
        <label>Description</label>
        
        <br/>
        <label>Route</label>
        
        <br/>
        <label>Dosage instructions</label>
        
        <br/>
        <h4>Dose Direction</h4>
        <h4>Dose pattern</h4>
        <label>Dose</label>
        
        <br/>
        <label>Lower</label>
        
        <br/>
        <label>Upper</label>
        
        <br/>
        <label>Dose Unit</label>
        
        <br/>
        <h4>Dose timing</h4>
        <label>Frequency</label>
        
        <br/>
        <label>Lower</label>
        
        <br/>
        <label>Upper</label>
        
        <br/>
        <label>Interval</label>
        
        <br/>
        <label>Specific time</label>
        
        <br/>
        <label>Named time event</label>
        
        <br/>
        <label>Exact timing critical</label>
        
        <br/>
        <label>As required</label>
        
        <br/>
        <label>As required criterion</label>
        
        <br/>
        <label>Infusion administration rate</label>
        <br/>
        <label>Direction duration</label>
        
        <br/>
        <h4>Direction repetetion</h4>
        <label>Repetetion Interval</label>
        
        <br/>
        <label>Specific Date</label>
        
        <br/>
        <label>Specific day of the week</label>
        
        <br/>
        <label>Specific day of the month</label>
        
        <br/>
        <h4>Specific event</h4>
        <label>Event name</label>
        
        <br/>
        <label>Start interval</label>
        
        <br/>
        <h4>Medication Safety</h4>
        <h4>Max dose per period</h4>
        <label>Maximum amount</label>
        
        <br/>
        <label>Maximum amount dose unit</label>
        
        <br/>
        <label>Allowed period</label>
        
        <br/>
        <label>Override reason</label>
        
        <br/>
        <label>Additional Instructions</label>
        
        <br/>
        <label>Reason</label>
        
        <br/>
        <h4>Order details</h4>
        <h4>Course Summary</h4>
        <label>Status</label>
        
        <br/>
        <label>Date discontinued</label>
        
        <br/>
        <label>Date written</label>
        
        <br/>
        <h4>Authorization details</h4>
        <label>Number of repeats allowed</label>
        
        <br/>
        <label>Validity period</label>
        
        <br/>
        <h4>Dispense Directions</h4>
        <label>Dispense instructions</label>
        
        <br/>
        <h4>Dispense amount</h4>
        <label>Amount description</label>
        
        <br/>
        <label>Amount</label>
        
        <br/>
        <label>Units</label>
        
        <br/>
        <label>Duration of supply</label>
        
        <br/>
        <label>Comment</label>
        
        <br/>
        <label>Identifier</label>
        
        <br/>
        <button className='bb' onClick={handlePrescriptionSave}>Save Prescription</button>
    </div>
    )
}
export default ShowPrescription;