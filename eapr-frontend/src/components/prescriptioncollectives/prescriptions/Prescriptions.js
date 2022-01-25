import React,{useEffect, useState} from 'react' 
import { getAllPrescriptions, getAllPrescriptionsForDoctor, getPrescription } from '../../../utilities/PrescriptionUtility'
import PrescriptionItem from '../prescriptionitem/PrescriptionItem'
import './styles.css'
const Prescriptions = ({
    
}) => {

    const role = JSON.parse(localStorage.getItem('sessionData')).role
    const [data, setData] = useState([])
    useEffect(() => {
        if(role === 'Doctor')
            sendRequest2()
        else if(role === 'Patient')
            sendRequest1()
    }, [])

    
    const sendRequest1 = async () => {
        var result = await getAllPrescriptions()
        setData(result)
    }
    const sendRequest2 = async () => {
        var result = await getAllPrescriptionsForDoctor()
        setData(result)
    }
    console.log(data)
    if(data === undefined)
        return(
            <h3 style={{textAlign:"center"}}>No previous prescriptions found.</h3>
        )
    return(
        <div>
            {
                data.map((info) => <PrescriptionItem {...info}/>)
            }
        </div>
    )
}
export default Prescriptions