import React from 'react' 
import MedicationSummary from './MedicationSummary'

import './medSummaryItemStyles.css'
const MedSummaryItem = ({
    order_id,
    medication_item
}) => {
    const handleClick = () => {
        localStorage.setItem('currOrderId',(order_id || 0))
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                {
                    medication_item !=='' ? <h3>{medication_item}</h3> : <h3>Medication Item</h3>
                }
                
            </div>
        </div>
    )
}
export default MedSummaryItem;