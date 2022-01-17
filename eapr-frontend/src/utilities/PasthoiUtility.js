export const addPastHistory = async (data) => {
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
    const response = await fetch("/api/createpasthistoryofpatient", requestOptions)
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

export const getAllPastHistoryForDoctor = async (patientId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/getpasthistoryofdoctor/"+patientId, requestOptions)
    const {
        history
    } = await response.json()
    
    if(history !== undefined)
    {
        localStorage.setItem('all_past_hoi',JSON.stringify(history["problem list"]))
        return history["problem list"]
    }
    else
    {
        return []
    }
}

export const getAllPastHistoryForPatient = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/getpasthistoryofpatient", requestOptions)
    const {
        history
    } = await response.json()
    
    if(history !== undefined)
    {
        localStorage.setItem('all_past_hoi',JSON.stringify(history["problem list"]))
        return history["problem list"]
    }
    else
    {
        return []
    }
}



