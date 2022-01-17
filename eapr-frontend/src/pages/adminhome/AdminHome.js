import React,{useState,useEffect} from 'react' 
import { toast } from 'react-toastify'
import { logout } from '../../utilities/LogoutUtility'
import { getPatientInfo,getPatientInfoForAdmin } from '../../utilities/PatientUtility'

import './styles.css'

const AdminHome = () => {
    const [patientEmail, setPatientEmail] = useState("")
    const [patientInfo, setPatientInfo] = useState({
        name:'',
        age:'',
        gender:'',
        contact:''
    })
    
    const setPatientContext = async () => {
        var result = await getPatientInfoForAdmin(patientEmail)
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
    const handleCreateMedicationStatement = () => {
        window.location.href = '/medicationstatement'
    }
    const handleCreateAllergiesAndIntolerances = () => {
        window.location.href = '/createallergiesandintolerances'
    }
    const handleCreateProblemList = () => {
        window.location.href = '/createproblemlist'
    }
    const handleCreateAdvanceDirectives = () => {
        window.location.href = '/createadvancedirectives'
    }
    if(localStorage.getItem('token') === null)
        return(
            <h1>You need to be logged in first</h1>
        )
    return(
        <div className='main_container'>
            <h1 className='intro' style={{textAlign:"center"}}>Admin Panel</h1>
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
                        <button className='search_btn' >Add new record</button>
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
        <h1 style={{textAlign:"center"}}>Choose which category record is to be added:</h1>
        <div className='patient_info_container'>
            
            <div className='section_2'>
               <div id='1' onClick = {handleCreateMedicationStatement} className='cat_card'>
                    <h3 style={{textAlign:"center"}}>Medication Summary</h3>
               </div>
               <div onClick = {handleCreateAllergiesAndIntolerances} className='cat_card'>
                <h3 style={{textAlign:"center"}}>Allergies and Intolerances</h3>
               </div>
               <div className='cat_card'>
               <h3 onClick = {handleCreateProblemList} style={{textAlign:"center"}}>Problem List </h3>
               </div>
               <div className='cat_card'>
               <h3 style={{textAlign:"center"}}>Immunizations</h3>
               </div>
               <div className='cat_card'>
               <h3 style={{textAlign:"center"}}>History of Procedures</h3>
               </div>
               <div className='cat_card'>
               <h3 style={{textAlign:"center"}}>Medical Devices</h3>
               </div>
               <div className='cat_card'>
               <h3 style={{textAlign:"center"}}>Diagnostic Results</h3>
               </div>
               <div className='cat_card'>
               <h3 style={{textAlign:"center"}}>Vital Signs</h3>
               </div>
               <div className='cat_card'>
               <h3 style={{textAlign:"center"}}>Past History of Illnesses</h3>
               </div>
               <div className='cat_card'>
               <h3 style={{textAlign:"center"}}>Pregnancy</h3>
               </div>
               <div className='cat_card'>
               <h3 style={{textAlign:"center"}}>Social History</h3>
               </div>
               <div className='cat_card'>
               <h3 style={{textAlign:"center"}}>Plan of Care</h3>
               </div>
               <div className='cat_card'>
               <h3 style={{textAlign:"center"}}>Functional Status</h3>
               </div>
               <div className='cat_card'>
               <h3 style={{textAlign:"center"}}>Advanced Directives</h3>
               </div>
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
export default AdminHome