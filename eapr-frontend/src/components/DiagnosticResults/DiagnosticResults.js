import React,{useState} from 'react';
import { toast } from 'react-toastify';
import { addDiagnosticResult } from '../../utilities/DiagnosticResultsUtility';

const DiagnosticResults = () => {

    const [data, setData] = useState({

    // Laboratory Test Result Data (ltr)
        ltrTestName:'',
        ltrDiagnosticServiceCatagory:'',
        ltrInterpretation:'',

    // Laboratory Test Result Data Specimen (ltr)
        ltrSpecimenType:'',
        ltrMethod:'',
        ltrBodySite:'',

    // Laboratory Test Result Data Laboratory analyte result (ltr)
        ltrAnalyteName:'',

    // Laboratory Test Result Data Multimedia Source (ltr)
        ltrResourceName:'',
        ltrContent:'',

    // Imaging Examination Result Data (ier)
        ierTestName:'',
        ierModality:'',
        ierAnatomicalSite:'',
        ierOverallResultStatus:'',
        ierFindings:'',
        ierComparisonwithPrevious:'',
        ierConclusion:'',
        ierImagingDifferentialDiagnosis:'',
        ierImagingDiagnosis:'',

    // Imaging Examination Result Data Imaging Finding (ier)

        ierFindingName:'',
        ierAnatomicalLocation:'',
        ierPresence:'',
        ierDescription:'',
        ierComparisontoPrevious:'',
        ierComment:'',

    // Imaging Examination Result Data Multimedia Source (ier)
        ierResourceName:'',
        ierContent:'',

    // Imaging Examination Result Protocol (ier)
        ierTechnique:'',
        ierImagingQuality:'',

    // Imaging Examination Result Protocol Examination Request Details (ier)
        ierRequesterOrderIdentifier:'',
        ierExaminationRequestedName:'',
        ierReceiverOrderIdentifier:'',
        ierDICOMStudyIdentifier:'',
        ierReportIdentifier:'',

    // Imaging Examination Result Protocol Examination Request Details Reported Image(ier)
        ierReportedImage:'',
        ierImageIdentifier:'',
        ierDICOMSeriesIdentifier:'',
        ierView:'',
        ierPosition:'',
        ierImageDateTime:'',
        ierImage:'',
    })
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    var temp = {

        "patient_id":parseInt(JSON.parse(localStorage.getItem('patient_info')).id),
        "lab_test_name": "Compgraphy",
        "specimen_type": "",
        "specimen_method": "something",
        "specimen_bodysite": "",
        "diagnostic_service_category": "",
        "laboratory_analyte_result_analyte_name": "",
        "interpretation": "poer",
        "multimedia_source_resource_name": "",
        "multimedia_source_content": "",
        "imaging_test_name": "test1",
        "modality": "",
        "anatomical_site": "hand",
        "imaging_finding_name": "",
        "anatomical_location": "",
        "presence": "",
        "description": "",
        "comparison_to_previous": "yes",
        "comment": "",
        "comparison_with_previous": "",
        "conclusion": "good",
        "imaging_differential_diagnosis": "www",
        "imaging_diagnosis": "",
        "multimedia_resource_name": "erwe",
        "multimedia_content": "",
        "technique": "simple",
        "imaging_quality": "",
        "examination_requester_order_identifier": "some",
        "examination_requested_name": "",
        "examination_receiver_order_identifier": "",
        "dicom_study_identifier": "",
        "examination_report_identifier":"",
        "image_identifier": "2",
        "dicom_series_identifier": "yes",
        "view": "",
        "position": "right",
        "image_datetime": "",
        "image": "2"
    }
    
    const handleSave = async () => {
        var result = await addDiagnosticResult(temp)
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
            <input name='ltrTestName' value={data.ltrTestName || ''} onChange={handleChange}></input>
            <br/>
            <h2>Specimen</h2>
            <label>Specimen type</label>
            <input name='ltrSpecimenType' value={data.ltrSpecimenType || ''} onChange={handleChange}></input>
            <br/>
            <label>Method</label>
            <input name='ltrMethod' value={data.ltrMethod || ''} onChange={handleChange}></input>
            <br/>
            <label>Body site</label>
            <input name='ltrBodySite' value={data.ltrBodySite || ''} onChange={handleChange}></input>
            <br/>
            <label>Diagnostic service category</label>
            <select>
                <option value='Laboratory'>Laboratory</option>
                <option value='Pathology'>Pathology</option>
            </select>
            <br/>
            <h2>Laboratory analyte result</h2>
            <label>Analyte name</label>
            <input name='ltrAnalyteName' value={data.ltrAnalyteName || ''} onChange={handleChange}></input>
            <br/>
            <label>Interpretation</label>
            <input name='ltrInterpretation' value={data.ltrInterpretation || ''} onChange={handleChange}></input>
            <br/>
            <h2>Multimedia source</h2>
            <label>Resource name</label>
            <input name='ltrResourceName' value={data.ltrResourceName || ''} onChange={handleChange}></input>
            <br/>
            <label>Content</label>
            <input name='ltrContent' value={data.ltrContent || ''} onChange={handleChange}></input>
            <br/>
            <h1>Imaging examination result </h1>
            <h2>Data</h2>
            <label>Test name</label>
            <input name='ierTestName' value={data.ierTestName || ''} onChange={handleChange}></input>
            <br/>
            <label>Modality</label>
            <input name='ierModality' value={data.ierModality || ''} onChange={handleChange}></input>
            <br/>
            <label>Anatomical Site</label>
            <input name='ierAnatomicalSite' value={data.ierAnatomicalSite || ''} onChange={handleChange}></input>
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
            <input name='ierFindingName' value={data.ierFindingName || ''} onChange={handleChange}></input>
            <br/>
            <label>Anatomical Location</label>
            <input name='ierAnatomicalLocation' value={data.ierAnatomicalLocation || ''} onChange={handleChange}></input>
            <br/>
            <label>Presence</label>
            <select>
                <option value='Present'>Present</option>
                <option value='Absent'>Absent</option>
                <option value='Indeterminate'>Indeterminate</option>
            </select>
            <br/>
            <label>Description</label>
            <input name='ierDescription' value={data.ierDescription || ''} onChange={handleChange}></input>
            <br/>
            <label>Comparison to previous</label>
            <select>
                <option value='Improving'>Improving</option>
                <option value='Unchanged'>Unchanged</option>
                <option value='Worsening'>Worsening</option>
            </select>
            <br/>
            <label>Comment</label>
            <input name='ierComment' value={data.ierComment || ''} onChange={handleChange}></input>
            <br/>
            <label>Comparison with previous</label>
            <input name='ierComparisonwithPrevious' value={data.ierComparisonwithPrevious || ''} onChange={handleChange}></input>
            <br/>
            <label>Conclusion</label>
            <input name='ierConclusion' value={data.ierConclusion || ''} onChange={handleChange}></input>
            <br/>
            <label>Imaging differential doagnosis</label>
            <input name='ierImagingDifferentialDiagnosis' value={data.ierImagingDifferentialDiagnosis || ''} onChange={handleChange}></input>
            <br/>
            <label>Imaging diagnosis</label>
            <input name='ierImagingDiagnosis' value={data.ierImagingDiagnosis || ''} onChange={handleChange}></input>
            <br/>
            <h2>Multimedia source</h2>
            <label>Resource name</label>
            <input name='ierResourceName' value={data.ierResourceName || ''} onChange={handleChange}></input>
            <br/>
            <label>Content</label>
            <input name='ierContent' value={data.ierContent || ''} onChange={handleChange}></input>
            <br/>
            <h2>Protocol</h2>
            <label>Technique</label>
            <input name='ierTechnique' value={data.ierTechnique || ''} onChange={handleChange}></input>
            <br/>
            <label>Imaging quality</label>
            <input name='ierImagingQuality' value={data.ierImagingQuality || ''} onChange={handleChange}></input>
            <br/>
            <h2>Examination request details</h2>
            <label>Requester order identifier</label>
            <input name='ierRequesterOrderIdentifier' value={data.ierRequesterOrderIdentifier || ''} onChange={handleChange}></input>
            <br/>
            <label>Examination requested name</label>
            <input name='ierExaminationRequestedName' value={data.ierExaminationRequestedName || ''} onChange={handleChange}></input>
            <br/>
            <label>Receiver order identifier</label>
            <input name='ierReceiverOrderIdentifier' value={data.ierReceiverOrderIdentifier || ''} onChange={handleChange}></input>
            <br/>
            <label>DICOM study identifier</label>
            <input name='ierDICOMStudyIdentifier' value={data.ierDICOMStudyIdentifier || ''} onChange={handleChange}></input>
            <br/>
            <label>Report identifier</label>
            <input name='ierReportIdentifier' value={data.ierReportIdentifier || ''} onChange={handleChange}></input>
            <br/>
            <select>
                <option value='Reported image'>Reported image</option>
                <option value='Comparison image'>Comparison image</option>
            </select>
            <br/>
            <label>Image identifier</label>
            <input name='ierImageIdentifier' value={data.ierImageIdentifier || ''} onChange={handleChange}></input>
            <br/>
            <label>DICOM series identifier</label>
            <input name='ierDICOMSeriesIdentifier' value={data.ierDICOMSeriesIdentifier || ''} onChange={handleChange}></input>
            <br/>       
            <label>View</label>
            <input name='ierView' value={data.ierView || ''} onChange={handleChange}></input>
            <br/>     
            <label>Position</label>
            <input name='ierPosition' value={data.ierPosition || ''} onChange={handleChange}></input>
            <br/>
            <label>Image Date Time</label>
            <input type="date"></input><input type="time"></input>
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