import React from 'react' 
import Allergies from './Allergies'
const AllergiesItem = ({
    allergy_id,
    substance
}) => {
    const handleClick = () => {
        localStorage.setItem('allergy_id',allergy_id)
        window.location.href = '/showallergies'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>{substance}</h3>
            </div>
        </div>
    )
}
export default AllergiesItem;