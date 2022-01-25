export const loginDoctor = async (email,password) => {

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
      
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/doctorlogin", requestOptions)
    const {
        success,
        token,
        doctor_info

    } = await response.json()

    if(success === true)
    {
        localStorage.setItem('token',token)
        localStorage.setItem('user', doctor_info)
        return true
    }
   return false
}

export const loginPatient = async (email,password) => {

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
      
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/patientlogin", requestOptions)
    const {
        success,
        token,
        patient_info

    } = await response.json()

    if(success === true)
    {
        localStorage.setItem('token',token)
        localStorage.setItem('patient_info', JSON.stringify(patient_info))
        return true
    }
    return false
}

export const loginAdmin = async (email,password) => {

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
      
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/adminlogin", requestOptions)
    const {
        success,
        token

    } = await response.json()

    if(success === true)
    {
        localStorage.setItem('token',token)
        return true
    }
    return false
}