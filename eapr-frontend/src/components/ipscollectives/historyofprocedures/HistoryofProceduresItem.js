import React from 'react' 
import HistoryofProcedures from './HistoryofProcedures'

import './medSummaryItemStyles.css'
const HistoryofProceduresItem = ({
    orderId,
    medicationName
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>History of Procedures</h3>
            </div>
        </div>
    )
}
export default HistoryofProceduresItem;