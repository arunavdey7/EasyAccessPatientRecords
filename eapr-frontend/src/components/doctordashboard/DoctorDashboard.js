// Show patients he has appointment with today
// Shows patients requesting an appointment
// Doctor can select a patient

import './styles.css'
import React,{useState} from 'react' 
import IpsContainer from '../ipscontainer/IpsContainer'
import MedicationSummary from '../ipscollectives/medicationsummary/MedicationSummary'
import { toast } from 'react-toastify'
import { getPatientInfo } from '../../utilities/PatientUtility'
import { logout } from '../../utilities/LogoutUtility'

const DoctorDashboard = ({
    selectedIPSCollective,
    setSelectedIPSCollective
}) => {
    const [patientEmail, setPatientEmail] = useState("")
    const [patientInfo, setPatientInfo] = useState({
        name:'',
        age:'',
        gender:'',
        contact:''
    })
    const handleClick = () => {
        console.log('Search Button Clicked')
    }
    
    const createPrescription = () => {
        if(localStorage.getItem('patient_info') === null)
            toast("You need to search a patient first")
        else
            window.location.href = '/prescription'
    }
    const setPatientContext = async () => {
        var result = await getPatientInfo(patientEmail)
        console.log(result)
        if(result === true)
        {

            toast("Patient successfully identified")
            var temp = JSON.parse(localStorage.getItem('patient_info'))
            setPatientInfo({
                ...patientInfo,
                name: temp.name,
                age:temp.age,
                gender:temp.gender,
                contact:temp.contact
            })

        }
        else
        {
            toast("No such patient identified")
        }
            
    }

    if(localStorage.getItem('token') === null)
        return(
            <h1>You need to be logged in first</h1>
        )
    return(
        <div className='main_container'>
            <div className='heading_picture'>
            </div>
            <div className='patient_info_1'>
                <div className='search_form_container'>
                    <div>
                        <h1 className='ins_1'>Enter patient's email</h1>
                    </div>
                    <div>
                        <input className='input_fields' onChange={e => setPatientEmail(e.target.value)}></input>
                    </div>
                    <div className='srch_btn_cont'>
                        <div>
                            <button onClick={setPatientContext} className='search_btn'>Search Patient</button>
                        </div>
                        <div>
                            <button className='search_btn' onClick={createPrescription}>Create Prescription</button>
                        </div>
                    </div>
                </div>
                <div className='search_form_container'>
                    <div className='patient_info_secn'>
                        <h3>Patient Name: {patientInfo.name}</h3>
                        <h3>Patient Age: {patientInfo.age}</h3>
                        <h3>Patient Gender: {patientInfo.gender}</h3>
                        <h3>Patient Contact: {patientInfo.contact}</h3>
                    </div>
                </div>
            </div>
            <h1 style={{textAlign:"center"}}>Detailed Medical record of patient</h1>
            <div className='patient_info_container'>
                <div className='section_1'>
                    
                </div>
                <div className='section_2'>
                <div className='vital_signs_dashboard'>
                        <div className='vital_signs_container_heading'>
                            <h1 className='vital_sign_heading_text' style={{textAlign:"center"}}>Vital signs</h1>
                        </div>
                        <div className='vital_signs_container_content'>
                            <div className='vital_signs_thumbnail_container'>
                                <div id='oxygen_saturation' className='vital_sign_tumbnail'></div>
                                <div id='blood_pressure' className='vital_sign_tumbnail'></div>
                                <div id='body_temperature' className='vital_sign_tumbnail'></div>
                                <div id='body_weight' className='vital_sign_tumbnail'></div>
                                <div id='respiration_rate' className='vital_sign_tumbnail'></div>
                                <div id='body_mass_index' className='vital_sign_tumbnail'></div>
                            </div>
                            <div className='vital_signs_thumbnail_label_container'>
                                <div className='vital_sign_tumbnail_label'>
                                    <h2>Oxygen Saturation:
                                        <span className='vital_values'>99%</span>
                                    </h2>
                                </div>
                                <div className='vital_sign_tumbnail_label'>
                                    <h2>Blood Pressure:
                                    <span className='vital_values'>99%</span>
                                    </h2>
                                </div>
                                <div className='vital_sign_tumbnail_label'>
                                    <h2>Body Temperature:
                                    <span className='vital_values'>99%</span>
                                    </h2>
                                </div>
                                <div className='vital_sign_tumbnail_label'>
                                    <h2>Body Weight:
                                    <span className='vital_values'>99%</span>
                                    </h2>
                                </div>
                                <div className='vital_sign_tumbnail_label'>
                                    <h2>Respiration Rate:
                                    <span className='vital_values'>99%</span>
                                    </h2>
                                </div>
                                <div className='vital_sign_tumbnail_label'>
                                    <h2>Body Mass Index:
                                    <span className='vital_values'>99%</span>
                                    </h2>
                                </div>
                            </div>
                            <div className='vital_signs_values_container'>
    
                            </div>
                        </div>
                    </div>
                    <IpsContainer setSelectedIPSCollective={setSelectedIPSCollective}
                                  selectedIPSCollective={selectedIPSCollective}
                    />
                </div>
                
            </div>
            <div className='lg_cont'>
                <div>
                <button onClick={logout} className='search_btn'>Logout</button>
                </div>
                    
            </div>
        </div>
    )
}
export default DoctorDashboard;