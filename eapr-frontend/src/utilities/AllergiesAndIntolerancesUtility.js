export const addAllergiesAndIntolerances = async (data) => {
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
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/add_allergies_and_intolerances", requestOptions)
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

export const getAllAllergiesAndIntolerancesForDoctor = async (patientId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/get_all_allergies_and_intolerances_for_doctor/"+patientId, requestOptions)
    const {
        all_allergies_and_intolerances
    } = await response.json()
    
    if(all_allergies_and_intolerances !== undefined)
    {
        return all_allergies_and_intolerances["allergy_list"]
    }
    else
    {
        return []
    }
}

export const getAllAllergiesAndIntolerancesForPatient = async () => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/get_all_allergies_and_intolerances_for_patient", requestOptions)
    const {
        all_allergies_and_intolerances
    } = await response.json()
    
    if(all_allergies_and_intolerances !== undefined)
    {
        return all_allergies_and_intolerances["allergy_list"]
    }
    else
    {
        return []
    }
}

export const getAllergyAndIntoleranceByIdForPatient = async (allergyId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/get_allergy_by_id_for_patient/"+allergyId, requestOptions)
    const {
        allergy
    } = await response.json()

    if(allergy != undefined)
    {
        return allergy
    }
    else
    {
        return null
    }
}

export const getAllergyAndIntoleranceByIdForDoctor = async (allergyId) => {
    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
    const response = await fetch("http://testflaskapp-env.eba-xdrnw66m.us-east-2.elasticbeanstalk.com/api/get_allergy_by_id_for_doctor/"+allergyId, requestOptions)
    const {
        allergy
    } = await response.json()

    if(allergy != undefined)
    {
        return allergy
    }
    else
    {
        return null
    }
}

