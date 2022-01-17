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

// A prescription is a collection of Medical Orders
export const getPrescriptionByIdForDoctor = async (prescriptionId) => {
    
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/getPrescriptionByIdForDoctor/"+prescriptionId, requestOptions)
    const {
        Prescription
    } = await response.json()

    if(Prescription !== undefined)
    {
        return Prescription
    }
    else
    {
        return []
    }
}

export const getPrescriptionByIdForPatient = async (prescriptionId) => {
    
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/getPrescriptionByIdForPatient/"+prescriptionId, requestOptions)
    const {
        Prescription
    } = await response.json()

    if(Prescription !== undefined)
    {
        return Prescription
    }
    else
    {
        return []
    }
}

export const getMedicationOrderByIdForDoctor = async (medicationOrder) => {
    
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/getMedicationOrderByIdForDoctor"+medicationOrder, requestOptions)
    const {
        Prescription
    } = await response.json()

    if(Prescription !== undefined)
    {
        return Prescription
    }
    else
    {
        return []
    }
}

export const getMedicationOrderByIdForPatient = async (medicationOrder) => {
    
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/getMedicationOrderByIdForPatient/"+medicationOrder, requestOptions)
    const data = await response.json()

    if(data !== undefined)
    {
        return data
    }
    else
    {
        return null
    }
}



