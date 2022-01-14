import React from 'react' 
import Immunizations from './Immunizations'

import './medSummaryItemStyles.css'
const ImmunizationsItem = ({
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
export default ImmunizationsItem;