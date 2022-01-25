import React,{useState,useEffect} from 'react' 
import { getAllAllergiesAndIntolerancesForDoctor,getAllAllergiesAndIntolerancesForPatient } from '../../../utilities/AllergiesAndIntolerancesUtility';
import AllergiesItem from './AllergiesItem';

const Allergies = () => {
    // Load All medication Statements
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    useEffect(() => {
        const sendRequest1 = async () => {
            var result = await getAllAllergiesAndIntolerancesForDoctor(patientId)
            setData(result)
        }
        const sendRequest2 = async () => {
            var result = await getAllAllergiesAndIntolerancesForPatient()
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
            No Allergies and Intolerance record found.
        </h1>)
    return(
        <div>
            {
                data.map((info) => <AllergiesItem {...info}/>)
            }
        </div>
    )
}
export default Allergies;