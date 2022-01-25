import React,{useState,useEffect} from 'react';
import { getDiagnosticResultByIdForDoctor, getDiagnosticResultByIdForPatient } from '../../utilities/DiagnosticResultsUtility';

const ShowDiagnosticResults = () => {

    const [data, setData] = useState([])
    var role = JSON.parse(localStorage.getItem('sessionData')).role
    var patientId = JSON.parse(localStorage.getItem('patient_info')).id
    var dignostic_id = localStorage.getItem('dignosis_id')
    const sendRequest1 = async () => {
        var result = await getDiagnosticResultByIdForDoctor(patientId,dignostic_id)
        setData(result)
    }
    const sendRequest2 = async () => {
        var result = await getDiagnosticResultByIdForPatient(dignostic_id)
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
    
    return(
        <>
            <h1 className='main_heading'>Diagnostic Results</h1>
            <div className='form_container'>
            <h1>Laboratory test result</h1>
            <h2>Data</h2>
            <label>Test name 
                <span className='values'>{data.lab_test_name}</span>
            </label>
            <br/>
            <h2>Specimen</h2>
            <label>Specimen type
                <span className='values'>{data.specimen_type}</span>
             </label>
            <br/>
            <label>Method
                <span className='values'>{data.specimen_method}</span>
            </label>
            <br/>
            <label>Body site
                <span className='values'>{data.specimen_bodysite}</span>
            </label>
            <br/>
            <label>Diagnostic service category
                <span className='values'>{data.diagnostic_service_category}</span>
            </label>
            <br/>
            <h2>Laboratory analyte result</h2>
            <label>Analyte name
                <span className='values'>{data.laboratory_analyte_result_analyte_name}</span>
            </label>
            
            <br/>
            <label>Interpretation
                <span className='values'>{data.interpretation}</span>
            </label>
            
            <br/>
            <h2>Multimedia source</h2>
            <label>Resource name
                <span className='values'>{data.multimedia_resource_name}</span>
            </label>
           
            <br/>
            <label>Content
                <span className='values'>{data.multimedia_content}</span>
            </label>
            
            <br/>
            <h1>Imaging examination result </h1>
            <h2>Data</h2>
            <label>Test name
                <span className='values'>{data.imaging_test_name}</span>
            </label>
            
            <br/>
            <label>Modality
                <span className='values'>{data.imaging_test_name}</span>
            </label>
            
            <br/>
            <label>Anatomical Site
                <span className='values'>{data.anatomical_site}</span>
            </label>
            
            <br/>
            <label>Overall Result Status</label>
            <br/>
            <label>Findings</label>
            <br/>
            <h2>Imaging finding</h2>
            <label>Finding name
                <span className='values'>{data.imaging_finding_name}</span>
            </label>
            <br/>
            <label>Anatomical Location
                <span className='values'>{data.anatomical_location}</span>
            </label>
            <br/>
            <label>Presence
                <span className='values'>{data.presence}</span>
            </label>
            <br/>
            <label>Description
                <span className='values'>{data.description}</span>
            </label>
            <br/>
            <label>Comparison to previous
                <span className='values'>{data.comparison_to_previous}</span>
            </label>
            <br/>
            <label>Comment
                <span className='values'>{data.comment}</span>
            </label>
            
            <br/>
            <label>Comparison with previous
                <span className='values'>{data.comparison_with_previous}</span>
            </label>
           
            <br/>
            <label>Conclusion
                <span className='values'>{data.conclusion}</span>
            </label>
            
            <br/>
            <label>Imaging differential diagnosis
                <span className='values'>{data.imaging_differential_diagnosis}</span>
            </label>
            
            <br/>
            <label>Imaging diagnosis
                <span className='values'>{data.imaging_diagnosis}</span>
            </label>
            
            <br/>
            <h2>Multimedia source</h2>
            <label>Resource name
                <span className='values'>{data.multimedia_resource_name}</span>
            </label>
            
            <br/>
            <label>Content
                <span className='values'>{data.multimedia_content}</span>
            </label>
            
            <br/>
            <h2>Protocol</h2>
            <label>Technique
                <span className='values'>{data.technique}</span>
            </label>
           
            <br/>
            <label>Imaging quality
                <span className='values'>{data.imaging_test_name}</span>
            </label>
            
            <br/>
            <h2>Examination request details</h2>
            <label>Requester order identifier
                <span className='values'>{data.examination_requester_order_identifier}</span>
            </label>
            
            <br/>
            <label>Examination requested name
                <span className='values'>{data.examination_requested_name}</span>
            </label>
            
            <br/>
            <label>Receiver order identifier
            <span className='values'>{data.examination_receiver_order_identifier}</span>
            </label>
            
            <br/>
            <label>DICOM study identifier
            <span className='values'>{data.dicom_study_identifier}</span>
            </label>
            
            <br/>
            <label>Report identifier
            <span className='values'>{data.examination_report_identifier}</span>
            </label>
            <br/>
            <br/>
            <label>Image identifier
            <span className='values'>{data.image_identifier}</span>
            </label>
           
            <br/>
            <label>DICOM series identifier
            <span className='values'>{data.dicom_series_identifier}</span>
            </label>
            
            <br/>       
            <label>View
            <span className='values'>{data.view}</span>
            </label>
            <br/>     
            <label>Position
            <span className='values'>{data.position}</span>
            </label>
            <br/>
            <label>Image Date Time
            <span className='values'>{data.image_datetime}</span>
            </label>
            <br/>
            <label>Image
            <span className='values'>{data.image}</span>
            </label>
            <br/>
        </div>
        </>
    )
}
export default ShowDiagnosticResults;