import React from 'react' 
import './HistoryofProceduresItemStyles.css'
const HistoryofProceduresItem = ({
   procedure_name,
   body_site
}) => {
    const handleClick = () => {
        window.location.href = '/showmedicationstatement'
    }
    return(
        <div className='hop_container'>
            <div className='hop_name_container'>
                <h3>Procedure name: {procedure_name}</h3>
                <p>Body site: {body_site}</p>
            </div>
        </div>
    )
}
export default HistoryofProceduresItem;