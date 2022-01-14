import React from 'react' 
import FunctionalStatus from './FunctionalStatus'

import './medSummaryItemStyles.css'
const FunctionalStatusItem = ({
    orderId,
    medicationName
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>Functional Status</h3>
            </div>
        </div>
    )
}
export default FunctionalStatusItem;