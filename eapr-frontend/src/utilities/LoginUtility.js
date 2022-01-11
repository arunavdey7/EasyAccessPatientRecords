export const login = async (email,password) => {

    const credentials = {
        email,
        password
    }
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(credentials),
        mode:'cors',
        headers:{
            'Content-type':'Application/json'
        }
      }
      
    const response = await fetch("/api/login/", requestOptions)
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