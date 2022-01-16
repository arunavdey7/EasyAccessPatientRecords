import React from 'react' 
import './styles.css'
const PrescriptionItem = ({
    doctorName,
    prescriptionId
}) => {

    const handleClick = () => {
        window.location.href = '/'
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