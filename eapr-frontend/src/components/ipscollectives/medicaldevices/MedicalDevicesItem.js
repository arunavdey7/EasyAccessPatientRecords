import React from 'react' 
import MedicalDevices from './MedicalDevices'

import './medSummaryItemStyles.css'
const MedicalDevicesItem = ({
    orderId,
    medicationName
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>Medical Devices</h3>
            </div>
        </div>
    )
}
export default MedicalDevicesItem;