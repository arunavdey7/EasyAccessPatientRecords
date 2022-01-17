export const addVitalSigns = async (data) => {
    var requestOptions = {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(data),
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/add_vital_signs", requestOptions)
    const {
        success
    } = await response.json()

    if(success === true)
    {
        return true
    }
    return false
}

export const getVitalSignsForDoctor = async (patientId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/get_vital_signs_for_doctor/"+patientId, requestOptions)
    const {
        data
    } = await response.json()
    
    if(data !== undefined)
    {
        return data
    }
    else
    {
        return null
    }
}

export const getVitalSignsForPatient = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/get_vital_signs_for_patient", requestOptions)
    const {
        data
    } = await response.json()
    
    if(data !== undefined)
    {
        return data
    }
    else
    {
        return null
    }
}
