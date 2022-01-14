import React from 'react' 
import AdvancedDirectives from './AdvancedDirectives'

import './medSummaryItemStyles.css'
const AdvancedDirectivesItem = ({
    orderId,
    medicationName
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>Advanced Directives</h3>
            </div>
        </div>
    )
}
export default AdvancedDirectivesItem;