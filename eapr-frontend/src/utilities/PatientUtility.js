export const getPatientInfo = async (patientEmail) => {
    
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/getPatientForDoctor?email="+patientEmail, requestOptions)
    const {
        patient,
        success
    } = await response.json()
    if(patient !== undefined)
    {
        localStorage.setItem('patient_info',JSON.stringify(patient))
        return true
    }
    return false
}


export const getPatientInfoForAdmin = async (patientEmail) => {
    
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/getPatientForAdmin?email="+patientEmail, requestOptions)
    const {
        patient,
        success
    } = await response.json()
    if(patient !== undefined)
    {
        localStorage.setItem('patient_info',JSON.stringify(patient))
        return true
    }
    return false
}