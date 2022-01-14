import React from 'react' 
import './styles.css'
const PrescriptionItem = ({
    
}) => {

    const handleClick = () => {
        window.location.href = '/'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div>
                <h3>Prescription item</h3>
            </div>
        </div>
    )
}
export default PrescriptionItem