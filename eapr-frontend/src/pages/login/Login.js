import React,{useState, useContext} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SessionContext from "../../utilities/SessionContext";
import './styles.css'
import {loginAdmin, loginDoctor, loginPatient} from '../../utilities/LoginUtility'

const Login = ({
    setSessionData,
    sessionData
}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role, setRole] = useState("No role selected")
    //const sessionData = useContext(SessionContext);

    const handleLogin = async () =>
    {
        var result = null;
        if(role === 'Doctor')
        {
            result = await loginDoctor(email,password)
        }
        else if(role === 'Patient')
        {
            result = await loginPatient(email,password)
        }
        else if(role === 'Admin')
        {
            result = await loginAdmin(email,password)
        } 
        if(result)
        {
            toast(role+" login sucessfull.")
            var sessionData = {
                isUserLoggedIn:true,
                role:role
            }
            localStorage.setItem('sessionData',JSON.stringify(sessionData))
            if(role === 'Doctor')
            {
                window.location.href = '/doctorsdashboard'
            }
            else if(role === 'Patient')
            {
                
                window.location.href = '/patienthome'
            }
            else if(role === 'Admin')
            {
                window.location.href = '/adminhome'
            }
        }
        else
        {
            toast(role+" login failure.")
        }   
    }
    const handleRole = (event) => {
        var selected = event.target.id
        if(selected === 'role_doctor')
            setRole('Doctor')
        else if(selected === 'role_patient')
            setRole('Patient')
        else
            setRole('Admin')
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
                        <div onClick={handleRole} id='role_admin' className="role_card"></div>
                    </div>
                   <div className="inner-container-y">
                       
                        <div className="login_form_container">
                        <div className="selected_role">
                                <p>Selected Role: </p><h2>{role}</h2>
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
                            <div className="login_btn_container">
                                <div>
                                    <button onClick={handleLogin} className="login_btn">Login</button>
                                </div>
                            </div>
                            <a href='/register'>Not Registered? Register now</a>
                        </div>          
                   </div>
            </div>
        </div> 
       
        </>
    )
}

export default Login;