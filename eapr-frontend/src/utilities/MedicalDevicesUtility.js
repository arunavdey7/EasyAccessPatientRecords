export const addMedicalDevice = async (data) => {
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
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/addMedicalDevice", requestOptions)
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

export const getAllMedicalDevicesForDoctor = async (patientId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/getMedicalDeviceForDoctor/"+patientId, requestOptions)
    const {
        medical_devices
    } = await response.json()
    
    if(medical_devices !== undefined)
    {
        return medical_devices
    }
    else
    {
        return []
    }
}

export const getAllMedicalDevicesForPatient = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/getMedicalDeviceForPatient", requestOptions)
    const {
        medical_devices
    } = await response.json()
    
    if(medical_devices !== undefined)
    {
        return medical_devices
    }
    else
    {
        return []
    }
}
