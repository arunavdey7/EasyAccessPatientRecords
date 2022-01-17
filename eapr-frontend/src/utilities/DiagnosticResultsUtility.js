export const addDiagnosticResult = async (data) => {
    console.log('DATA',data)
    var requestOptions = {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(data),
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/add_dignostics_results", requestOptions)
    const {
        success
    } = await response.json()

    if(success === true)
    {
        return true
    }
    else
    {
        return false
    }
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
    const response = await fetch("/api/get_dignosis_results_for_doctor"+patientId, requestOptions)
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
    const response = await fetch("/api/get_dignosis_results_for_patient", requestOptions)
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
    const response = await fetch("/api/get_dognostics_by_id_for_doctor/"+diagnostic_id, requestOptions)
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

export const getDiagnosticResultByIdForPatient = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("/api/get_dignosis_results_for_patient", requestOptions)
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


