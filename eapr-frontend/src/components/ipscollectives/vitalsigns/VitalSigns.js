// import React from 'react' 
// import VitalSignsItem from './VitalSignsItem';

// const VitalSigns = () => {
//     // Load All medication Statements
//     return(
//         <div>
//             <VitalSignsItem/>
//             <VitalSignsItem/>
//             <VitalSignsItem/>
//         </div>
//     )
// }
// export default VitalSigns;

/*************/
import React, { useEffect, useState } from 'react'
import { getAllVitalData } from '../../../utilities/vitalUtility'


const VitalSigns = () => {
    const [vitalData, setVitalData] = useState({});
    const patientInfo = JSON.parse(localStorage.getItem('patient_info')) || {};
    const sessionData = JSON.parse(localStorage.getItem('sessionData')) || {};

    useEffect(async () => {
        const { success = true, data = {} } = await getAllVitalData(sessionData.role, patientInfo.id);

        if (success) {
            setVitalData(data);
        }
    }, []);

    const vitalDataKeys = Object.keys(vitalData);

    return(
        <div style={{padding: '10px 20px'}}>
            <h3>Vital Signs</h3>

            {
                vitalDataKeys.map((key) => {
                    return <div>
                        <h5> {key} </h5>
                        <p>{ vitalData[key] }</p>
                    </div>
                })
            }

            {
                vitalDataKeys.length === 0 && <p>No Vital Data Present For {patientInfo.name}</p>
            }
        </div>
    )
}
export default VitalSigns;
/************/
