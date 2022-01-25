import React from 'react' 
import { logout } from '../../utilities/LogoutUtility'
import './styles.css'
const AlreadyLoggedIn = () => {

    const logoutHandler = () => {
        logout()
        window.location.href = '/'
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>You are already logged in, do you want to logout?</h1>
            <div className='btn_container'>
                <div className='btn_inner_container'>
                    <button onClick={logoutHandler} className='logout_btn_al'>Logout</button>
                </div>
            </div>
        </div>
    )
}
export default AlreadyLoggedIn;