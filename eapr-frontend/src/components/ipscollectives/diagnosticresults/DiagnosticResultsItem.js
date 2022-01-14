import React from 'react' 
import DiagnosticResults from './DiagnosticResults'

import './medSummaryItemStyles.css'
const DiagnosticResultsItem = ({
    orderId,
    medicationName
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>Diagnostic Results</h3>
            </div>
        </div>
    )
}
export default DiagnosticResultsItem;