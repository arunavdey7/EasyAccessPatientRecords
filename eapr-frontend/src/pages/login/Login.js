import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'
import {login} from '../../utilities/LoginUtility'

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async () =>
    {
        var result = await login(email,password)
        if(result)
        {
            toast("Login Successfull !")
            localStorage.getItem('user')
        }
        else
        {
            console.log("Login Failure")
            toast("Login Failed !")
        }
            
    }
    const handleSignup = () =>
    {
        // Not required for now.
    }
    return(
        <>
        <div className="header_background"></div>
        <div className="container-x">
            <div className="container-y">
                    <div className="chooser_container">
                        <h3>Choose a role:</h3>
                    </div>
                    <div className="role_container">
                        <div className="role_card">
                            <img></img>
                        </div>
                        <div className="role_card"></div>
                        <div className="role_card"></div>
                    </div>
                   <div className="inner-container-y">
                       
                        <div className="login_form_container">
                            <div>
                                <label for='email'>Email</label>
                            </div>  
                            <div>
                                <input className='input_fields' onChange={e => setEmail(e.target.value)} type='email' name="email"/>
                            </div>
                            <div>
                                <label for='password'>Password</label>
                            </div>
                            <div>
                                <input className='input_fields' onChange={e => setPassword(e.target.value)} type='password' name='password'/>
                            </div>
                            <div className="login_btn_container">
                                <div>
                                    <button className="login_btn">Login</button>
                                </div>
                            </div>
                        </div>          
                   </div>
            </div>
        </div> 
       
        </>
    )
}

export default Login;