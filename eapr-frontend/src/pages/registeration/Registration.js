import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'
import {login} from '../../utilities/LoginUtility'
import {registerDoctor, registerPatient} from '../../utilities/RegistrationUtility'

const Registration = () => {

    const [doctorData, setDoctorData] = useState({
        role:'role_doctor',
        name:'',
        email:'',
        password:'',
        category:''
    })
    const [patientData, setPatientData] = useState({
        role:'role_patient',
        name:'',
        age:'',
        gender:'',
        email:'',
        password:'',
        contact:'',
        address:''
    })
    const [selectedRole, setSelectedRole] = useState("");
    const handleDoctorDetails = e => {
        setDoctorData({
            ...doctorData,
            [e.target.name] : e.target.value
        })
    }
    const handlePatientDetails = e => {
        setPatientData({
            ...patientData,
            [e.target.name] : e.target.value
        })
    }
    const handleRole = (event) => {
        var selected = event.target.id
        if(selected === 'role_doctor')
        {
            setSelectedRole('Doctor')
        }
        else if(selected === 'role_patient')
        {
            setSelectedRole('Patient')
        }
            
    }
    const handleSignup = async () =>
    {
        if(selectedRole === 'Doctor')
        {
            var resultDoc  = await registerDoctor(doctorData)
            if(resultDoc)
                toast("Registration of Doctor successfull")
                //window.location.href = '/'
        }
        else if(selectedRole === 'Patient')
        {
            var resultPat = await registerPatient(patientData)
            if(resultPat)
                toast("Registration of Patient successfull")
                //window.location.href = '/'
        }
    }

    return(
        <>
        <div className='header_background'></div>
        <div className="container-x">
            <div className="container-y">
                    <div className="chooser_container">
                        <h1 className="choose_heading">Choose a role:</h1>
                    </div>
                    <div className="role_container">
                        <div onClick={handleRole} id='role_doctor' className="role_card"></div>
                        <div onClick={handleRole} id='role_patient' className="role_card"></div>
                    </div>
                   <div className="inner-container-y">
                       
                        <div className="login_form_container">
                            <div className="selected_role">
                                <p>Selected Role: </p>{selectedRole === '' ?<> <h2>No role selected</h2></>:<><h2>{selectedRole}</h2></>}
                            </div>
                            {selectedRole === 'Doctor' ?
                            <>
                            <div className='credential_labels'>
                                <label for='email'>Name</label>
                            </div>  
                            <div>
                                <input value={doctorData.name || ''} className='input_fields' onChange={handleDoctorDetails} type='text' name="name"/>
                            </div>
                            <div className='credential_labels'>
                                <label for='email'>Email</label>
                            </div>  
                            <div>
                                <input value={doctorData.email || ''} className='input_fields' onChange={handleDoctorDetails} type='email' name="email"/>
                            </div>
                            <div className='credential_labels'>
                                <label for='password'>Password</label>
                            </div>
                            <div>
                                <input value={doctorData.password || ''} className='input_fields' onChange={handleDoctorDetails} type='password' name='password'/>
                            </div>
                            <div className='credential_labels'>
                                <label for='specialization'>Specialization</label>
                            </div>  
                            <div>
                                <input value={doctorData.specialization || ''} className='input_fields' onChange={handleDoctorDetails} type='text' name='specialization'/>
                            </div>
                            </>
                            : 
                            <>
                            <div className='credential_labels'>
                                <label for='email'>Name</label>
                            </div>  
                            <div>
                                <input value={patientData.name || ''} className='input_fields' onChange={handlePatientDetails} type='name' name="name"/>
                            </div>
                            <div className='credential_labels'>
                                <label for='email'>Age</label>
                            </div>  
                            <div>
                                <input value={patientData.age || ''} type='number' className='input_fields' onChange={handlePatientDetails} name="age"/>
                            </div>
                            <div className='credential_labels'>
                                <label for='email'>Address</label>
                            </div>  
                            <div>
                                <textarea value={patientData.address || ''} className='input_fields' onChange={handlePatientDetails}  name="address"/>
                            </div>
                            
                            <div className='credential_labels'>
                                <label for='email'>Email</label>
                            </div>  
                            <div>
                                <input value={patientData.email || ''} className='input_fields' onChange={handlePatientDetails} type='email' name="email"/>
                            </div>
                            <div className='credential_labels'>
                                <label for='password'>Password</label>
                            </div>
                            <div>
                                <input value={patientData.password || ''} className='input_fields' onChange={handlePatientDetails} type='password' name='password'/>
                            </div>
                            <div className='credential_labels'>
                                <label for='specialization'>Contact</label>
                            </div>  
                            <div>
                                <input value={patientData.contact || ''} className='input_fields' onChange={handlePatientDetails} type='text' name='contact'/>
                            </div>
                            </>
                            }           
                            <div className="login_btn_container">
                                <div>
                                    <button onClick = {handleSignup} className="login_btn">Register
                                    
                                    </button>
                                    
                                </div>
                               
                            </div>
                            <a href='/'>Already Registered? Login now</a>
                        </div>          
                         
                   </div>
            </div>
        </div> 
        </>
    )
}

export default Registration;