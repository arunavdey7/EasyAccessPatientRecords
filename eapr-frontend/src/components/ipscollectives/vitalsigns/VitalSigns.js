import React, { useEffect, useState } from 'react'

const VitalSigns = () => {
    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    useEffect(() => {
        const sendRequest1 = async () => {
            var result = await getVitalSignsForDoctor(patientId)
            setData(result)
        }
        const sendRequest2 = async () => {
            var result = await getVitalSignsForPatient()
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
            No Vital Signs record found.
        </h1>)
    return(
        <div>
            {
                data.map((info) => <VitalSignsItem {...info}/>)
            }
        </div>
    )
}
export default VitalSigns;