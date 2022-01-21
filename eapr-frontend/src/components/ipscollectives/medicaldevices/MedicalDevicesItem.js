import React from 'react' 

const MedicalDevicesItem = ({
    device_name,
    id
}) => {
    const handleClick = () => {
        localStorage.setItem('med_device_id',id)
        window.location.href = '/showmedicaldevice'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>{device_name}</h3>
            </div>
        </div>
    )
}
export default MedicalDevicesItem;