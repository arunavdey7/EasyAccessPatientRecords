// Show patients he has appointment with today
// Shows patients requesting an appointment
// Doctor can select a patient
import './styles.css'
import React from 'react' 
import IpsContainer from '../ipscontainer/IpsContainer'

const DoctorDashboard = () => {
    const handleClick = () => {
        console.log('Search Button Clicked')
    }
    return(
        <div className='main_container'>
            <div className='heading_picture'>
            </div>
            <div className='search_form_container'>
                <div>
                    <h1>Enter patient's UID</
                    h1>
                </div>
                <div>
                    <input></input>
                </div>
                <div>
                    <button className='search_btn'>Search</button>
                </div>
            </div>
        </div>
    )
}
export default DoctorDashboard;