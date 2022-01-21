export const addHistoryOfProcedures = async (data) => {
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
    const response = await fetch("/api/addHistoryOfProcedure", requestOptions)
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

export const getAllHistoryOfProceduresForDoctor = async (patientId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/getHistoryOfProcedureforDoctor/"+patientId, requestOptions)
    const {
        history_of_procedure
    } = await response.json()
    
    if(history_of_procedure !== undefined)
    {
        return history_of_procedure["procedures"]
    }
    else
    {
        return []
    }
}

export const getAllHistoryOfProceduresForPatient = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/getHistoryOfProcedureforPatient", requestOptions)
    const {
        history_of_procedure
    } = await response.json()
    
    if(history_of_procedure !== undefined)
    {
        return history_of_procedure["procedures"]
    }
    else
    {
        return []
    }
}



