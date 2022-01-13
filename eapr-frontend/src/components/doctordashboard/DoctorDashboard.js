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
        <>
        <div className='container-x'>
            <div className='header-pic'></div>
            <div className='content'>
                <div className='main_heading'>
                    <h1>Enter Patient's UID</h1>
                </div>
                <div className='input_field_container'>
                    <div>
                        <input type='number' className='patientUid'></input>
                    </div>
                </div>
                <div className='btn_outer_container'>
                    <div onClick={handleClick} className='search_btn'>
                        <div className='inner_btn_container'>
                        <div>Search</div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
         </>
    )
}
export default DoctorDashboard;