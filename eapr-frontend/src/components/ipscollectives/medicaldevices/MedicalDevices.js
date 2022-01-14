import React from 'react' 
import MedicalDevicesItem from './MedicalDevicesItem';

const MedicalDevices = () => {
    // Load All medication Statements
    return(
        <div>
            <MedicalDevicesItem/>
            <MedicalDevicesItem/>
            <MedicalDevicesItem/>
        </div>
    )
}
export default MedicalDevices;