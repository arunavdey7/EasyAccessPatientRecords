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
    const response = await fetch("/api/endpoint/", requestOptions)
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

export const getAllMedicationStatements = (patientId) => {
    console.log('todo')
}

export const getMedicationStatement = (patientId,medicationStatementId) => {
    console.log('todo')
}