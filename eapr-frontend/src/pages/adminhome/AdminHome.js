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

    useEffect(() => {
        if(localStorage.getItem('patient_info') !== null)
        {
            var temp = JSON.parse(localStorage.getItem('patient_info'))
            setPatientInfo({
                ...patientInfo,
                name: temp.name,
                age:temp.age,
                gender:temp.gender,
                contact:temp.contact
            })
        }
    },[])
    
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
    const handleCreateDiagnosticResult = () => {
        window.location.href = '/creatediagnosticresult'
    }
    const handleCreateVitalSigns = () => {
        window.location.href = '/createvitalsigns'
    }
    const handleCreatePastHOI = () => {
        window.location.href = '/createpasthoi'
    }
    const handleCreatePregnancy = () => {
        window.location.href = '/createpregnancy'
    }
    const handleCreateFunctionalStatus = () => {
        window.location.href = '/createfunctionalstatus'
    }
    const handleCreateMedicalDevices = () => {
        window.location.href = '/createmedicaldevices'
    }
    const handleCreateImmunizations = () => {
        window.location.href = '/createimmunizations'
    }
    const handleCreateSocialHistory = () => {
        window.location.href = '/createsocialhistory'
    }
    const handleCreateHistoryOfProcedures = () => {
        window.location.href = '/createhistoryofprocedures'
    }
    const handleCreatePlanOfCare = () => {
        window.location.href = '/createplanofcare'
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
            {patientInfo.name !== '' ?
                        <div className='patient_info_secn'>
                            <h3>Patient Name: <span className='info_val_span'>{patientInfo.name}</span></h3>
                            <h3>Patient Age: <span className='info_val_span'>{patientInfo.age}</span></h3>
                            <h3>Patient Gender: <span className='info_val_span'>{patientInfo.gender}</span></h3>
                            <h3>Patient Contact: <span className='info_val_span'>{patientInfo.contact}</span></h3>
                        </div> :
                        <div className='err_card'>
                            <h1 style={{textAlign:"center"}}>Enter the patient email first.</h1>
                        </div>
                    }
            </div>
        </div>
        <h1 style={{textAlign:"center"}}>Choose which category record is to be added:</h1>
        <div className='patient_info_container'>
            
            <div className='admin_section_2'>
               <div id='1' onClick = {handleCreateMedicationStatement} className='cat_card'>
                    <h3 style={{textAlign:"center"}}>Medication Summary</h3>
               </div>
               <div onClick = {handleCreateAllergiesAndIntolerances} className='cat_card'>
                <h3 style={{textAlign:"center"}}>Allergies and Intolerances</h3>
               </div>
               <div onClick = {handleCreateProblemList} className='cat_card'>
               <h3 style={{textAlign:"center"}}>Problem List </h3>
               </div>
               <div onClick = {handleCreateImmunizations} className='cat_card'>
               <h3 style={{textAlign:"center"}}>Immunizations</h3>
               </div>
               <div onClick = {handleCreateHistoryOfProcedures} className='cat_card'>
               <h3 style={{textAlign:"center"}}>History of Procedures</h3>
               </div>
               <div onClick = {handleCreateMedicalDevices} className='cat_card'>
               <h3 style={{textAlign:"center"}}>Medical Devices</h3>
               </div>
               <div onClick = {handleCreateDiagnosticResult} className='cat_card'>
               <h3 style={{textAlign:"center"}}>Diagnostic Results</h3>
               </div>
               <div onClick = {handleCreateVitalSigns} className='cat_card'>
               <h3 style={{textAlign:"center"}}>Vital Signs</h3>
               </div>
               <div onClick = {handleCreatePastHOI} className='cat_card'>
               <h3 style={{textAlign:"center"}}>Past History of Illnesses</h3>
               </div>
               <div onClick = {handleCreatePregnancy} className='cat_card'>
               <h3 style={{textAlign:"center"}}>Pregnancy</h3>
               </div>
               <div onClick = {handleCreateSocialHistory} className='cat_card'>
               <h3 style={{textAlign:"center"}}>Social History</h3>
               </div>
               <div onClick = {handleCreatePlanOfCare} className='cat_card'>
               <h3 style={{textAlign:"center"}}>Plan of Care</h3>
               </div>
               <div onClick = {handleCreateFunctionalStatus} className='cat_card'>
               <h3 style={{textAlign:"center"}}>Functional Status</h3>
               </div>
               <div onClick = {handleCreateAdvanceDirectives} className='cat_card'>
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