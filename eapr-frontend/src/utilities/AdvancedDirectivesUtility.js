export const addAdvancedDirectives = async (data) => {
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
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/addadvanceddirectives", requestOptions)
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

export const getAllAdvancedDirectivesForDoctor = async (patientId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/getadvanceddirectivesbydoctor/"+patientId, requestOptions)
    const {
        history
    } = await response.json()
    
    if(history !== undefined)
    {
        localStorage.setItem('all_adv_dir',JSON.stringify(history["advance_directive"]))
        return history["advance_directive"]
    }
    else
    {
        return []
    }
}

export const getAllAdvancedDirectivesForPatient = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/getadvanceddirectivesbypatient", requestOptions)
    const {
        history
    } = await response.json()
    
    if(history !== undefined)
    {
        localStorage.setItem('all_adv_dir',JSON.stringify(history["advance_directive"]))
        return history["advance_directive"]
    }
    else
    {
        return []
    }
}



