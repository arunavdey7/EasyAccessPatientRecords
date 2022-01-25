import React from 'react' 
import './styles.css'
const PrescriptionItem = ({
    doctorName,
    prescriptionId,
    date_written
}) => {

    const handleClick = () => {
        localStorage.setItem('prescription_id',prescriptionId)
        window.location.href = '/medicationorders'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div>
                <h3>{doctorName}
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span className='values pres'>{date_written}</span>
                </h3>
            </div>
        </div>
    )
}
export default PrescriptionItem