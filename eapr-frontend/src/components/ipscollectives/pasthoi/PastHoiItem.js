import React from 'react' 
import PastHoi from './PastHoi'

import './medSummaryItemStyles.css'
const PastHoiItem = ({
    orderId,
    medicationName
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>Past History of Illnesses</h3>
            </div>
        </div>
    )
}
export default PastHoiItem;