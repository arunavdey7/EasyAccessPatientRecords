import React from 'react' 
import MedicationSummary from './MedicationSummary'

import './medSummaryItemStyles.css'
const MedSummaryItem = ({
    orderId,
    medicationName
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>Immunizations</h3>
            </div>
        </div>
    )
}
export default MedSummaryItem;