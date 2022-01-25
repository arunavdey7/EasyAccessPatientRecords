export const addProblem = async (data) => {
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
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/addproblemlist", requestOptions)
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

export const getAllProblemsForDoctor = async (patientId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/getproblemlistbydoctor/"+patientId, requestOptions)
    const {
        history
    } = await response.json()
    
    if(history !== undefined)
    {
        localStorage.setItem('all_problems',JSON.stringify(history["problem list"]))
        return history["problem list"]
    }
    else
    {
        return []
    }
}

export const getAllProblemsForPatient = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/getproblemlistbypatient", requestOptions)
    const {
        history
    } = await response.json()
    
    if(history !== undefined)
    {
        localStorage.setItem('all_problems',JSON.stringify(history["problem list"]))
        return history["problem list"]
    }
    else
    {
        return []
    }
}



