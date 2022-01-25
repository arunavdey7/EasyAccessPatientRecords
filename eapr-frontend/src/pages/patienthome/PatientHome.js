import React,{useState} from 'react' 
import IpsContainer from '../../components/ipscontainer/IpsContainer'
import Prescriptions from '../../components/prescriptioncollectives/prescriptions/Prescriptions'
import { getPatientInfo } from '../../utilities/PatientUtility'
import {logout} from '../../utilities/LogoutUtility'
import './styles.css'
const PatientHome = () => {
    if(localStorage.getItem('token') === null)
        return(
            <h1>You need to be logged in first</h1>
        )

    var {
        name,
        gender,
        email,
        age,
        contact,
        address

    } = JSON.parse(localStorage.getItem('patient_info'))
    
    return(
        <div className='patient_home_container'>
            <div className='patient_home_header'>
                <h1 className='he' style={{textAlign:"center"}}>Patient Dashboard</h1>
            </div>
            <div className='basic_patient_info'>
                <div className='basic_patient_info_box'>
                    <h2 style={{textAlign:"center"}}>Patient's basic info:</h2>
                    <h3 className='info_box_headings'>Patient Name:
                        <span className='info_box_values'>{name}</span>
                    </h3>
                    <h3 className='info_box_headings'>Patient Age:
                        <span className='info_box_values'>{age}</span>
                    </h3>
                    <h3 className='info_box_headings'>Patient Contact:
                        <span className='info_box_values'>{contact}</span>
                    </h3>
                    <h3 className='info_box_headings'>Patient Address:
                        <span className='info_box_values'>{address}</span>
                    </h3>
                </div>
            </div>
            <div className='patient_content_container'>
                <div className='patient_home_section_1'>
                    <h2 style={{textAlign:"center"}}>Previous Prescriptions</h2>
                    <Prescriptions/>
                </div>
                <div className='patient_home_section_2'>
                    <h2 style={{textAlign:"center"}}>Previous Medical Record</h2>
                    <IpsContainer/>
                </div>
            </div>
            <button className = 'lgbtn' onClick={logout}>Logout</button>
        </div>
    )
}
export default PatientHome;