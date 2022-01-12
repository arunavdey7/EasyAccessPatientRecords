import React from 'react' 
import './styles.css'
const AddPatientData = () => {

    const handleClick = () => {
        window.location.href='/medicationsummary'
    }
    return(
        <div className='international_patient_summary'>
            <div onClick={handleClick} className='ips_heading'>
                <div className='ips_label'>
                    <h2>Medication Summary</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>Allergies and Intolerances</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>Immunizations</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>History of Procedures</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>Medical Devices</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>Diagnostic Results</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>Vital Signs</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>Past History of Illnesses</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>Pregnancy</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>Social History</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>Plan of Care</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>Functional Status</h2>
                </div>
            </div>
            <div className='ips_heading'>
                <div className='ips_label'>
                    <h2>Advanced Directives</h2>
                </div>
            </div>
        </div>
    )
}
export default AddPatientData;