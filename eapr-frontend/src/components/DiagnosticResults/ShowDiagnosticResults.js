import React,{useState,useEffect} from 'react';
import { getDiagnosticResultByIdForDoctor, getDiagnosticResultByIdForPatient } from '../../utilities/DiagnosticResultsUtility';

const ShowDiagnosticResults = () => {

    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    var dignostic_id = localStorage.getItem('dignostic_id',dignostic_id)
    const sendRequest1 = async () => {
        var result = await getDiagnosticResultByIdForDoctor(dignostic_id)
        setData(result)
    }
    const sendRequest2 = async () => {
        var result = await getDiagnosticResultByIdForPatient()
        setData(result)
    }
    useEffect(() => {
        if(role === 'Doctor')
        {
            sendRequest1()
        }
        else if(role === 'Patient')
        {
            sendRequest2()
        }
    }, [])
    var temp = {
        "dignostic": {
            "anatomical_location": "",
            "anatomical_site": "hand",
            "comment": "",
            "comparison_to_previous": "yes",
            "comparison_with_previous": "",
            "conclusion": "good",
            "description": "",
            "diagnostic_service_category": "",
            "dicom_series_identifier": "yes",
            "dicom_study_identifier": "",
            "examination_receiver_order_identifier": "",
            "examination_report_identifier": "",
            "examination_requested_name": "",
            "examination_requester_order_identifier": "some",
            "image": "",
            "image_datetime": "",
            "image_identifier": "",
            "imaging_diagnosis": "",
            "imaging_differential_diagnosis": "www",
            "imaging_finding_name": "",
            "imaging_quality": "",
            "imaging_test_name": "test1",
            "interpretation": "poer",
            "lab_test_name": "Computed tomography",
            "laboratory_analyte_result_analyte_name": "",
            "modality": "",
            "multimedia_content": "",
            "multimedia_resource_name": "erwe",
            "multimedia_source_content": "",
            "multimedia_source_resource_name": "",
            "position": "right",
            "presence": "",
            "specimen_bodysite": "",
            "specimen_method": "something",
            "specimen_type": "",
            "technique": "simple",
            "view": ""
        }
    }
    
    return(
        <>
            <h1 className='main_heading'>Diagnostic Results</h1>
            <div className='form_container'>
            <h1>Laboratory test result</h1>
            <h2>Data</h2>
            <label>Test name</label>
            <br/>
            <h2>Specimen</h2>
            <label>Specimen type</label>
            <br/>
            <label>Method</label>
            <br/>
            <label>Body site</label>
            <br/>
            <label>Diagnostic service category</label>
            <br/>
            <h2>Laboratory analyte result</h2>
            <label>Analyte name</label>
            
            <br/>
            <label>Interpretation</label>
            
            <br/>
            <h2>Multimedia source</h2>
            <label>Resource name</label>
           
            <br/>
            <label>Content</label>
            
            <br/>
            <h1>Imaging examination result </h1>
            <h2>Data</h2>
            <label>Test name</label>
            
            <br/>
            <label>Modality</label>
            
            <br/>
            <label>Anatomical Site</label>
            
            <br/>
            <label>Overall Result Status</label>
            <br/>
            <label>Findings</label>
            <br/>
            <h2>Imaging finding</h2>
            <label>Finding name</label>
            <br/>
            <label>Anatomical Location</label>
            <br/>
            <label>Presence</label>
            <br/>
            <label>Description</label>
            <br/>
            <label>Comparison to previous</label>
            <br/>
            <label>Comment</label>
            
            <br/>
            <label>Comparison with previous</label>
           
            <br/>
            <label>Conclusion</label>
            
            <br/>
            <label>Imaging differential doagnosis</label>
            
            <br/>
            <label>Imaging diagnosis</label>
            
            <br/>
            <h2>Multimedia source</h2>
            <label>Resource name</label>
            
            <br/>
            <label>Content</label>
            
            <br/>
            <h2>Protocol</h2>
            <label>Technique</label>
           
            <br/>
            <label>Imaging quality</label>
            
            <br/>
            <h2>Examination request details</h2>
            <label>Requester order identifier</label>
            
            <br/>
            <label>Examination requested name</label>
            
            <br/>
            <label>Receiver order identifier</label>
            
            <br/>
            <label>DICOM study identifier</label>
            
            <br/>
            <label>Report identifier</label>
            <br/>
            <br/>
            <label>Image identifier</label>
           
            <br/>
            <label>DICOM series identifier</label>
            
            <br/>       
            <label>View</label>
            <br/>     
            <label>Position</label>
            <br/>
            <label>Image Date Time</label>
            <br/>
            <label>Image</label>
            <br/>
        </div>
        </>
    )
}
export default ShowDiagnosticResults;