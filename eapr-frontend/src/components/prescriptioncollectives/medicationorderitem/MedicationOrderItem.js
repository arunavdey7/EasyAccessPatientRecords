import React from 'react' 
import './styles.css'
const MedicationOrderItem = ({
    
}) => {

    const handleClick = () => {
        window.location.href = '/'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div>
                <h3>Medication Order Item</h3>
            </div>
        </div>
    )
}
export default MedicationOrderItem