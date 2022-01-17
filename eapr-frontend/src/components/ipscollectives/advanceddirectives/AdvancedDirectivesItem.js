import React from 'react' 
import AdvancedDirectives from './AdvancedDirectives'

const AdvancedDirectivesItem = ({
    id,
    carer_awareness
}) => {
    const handleClick = () => {
        localStorage.setItem('adv_directive_id',id)
        window.location.href = '/showadvancedirectives'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>{carer_awareness}</h3>
            </div>
        </div>
    )
}
export default AdvancedDirectivesItem;