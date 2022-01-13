export const registerDoctor = async (requestData) => {

    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(requestData),
        mode:'cors',
        headers:{
            'Content-type':'Application/json'
        }
      }
      
    const response = await fetch("/api/register/", requestOptions)
    const {
        success,
        token,
        user
    } = await response.json()

    if(success)
    {
        localStorage.setItem('token',token)
        localStorage.setItem('user', user)
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
      
    const response = await fetch("/api/register/", requestOptions)
    const {
        success,
        token,
        user
    } = await response.json()

    if(success)
    {
        localStorage.setItem('token',token)
        localStorage.setItem('user', user)
        return true
    }
    else
    {
        return false
    }
}