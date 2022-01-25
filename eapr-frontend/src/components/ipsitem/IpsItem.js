import React from 'react' 
import { toast } from 'react-toastify'

import './styles.css'

const IpsItem = ({
    fieldName,
    gotoUrl,
    selectedIPSCollective,
    setSelectedIPSCollective
}) => {
    const handleClick = e => {
        console.log(e.target.id)
        if(localStorage.getItem('patient_info') === null)
            toast('Search for a patient first.')
        else
            window.location.href = gotoUrl
        //setSelectedIPSCollective(fieldName)
    }
    return(
        <div onClick = {handleClick} className='ips_item_container' id={gotoUrl}>
            <h1 className='text_content'>{fieldName}</h1>
        </div>
    )
}
export default IpsItem;