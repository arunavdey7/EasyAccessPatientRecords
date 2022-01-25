export const addDiagnosticResult = async (data) => {
    var requestOptions = {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(data),
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/add_dignostics_results", requestOptions)
    const {
        success
    } = await response.json()

    if(success === true)
    {
        return true
    }
    return false
}

export const getAllDiagnosticResultsForDoctor = async (patientId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/get_dignosis_results_for_doctor/"+patientId, requestOptions)
    const {
        dignostic_test_result
    } = await response.json()
    
    if(dignostic_test_result !== undefined)
    {
        localStorage.setItem('all_diag_results',JSON.stringify(dignostic_test_result))
        return dignostic_test_result
    }
    else
    {
        return []
    }
}

export const getAllDiagnosticResultsForPatient = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/get_dignosis_results_for_patient", requestOptions)
    const {
        dignostic_test_result
    } = await response.json()
    
    if(dignostic_test_result !== undefined)
    {
        localStorage.setItem('all_diag_results',JSON.stringify(dignostic_test_result))
        return dignostic_test_result
    }
    else
    {
        return []
    }
}

export const getDiagnosticResultByIdForDoctor = async (patientId,diagnostic_id) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/get_dognostics_by_id_for_doctor/"+diagnostic_id, requestOptions)
    const {
        dignostic
    } = await response.json()
    
    if(dignostic !== undefined)
    {
        return dignostic
    }
    else
    {
        return null
    }
}

export const getDiagnosticResultByIdForPatient = async (diagnosticId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/get_dognostics_by_id_for_patient/"+diagnosticId, requestOptions)
    const {
        dignostic
    } = await response.json()
    
    if(dignostic !== undefined)
    {
        return dignostic
    }
    else
    {
        return null
    }
}


