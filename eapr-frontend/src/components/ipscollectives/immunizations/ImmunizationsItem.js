import React from 'react' 
import Immunizations from './Immunizations'

const ImmunizationsItem = ({
    id
}) => {
    const handleClick = () => {
        localStorage.setItem('immunization_item_id',id)
        window.location.href = '/showimmunization'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>Immunizations</h3>
            </div>
        </div>
    )
}
export default ImmunizationsItem;