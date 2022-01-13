import React,{useState} from 'react';

const ShowDiagnosticResults = () => {

    var data = {
        "diagnostic_lab_test_result": {
			"patient_uid":1,
			"test_name": "Blood Urea Nitrogen",
			"specimen_type": "Blood",
			"specimen_method": "Hemodialysis",
			"specimen_bodysite": "Kidney",
			"diagnostic_service_category": "laboratory",
			"laboratory_analyte_result_analyte_name": "URR (Urea Reduction Ratio)",
			"interpretation": "Pattern suggets signinficant renal impairment",
			"multimedia_source_resource_name": "dialyzer",
			"multimedia_source_content": "PDF"
		},


		"diagnostic_imaging_examination_result": {
			"patient_uid":1,
			"test_name": "Computed tomography",
			"modality": "CT Scan",
			"anatomical_site": "posterior",
			"imaging_finding_name": "Headache",
			"anatomical_location": "Head",
			"presence": "Present",
			"description": "pain in any region of the head",
			"comparison_to_previous": "Improving",
			"comment": "pain in any region of the head",
			"comparison_with_previous": "not more severe",
			"conclusion": "not more severe",
			"imaging_differential_diagnosis": "Migraine",
			"imaging_diagnosis": "Migraine",
			"multimedia_resource_name": "webmd",
			"multimedia_content": "https://www.webmd.com/migraines-headaches/making-diagnosis-ct-scan",
			"technique": "CT Scan",
			"imaging_quality": "contrast",
			"examination_requester_order_identifier": "148",
			"examination_requested_name": "share care",
			"examination_receiver_order_identifier": "457",
			"dicom_study_identifier": "323",
			"examination_report_identifier": "789",
			"reported_images_identifier": "123"
		},

		"reported_images": {
			"image_identifier": "123",
			"dicom_series_identifier": "456",
			"view": "Lateral",
			"position": "",
			"image_datetime": "23-10-2021",
			"image": ""
		}



    }

    return(
        <>
            <h1 className='main_heading'>Diagnostic Results</h1>
        <div className='form_container'>
            <h1>Laboratory test result</h1>
            <h2>Data</h2>
            <label>Test name : <span className='values'>{data["diagnostic_lab_test_result"]["test_name"]}</span></label>
            <br/>
            <h2>Specimen</h2>
            <label>Specimen type : <span className='values'>{data["diagnostic_lab_test_result"]["specimen_type"]}</span></label>
            <br/>
            <label>Method : <span className='values'>{data["diagnostic_lab_test_result"]["specimen_method"]}</span></label>
            <br/>
            <label>Body site : <span className='values'>{data["diagnostic_lab_test_result"]["specimen_bodysite"]}</span></label>
            <br/>
            <label>Diagnostic service category : <span className='values'>{data["diagnostic_lab_test_result"]["diagnostic_service_category"]}</span></label>
            <select>
                <option value='Laboratory'>Laboratory</option>
                <option value='Pathology'>Pathology</option>
            </select>
            <br/>
            <h2>Laboratory analyte result</h2>
            <label>Analyte name : <span className='values'>{data["diagnostic_lab_test_result"]["laboratory_analyte_result_analyte_name"]}</span></label>
            <br/>
            <label>Interpretation : <span className='values'>{data["diagnostic_lab_test_result"]["interpretation"]}</span></label>
            <br/>
            <h2>Multimedia source</h2>
            <label>Resource name : <span className='values'>{data["diagnostic_lab_test_result"]["multimedia_source_resource_name"]}</span></label>
            <br/>
            <label>Content : <span className='values'>{data["diagnostic_lab_test_result"]["multimedia_source_content"]}</span></label>
            <br/>
            <h1>Imaging examination result </h1>
            <h2>Data</h2>
            <label>Test name : <span className='values'>{data["diagnostic_imaging_examination_result"]["test_name"]}</span></label>
            <br/>
            <label>Modality : <span className='values'>{data["diagnostic_imaging_examination_result"]["modality"]}</span></label>
            <br/>
            <label>Anatomical Site : <span className='values'>{data["diagnostic_imaging_examination_result"]["anatomical_site"]}</span></label>
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
            <label>Findings : <span className='values'>{data["diagnostic_imaging_examination_result"]["imaging_finding_name"]}</span></label>
            <br/>
            <h2>Imaging finding</h2>
            <label>Finding name : <span className='values'>{data["diagnostic_imaging_examination_result"]["imaging_finding_name"]}</span></label>
            <br/>
            <label>Anatomical Location : <span className='values'>{data["diagnostic_imaging_examination_result"]["anatomical_location"]}</span></label>
            <br/>
            <label>Presence : <span className='values'>{data["diagnostic_imaging_examination_result"]["presence"]}</span></label>
            <select>
                <option value='Present'>Present</option>
                <option value='Absent'>Absent</option>
                <option value='Indeterminate'>Indeterminate</option>
            </select>
            <br/>
            <label>Description : <span className='values'>{data["diagnostic_imaging_examination_result"]["description"]}</span></label>
            <br/>
            <label>Comparison to previous : <span className='values'>{data["diagnostic_imaging_examination_result"]["comparison_to_previous"]}</span></label>
            <select>
                <option value='Improving'>Improving</option>
                <option value='Unchanged'>Unchanged</option>
                <option value='Worsening'>Worsening</option>
            </select>
            <br/>
            <label>Comment : <span className='values'>{data["diagnostic_imaging_examination_result"]["comment"]}</span></label>
            <br/>
            <label>Comparison with previous : <span className='values'>{data["diagnostic_imaging_examination_result"]["comparison_with_previous"]}</span></label>
            <br/>
            <label>Conclusion : <span className='values'>{data["diagnostic_imaging_examination_result"]["conclusion"]}</span></label>
            <br/>
            <label>Imaging differential doagnosis : <span className='values'>{data["diagnostic_imaging_examination_result"]["imaging_differential_diagnosis"]}</span></label>
            <br/>
            <label>Imaging diagnosis : <span className='values'>{data["diagnostic_imaging_examination_result"]["imaging_diagnosis"]}</span></label>
            <br/>
            <h2>Multimedia source</h2>
            <label>Resource name : <span className='values'>{data["diagnostic_imaging_examination_result"]["multimedia_resource_name"]}</span></label>
            <br/>
            <label>Content : <span className='values'>{data["diagnostic_imaging_examination_result"]["multimedia_content"]}</span></label>
            <br/>
            <h2>Protocol</h2>
            <label>Technique : <span className='values'>{data["diagnostic_imaging_examination_result"]["technique"]}</span></label>
            <br/>
            <label>Imaging quality : <span className='values'>{data["diagnostic_imaging_examination_result"]["imaging_quality"]}</span></label>
            <br/>
            <h2>Examination request details</h2>
            <label>Requester order identifier : <span className='values'>{data["diagnostic_imaging_examination_result"]["examination_requester_order_identifier"]}</span></label>
            <br/>
            <label>Examination requested name : <span className='values'>{data["diagnostic_imaging_examination_result"]["examination_requested_name"]}</span></label>
            <br/>
            <label>Receiver order identifier : <span className='values'>{data["diagnostic_imaging_examination_result"]["examination_receiver_order_identifier"]}</span></label>
            <br/>
            <label>DICOM study identifier : <span className='values'>{data["diagnostic_imaging_examination_result"]["dicom_study_identifier"]}</span></label>
            <br/>
            <label>Report identifier : <span className='values'>{data["diagnostic_imaging_examination_result"]["examination_report_identifier"]}</span></label>
            <br/>
            <select>
                <option value='Reported image'>Reported image</option>
                <option value='Comparison image'>Comparison image</option>
            </select>
            <br/>
            <label>Image identifier : <span className='values'>{data["reported_images"]["image_identifier"]}</span></label>
            <br/>
            <label>DICOM series identifier : <span className='values'>{data["reported_images"]["dicom_series_identifier"]}</span></label>
            <br/>       
            <label>View : <span className='values'>{data["reported_images"]["view"]}</span></label>
            <br/>     
            <label>Position : <span className='values'>{data["reported_images"]["position"]}</span></label>
            <br/>
            <label>Image Date Time : <span className='values'>{data["reported_images"]["image_datetime"]}</span></label>
            <br/>
            <label>Image : <span className='values'>{data["reported_images"]["image"]}</span></label>
            <br/>
        </div>
        </>
    )
}
export default DiagnosticResults;
