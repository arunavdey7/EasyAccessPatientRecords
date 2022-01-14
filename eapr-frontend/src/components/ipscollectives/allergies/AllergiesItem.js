import React from 'react' 
import Allergies from './Allergies'

import './medSummaryItemStyles.css'
const AllergiesItem = ({
    orderId,
    medicationName
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>Allergies and Intolerances</h3>
            </div>
        </div>
    )
}
export default AllergiesItem;