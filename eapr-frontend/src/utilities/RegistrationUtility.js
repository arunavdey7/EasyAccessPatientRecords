export const registerDoctor = async (requestData) => {

    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(requestData),
        mode:'cors',
        headers:{
            'Content-type':'Application/json'
        }
      }
      
    const response = await fetch("/api/doctorregister", requestOptions)
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

export const registerPatient = async (requestData) => {

    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(requestData),
        mode:'cors',
        headers:{
            'Content-type':'Application/json'
        }
      }
      
    const response = await fetch("/api/patientregister", requestOptions)
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