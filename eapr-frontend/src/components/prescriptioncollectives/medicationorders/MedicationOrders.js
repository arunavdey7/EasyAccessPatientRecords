import React,{useState,useEffect} from 'react' 
import MedicationOrderItem from '../medicationorderitem/MedicationOrderItem';
import {getPrescriptionByIdForDoctor,getPrescriptionByIdForPatient} from '../../../utilities/PrescriptionUtility'
const MedicationOrders = () => {

    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var prescriptionId = localStorage.getItem('prescription_id')
    useEffect(() => {
        const sendRequest1 = async () => {
            var result = await getPrescriptionByIdForDoctor(prescriptionId)
            setData(result)
        }
        const sendRequest2 = async () => {
            var result = await getPrescriptionByIdForPatient(prescriptionId)
            setData(result)
        }
        if(role === 'Doctor')
        {
            sendRequest1()
        }
        else if(role === 'Patient')
        {
            sendRequest2()
        }
    }, [])
    if(data.length === 0)
        return(<h1 style={{textAlign:"center"}}>
            No Medication Orders record found.
        </h1>)
    return(
        <>
        <h1 style={{textAlign:"center"}}>Medication Orders in this Prescription:</h1>
        <div>
            {
                data.map((info) => <MedicationOrderItem {...info}/>)
            }
        </div>
        </>
    )
}
export default MedicationOrders;