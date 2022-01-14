import React from 'react' 
import Pregnancy from './Pregnancy'

import './medSummaryItemStyles.css'
const PregnancyItem = ({
    orderId,
    medicationName
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>Pregnancy</h3>
            </div>
        </div>
    )
}
export default PregnancyItem;