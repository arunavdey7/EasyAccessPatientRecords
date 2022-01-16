export const addAllergiesAndIntolerances = async (data) => {
    var requestData = data
    var requestOptions = {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(requestData),
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/add_allergies_and_intolerances", requestOptions)
    const {
        success
    } = await response.json()

    if(success)
    {
        return true
    }
    else
    {
        return false
    }
}

export const getAllAllergiesAndIntolerancesForDoctor = async (patientId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/get_all_allergies_and_intolerances_for_patient"+patientId, requestOptions)
    const {
        medication_summary,
        success
    } = await response.json()
    
    if(success)
    {
        return medication_summary["medication_statements"]
    }
    else
    {
        return []
    }
}

export const getAllAllergiesAndIntolerancesForPatient = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/get_all_allergies_and_intolerances_for_patient/api/get_all_allergies_and_intolerances_for_patient", requestOptions)
    const {
        medication_summary,
        success
    } = await response.json()
    
    if(success)
    {
        return medication_summary["medication_statements"]
    }
    else
    {
        return []
    }
}

export const getAllergyAndIntoleranceByIdForPatient = async (orderId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/get_allergy_by_id_for_doctor"+orderId, requestOptions)
    const {
        success,
        data
    } = await response.json()

    if(success)
    {
        return data
    }
    else
    {
        return null
    }
}

export const getAllergyAndIntoleranceByIdForDoctor = async (orderId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/get_allergy_by_id_for_doctor"+orderId, requestOptions)
    const {
        success,
        data
    } = await response.json()

    if(success)
    {
        return data
    }
    else
    {
        return null
    }
}

