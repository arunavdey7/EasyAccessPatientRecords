export const addPrescription = async (data) => {
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
    const response = await fetch("/api/addPrescription", requestOptions)
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

export const getAllPrescriptions = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/getAllPrescriptionsForPatient", requestOptions)
    const {
        allPrescriptions
    } = await response.json()

    if(allPrescriptions !== undefined)
    {
        return allPrescriptions
    }
    else
    {
        return []
    }
}

export const getAllPrescriptionsForDoctor = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/getAllPrescriptionsForDoctor", requestOptions)
    const {
        allPrescriptions
    } = await response.json()

    if(allPrescriptions !== undefined)
    {
        return allPrescriptions
    }
    else
    {
        return []
    }
}

export const getPrescription = async (orderId) => {
    var requestData = {
        order_id:orderId
    }
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        body: JSON.stringify(requestData),
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/ips/medicationsummary/getmedicationstatementforpatient", requestOptions)
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