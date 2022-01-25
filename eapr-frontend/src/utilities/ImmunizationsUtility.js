export const addImmunization = async (data) => {
    var requestOptions = {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(data),
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/addImmunizations", requestOptions)
    const {
        success
    } = await response.json()

    if(success === true)
    {
        return true
    }
    return false
}

export const getAllImmunizationsForDoctor = async (patientId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/getImmunizationsForDoctor/"+patientId, requestOptions)
    const {
        immunization
    } = await response.json()
    
    if(immunization !== undefined)
    {
        return immunization["immunizations"]
    }
    return []
}

export const getAllImmunizationsForPatient = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
      const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/getImmunizationsForPatient", requestOptions)
      const {
          immunization
      } = await response.json()
      
      if(immunization !== undefined)
      {
          return immunization["immunizations"]
      }
      return []
}
