import React,{useState} from 'react';
import { toast } from 'react-toastify';
import { addDiagnosticResult } from '../../utilities/DiagnosticResultsUtility';

const DiagnosticResults = () => {

    const [data, setData] = useState({
        patient_id:parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
        lab_test_name: "",
        specimen_type: "",
        specimen_method: "",
        specimen_bodysite: "",
        diagnostic_service_category: "",
        laboratory_analyte_result_analyte_name: "",
        interpretation: "",
        multimedia_source_resource_name: "",
        multimedia_source_content: "",
        imaging_test_name: "",
        modality: "",
        anatomical_site: "",
        imaging_finding_name: "",
        anatomical_location: "",
        presence: "",
        description: "",
        comparison_to_previous: "",
        comment: "",
        comparison_with_previous: "",
        conclusion: "",
        imaging_differential_diagnosis: "",
        imaging_diagnosis: "",
        multimedia_resource_name: "",
        multimedia_content: "",
        technique: "",
        imaging_quality: "",
        examination_requester_order_identifier: "",
        examination_requested_name: "",
        examination_receiver_order_identifier: "",
        dicom_study_identifier: "",
        examination_report_identifier:"",
        image_identifier: "2",
        dicom_series_identifier: "",
        view: "",
        position: "",
        image_datetime: "",
        image: "2"
    })
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSave = async () => {
        var result = await addDiagnosticResult(data)
        if(result === true)
            toast("Successfully added.")
        else
            toast("Unable to add right now")
    }

    return(
        <>
            <h1 className='main_heading'>Diagnostic Results</h1>
        <div className='form_container'>
            <h1>Laboratory test result</h1>
            <h2>Data</h2>
            <label>Test name</label>
            <input name='lab_test_name' value={data.lab_test_name || ''} onChange={handleChange}></input>
            <br/>
            <h2>Specimen</h2>
            <label>Specimen type</label>
            <input name='specimen_type' value={data.specimen_type || ''} onChange={handleChange}></input>
            <br/>
            <label>Method</label>
            <input name='specimen_method' value={data.specimen_method || ''} onChange={handleChange}></input>
            <br/>
            <label>Body site</label>
            <input name='specimen_bodysite' value={data.specimen_bodysite || ''} onChange={handleChange}></input>
            <br/>
            <label>Diagnostic service category</label>
            <select name='diagnostic_service_category' value={data.diagnostic_service_category || ''} onChange={handleChange}>
                <option value='Laboratory'>Laboratory</option>
                <option value='Pathology'>Pathology</option>
            </select>
            <br/>
            <h2>Laboratory analyte result</h2>
            <label>Analyte name</label>
            <input name='laboratory_analyte_result_analyte_name' value={data.laboratory_analyte_result_analyte_name || ''} onChange={handleChange}></input>
            <br/>
            <label>Interpretation</label>
            <input name='interpretation' value={data.interpretation || ''} onChange={handleChange}></input>
            <br/>
            <h2>Multimedia source</h2>
            <label>Resource name</label>
            <input name='multimedia_source_resource_name' value={data.multimedia_source_resource_name || ''} onChange={handleChange}></input>
            <br/>
            <label>Content</label>
            <input name='multimedia_source_content' value={data.multimedia_source_content || ''} onChange={handleChange}></input>
            <br/>
            <h1>Imaging examination result </h1>
            <h2>Data</h2>
            <label>Test name</label>
            <input name='ierTestName' value={data.ierTestName || ''} onChange={handleChange}></input>
            <br/>
            <label>Modality</label>
            <input name='modality' value={data.modality || ''} onChange={handleChange}></input>
            <br/>
            <label>Anatomical Site</label>
            <input name='anatomical_site' value={data.anatomical_site || ''} onChange={handleChange}></input>
            <br/>
            <label>Overall Result Status</label>
            <select>
                <option value='Registered'>Registered</option>
                <option value='Interim'>Interim</option>
                <option value='Final'>Final</option>
                <option value='Appended'>Appended</option>
                <option value='Cancelled/Aborted'>Cancelled/Aborted</option>
            </select>
            <br/>
            <label>Findings</label>
            <input name='ierFindings' value={data.ierFindings || ''} onChange={handleChange}></input>
            <br/>
            <h2>Imaging finding</h2>
            <label>Finding name</label>
            <input name='imaging_finding_name' value={data.imaging_finding_name || ''} onChange={handleChange}></input>
            <br/>
            <label>Anatomical Location</label>
            <input name='anatomical_location' value={data.anatomical_location || ''} onChange={handleChange}></input>
            <br/>
            <label>Presence</label>
            <select name='presence' value={data.presence || ''} onChange={handleChange}>
                <option value='Present'>Present</option>
                <option value='Absent'>Absent</option>
                <option value='Indeterminate'>Indeterminate</option>
            </select>
            <br/>
            <label>Description</label>
            <input name='ierDescription' value={data.ierDescription || ''} onChange={handleChange}></input>
            <br/>
            <label>Comparison to previous</label>
            <select name='comparison_to_previous' value={data.comparison_to_previous || ''} onChange={handleChange}>
                <option value='Improving'>Improving</option>
                <option value='Unchanged'>Unchanged</option>
                <option value='Worsening'>Worsening</option>
            </select>
            <br/>
            <label>Comment</label>
            <input name='comment' value={data.comment || ''} onChange={handleChange}></input>
            <br/>
            <label>Comparison with previous</label>
            <input name='comparison_with_previous' value={data.comparison_with_previous || ''} onChange={handleChange}></input>
            <br/>
            <label>Conclusion</label>
            <input name='conclusion' value={data.conclusion || ''} onChange={handleChange}></input>
            <br/>
            <label>Imaging differential doagnosis</label>
            <input name='imaging_differential_diagnosis' value={data.imaging_differential_diagnosis || ''} onChange={handleChange}></input>
            <br/>
            <label>Imaging diagnosis</label>
            <input name='imaging_diagnosis' value={data.imaging_diagnosis || ''} onChange={handleChange}></input>
            <br/>
            <h2>Multimedia source</h2>
            <label>Resource name</label>
            <input name='multimedia_resource_name' value={data.multimedia_resource_name || ''} onChange={handleChange}></input>
            <br/>
            <label>Content</label>
            <input name='multimedia_content' value={data.multimedia_content || ''} onChange={handleChange}></input>
            <br/>
            <h2>Protocol</h2>
            <label>Technique</label>
            <input name='technique' value={data.technique || ''} onChange={handleChange}></input>
            <br/>
            <label>Imaging quality</label>
            <input name='imaging_quality' value={data.imaging_quality || ''} onChange={handleChange}></input>
            <br/>
            <h2>Examination request details</h2>
            <label>Requester order identifier</label>
            <input name='examination_requester_order_identifier' value={data.examination_requester_order_identifier || ''} onChange={handleChange}></input>
            <br/>
            <label>Examination requested name</label>
            <input name='examination_requested_name' value={data.examination_requested_name || ''} onChange={handleChange}></input>
            <br/>
            <label>Receiver order identifier</label>
            <input name='examination_receiver_order_identifier' value={data.examination_receiver_order_identifier || ''} onChange={handleChange}></input>
            <br/>
            <label>DICOM study identifier</label>
            <input name='dicom_study_identifier' value={data.dicom_study_identifier || ''} onChange={handleChange}></input>
            <br/>
            <label>Report identifier</label>
            <input name='examination_report_identifier' value={data.examination_report_identifier || ''} onChange={handleChange}></input>
            <br/>
            <select>
                <option value='Reported image'>Reported image</option>
                <option value='Comparison image'>Comparison image</option>
            </select>
            <br/>
            <label>Image identifier</label>
            <input name='image_identifier' value={data.image_identifier || ''} onChange={handleChange}></input>
            <br/>
            <label>DICOM series identifier</label>
            <input name='dicom_series_identifier' value={data.dicom_series_identifier || ''} onChange={handleChange}></input>
            <br/>       
            <label>View</label>
            <input name='view' value={data.view || ''} onChange={handleChange}></input>
            <br/>     
            <label>Position</label>
            <input name='position' value={data.position || ''} onChange={handleChange}></input>
            <br/>
            <label>Image Date Time</label>
            <input type='datetime-local' name='image_datetime' value={data.image_datetime}></input><input type="time"></input>
            <br/>
            <label>Image</label>
            <input type="file"></input>
            <br/>
            <button onClick = {handleSave}>Save</button>
        </div>
        </>
    )
}
export default DiagnosticResults;