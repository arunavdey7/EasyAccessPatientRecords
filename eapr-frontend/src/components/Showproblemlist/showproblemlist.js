import React,{useState} from 'react';

const showProblemList = () => {

    var data = {
        "problem_list":{
			"patient_uid":1,
			"problem_name":"headache",
			"body_suite":"lower head",
			"datetime_of_onset":"2021-07-21",
			"severity":"mild",
			"date_of_abatebent":"2021-07-24",
			"active_or_inactive":"active",
			"resolution_phase":"resolved",
			"remission_status":"in remession",
			"occurrence":"recurrence",
			"diagnostic_certainity":"probable",
			"protocol_last_updated":"2021-08-03",
			"global_exclusion_of_adverse_reactions":"",
			"absence_of_information_statement":"",
			"absence_of_information_protocol_last_updated":""
		}





    }
    return(
        <>
            <h1 className='main_heading'>Problem List</h1>
        <div className='form_container'>
            <h1>Problem/Diagnosis</h1>
            <h2>Data</h2>
            <label>Problem/Diagnosis name : <span className='values'>{data["problem_list"]["problem_name"]}</span></label>
            <br/>
            <label>Body site : <span className='values'>{data["problem_list"]["body_suite"]}</span></label>
            <br/>
            <label>Date/time of onset : <span className='values'>{data["problem_list"]["datetime_of_onset"]}</span></label>
            <br/>
            <label>Severity : <span className='values'>{data["problem_list"]["severity"]}</span></label>
            <select>
                <option value='Mild'>Mild</option>
                <option value='Moderate'>Moderate</option>
                <option value='Severe'>Severe</option>
            </select>
            <br/>
            <label>Date of abatement : <span className='values'>{data["problem_list"]["date_of_abatebent"]}</span></label>
            <br/>
            <h2>Problem/Diagnosis qualifier</h2>
            <label>Active/Inactive? : <span className='values'>{data["problem_list"]["active_or_inactive"]}</span></label>
            <select>
                <option value='Active'>Active</option>
                <option value='Inactive'>Inactive</option>
            </select>
            <br/>
            <label>Resolution phase : <span className='values'>{data["problem_list"]["resolution_phase"]}</span></label>
            <select>
                <option value='Resolved'>Resolved</option>
                <option value='Relapsed'>Relapsed</option>
            </select>
            <br/>
            <label>Remission status : <span className='values'>{data["problem_list"]["remission_status"]}</span></label>
            <select>
                <option value='In remission'>In remission</option>
            </select>
            <br/>
            <label>Occurence : <span className='values'>{data["problem_list"]["occurrence"]}</span></label>
            <select>
                <option value='Recurrence'>Recurrence</option>
            </select>
            <br/>
            <label>Diagnostic certainity : <span className='values'>{data["problem_list"]["diagnostic_certainity"]}</span></label>
            <select>
                <option value='Suspected'>Suspected</option>
                <option value='Probable'>Probable</option>
                <option value='Confirmed'>Confirmed</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated : <span className='values'>{data["problem_list"]["protocol_last_updated"]}</span></label>
            <br/>
            <h1>Exclusion - global</h1>
            <h2>Data</h2>
            <label>Global exclusion of problems/diagnoses : <span className='values'>{data["problem_list"]["global_exclusion_of_adverse_reactions"]}</span></label>
            <select>
                <option value='No known Problems'>No known Problems</option>
            </select>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement : <span className='values'>{data["problem_list"]["absence_of_information_statement"]}</span></label>
            <select>
                <option value='No information about current problems'>No information about current problems</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated : <span className='values'>{data["problem_list"]["absence_of_information_protocol_last_updated"]}</span></label>
            <br/>
            <button>Temporary save</button>
            <button>Final save</button>
        </div>
        </>
    )
}
export default ProblemList;
