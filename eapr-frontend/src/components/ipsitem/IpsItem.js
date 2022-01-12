import React from 'react' 

import './styles.css'

const IpsItem = ({
    fieldName,
    gotoUrl
}) => {
    const handleClick = e => {
        console.log(e.target.id)
        window.location.href = '/ips'+e.target.id
        //window.print()
    }
    return(
        <div onClick = {handleClick} className='ips_item_container' id={gotoUrl}>
            <h1>{fieldName}</h1>
        </div>
    )
}
export default IpsItem;