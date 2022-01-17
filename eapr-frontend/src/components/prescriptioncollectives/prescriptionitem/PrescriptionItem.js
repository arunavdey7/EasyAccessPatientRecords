import React from 'react' 
import './styles.css'
const PrescriptionItem = ({
    doctorName,
    prescriptionId
}) => {

    const handleClick = () => {
        localStorage.setItem('prescription_id',prescriptionId)
        window.location.href = '/medicationorders'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div>
                <h3>{doctorName}</h3>
            </div>
        </div>
    )
}
export default PrescriptionItem