import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'
import {login} from '../../utilities/LoginUtility'

const Registration = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [role, setRole] = useState("No role selected")
    

    const handleRole = (event) => {
        var selected = event.target.id
        if(selected === 'role_doctor')
        {
            setRole('Doctor')
        }
        else if(selected === 'role_patient')
        {
            setRole('Patient')
        }
            
    }
    console.log(role)
    const handleSignup = () =>
    {
        // Not required for now.
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
                                <p>Selected Role: </p><h2>{role}</h2>
                            </div>
                            {role === 'Doctor' ?
                            <>
                            <div className='credential_labels'>
                                <label for='email'>Name</label>
                            </div>  
                            <div>
                                <input className='input_fields' onChange={e => setEmail(e.target.value)} type='email' name="email"/>
                            </div>
                            <div className='credential_labels'>
                                <label for='email'>Email</label>
                            </div>  
                            <div>
                                <input className='input_fields' onChange={e => setEmail(e.target.value)} type='email' name="email"/>
                            </div>
                            <div className='credential_labels'>
                                <label for='password'>Password</label>
                            </div>
                            <div>
                                <input className='input_fields' onChange={e => setPassword(e.target.value)} type='password' name='password'/>
                            </div>
                            <div className='credential_labels'>
                                <label for='specialization'>Specialization</label>
                            </div>  
                            <div>
                                <input className='input_fields' onChange={e => setSpecialization(e.target.value)} type='text' name='specialization'/>
                            </div>
                            </>
                            : 
                            <>
                            <div className='credential_labels'>
                                <label for='email'>Name</label>
                            </div>  
                            <div>
                                <input className='input_fields' onChange={e => setEmail(e.target.value)} type='email' name="email"/>
                            </div>
                            <div className='credential_labels'>
                                <label for='email'>Age</label>
                            </div>  
                            <div>
                                <input type='number' className='input_fields' onChange={e => setEmail(e.target.value)} type='email' name="email"/>
                            </div>
                            <div className='credential_labels'>
                                <label for='email'>Address</label>
                            </div>  
                            <div>
                                <textarea type='a' className='input_fields' onChange={e => setEmail(e.target.value)}  name="address"/>
                            </div>
                            
                            <div className='credential_labels'>
                                <label for='email'>Email</label>
                            </div>  
                            <div>
                                <input className='input_fields' onChange={e => setEmail(e.target.value)} type='email' name="email"/>
                            </div>
                            <div className='credential_labels'>
                                <label for='password'>Password</label>
                            </div>
                            <div>
                                <input className='input_fields' onChange={e => setPassword(e.target.value)} type='password' name='password'/>
                            </div>
                            <div className='credential_labels'>
                                <label for='specialization'>Specialization</label>
                            </div>  
                            <div>
                                <input className='input_fields' onChange={e => setSpecialization(e.target.value)} type='text' name='specialization'/>
                            </div>
                            </>
                            }           
                            <div className="login_btn_container">
                                <div>
                                    <button className="login_btn">Register
                                    
                                    </button>
                                </div>
                            </div>
                        </div>          
                   </div>
            </div>
        </div> 
       
        </>
    )
}

export default Registration;