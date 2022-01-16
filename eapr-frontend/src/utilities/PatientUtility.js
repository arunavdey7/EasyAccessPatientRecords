export const getPatientInfo = async (patientEmail) => {
    
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/getPatientForDoctor?email="+patientEmail, requestOptions)
    const {
        patient
    } = await response.json()
    if(patient !== undefined || patient !== null)
    {
        localStorage.setItem('patient_info',JSON.stringify(patient))
        return true
    }
    else
    {
        return false
    }
}