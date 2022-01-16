export const addMedicationStatement = async (data) => {
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
    const response = await fetch("/api/ips/medicationsummary/addmedicationstatement", requestOptions)
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

export const getAllMedicationStatements = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/ips/medicationsummary/getallmedicationstatementsforpatient", requestOptions)
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

export const getMedicationStatement = async (orderId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/ips/medicationsummary/getmedicationstatementforpatient/"+orderId, requestOptions)
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

export const getMedicationStatementForDoctor = async (orderId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/ips/medicationsummary/getmedicationstatementfordoctor/"+orderId, requestOptions)
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

export const getAllMedicationStatementsForDoctor = async (patientId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/ips/medicationsummary/getallmedicationstatementsfordoctor/"+patientId, requestOptions)
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