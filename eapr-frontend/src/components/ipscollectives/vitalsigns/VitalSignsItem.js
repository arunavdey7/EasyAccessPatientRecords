import React from 'react' 
import VitalSigns from './VitalSigns'

import './medSummaryItemStyles.css'
const VitalSignsItem = ({
    orderId,
    medicationName
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>Vital Signs</h3>
            </div>
        </div>
    )
}
export default VitalSignsItem;