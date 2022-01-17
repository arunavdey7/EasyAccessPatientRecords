import React from 'react' 
import './styles.css'
const MedicationOrderItem = ({
    medId,
    medicationItem
}) => {

    const handleClick = () => {
        localStorage.setItem('medicationOrderId',medId)
        window.location.href = '/showmedicationorder'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div>
                <h3>{medicationItem}</h3>
            </div>
        </div>
    )
}
export default MedicationOrderItem