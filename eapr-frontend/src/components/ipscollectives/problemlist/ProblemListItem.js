import React from 'react' 
import Problemist from './Problemist'

import './medSummaryItemStyles.css'
const ProblemistItem = ({
    orderId,
    medicationName
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>Problem List</h3>
            </div>
        </div>
    )
}
export default ProblemistItem;