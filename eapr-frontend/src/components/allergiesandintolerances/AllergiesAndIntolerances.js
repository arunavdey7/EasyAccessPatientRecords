import React,{useState} from 'react'

import {addAllergiesAndIntolerances} from '../../utilities/AllergiesAndIntolerancesUtility'
const CreateAllergiesAndIntolerances = () => {
    // Allergy Intolerance Data
    const [aiSubstance, setAiSubstance] = useState("")
    const [aiVerificationStatus, setAiVerificationStatus] = useState("")
    const [aiCriticality, setAiCriticality] = useState("")
    const [aiType, setAiType] = useState("")
    const [aiComment, setAiComment] = useState("")

    // Reaction
    const [reactionManifestation, setReactionManifestation] = useState("")
    const [reactionOnset, setReactionOnset] = useState("")
    const [reactionSeverity, setReactionSeverity] = useState("")
   
     // Allergy Intolerance Protocol
     const [aiProtocolLastUpdated, setAiProtocolLastUpdated] = useState("")

    // Allergy Intolerance Exclusion-Global Data
    const [aiexclusionGlobalData, setAiExclusionGlobalData] = useState("");

    // Allergy Intolerance Absence of Information Data
    const [aiabsenceOfInformationDataAbsenceStatement, setAiAbsenceOfInformationDataAbsenceStatement] = useState("");

    // Allergy Intolerance Absence of Information Protocol
    const [aiabsenceOfInformationProtocolLastUpdated, setAiAbsenceOfInformationProtocolLastUpdated] = useState("");

    var data = {
        "patient_id" : 1,
        "global_exclusion_of_adverse_reactions":"frvgtbh",
        "absence_of_information_statement" :"sdfgh",
        "absence_of_information_protocol_last_updated" :"asdfg",
        "substance" : aiSubstance,
        "verification_status":"gvc",
        "critically" :"fcds",
        "type" :"frd",
        "comment" :"edfsw",
        "reaction_manifestation" :"fves",
        "onset" :"brefv",
        "severity" :"vfefv",
        "protocol_last_updated":"vffd"
    
    }
    const sendData = async () => {
       const result = await addAllergiesAndIntolerances(data)
       
        
    }
    
    return(
        <>
        <h1 className='main_heading'>Allergies and Intolerances</h1>
        <div className='form_container'>
            <h1>Allergy Intolerance</h1>
            <h2>Data</h2>
            <label>Substance</label>
            <input onChange={e => setAiSubstance(e.target.value)}></input>
            <br/>
            <label>Verification Status</label>
            <select>
                <option value='Suspected'>Suspected</option>
                <option value='Likely'>Likely</option>
                <option value='Confirmed'>Confirmed</option>
                <option value='Resolved'>Resolved</option>
                <option value='Refuted'>Refuted</option>
            </select>
            <br/>
            <label>Criticality</label>
            <select>
                <option value='Low'>Low</option>
                <option value='High'>High</option>
                <option value='Indeterminate'>Indeterminate</option>
            </select>
            <br/>
            <label>Type</label>
            <select>
                <option value='Allergy'>Allergy</option>
                <option value='Intolerance'>Intolerance</option>
            </select>
            <br/>
            <label>Comment</label>
            <input onChange={e => setAiComment(e.target.value)}></input>
            <br/>
            <h4>Reaction</h4>
            <label>Manifestation</label>
            <input onChange={e => setReactionManifestation(e.target.value)}></input>
            <br/>
            <label>Onset</label>
            <input onChange={e => setReactionOnset(e.target.value)}></input>
            <br/>
            <label>Severity</label>
            <select>
                <option value='Mild'>Mild</option>
                <option value='Moderate'>Moderate</option>
                <option value='Severe'>Severe</option>
            </select>
            <br/>
            <h2>Protocol</h2>
            <label>Last Updated</label>
            <input type='datetime-local' onChange={e => setAiProtocolLastUpdated(e.target.value)}></input>
            <br/>
            <h1>Exclusion Global</h1>
            <h2>Data</h2>
            <label>Global exclusion of adverse reactions</label>
            <select>
                <option value='No known Allergies'>No known Allergies</option>
                <option value='No known Medication Allergies'>No known Medication Allergies</option>
                <option value='No known Environmental Allergies'>No known Environmental Allergies</option>
                <option value='No known Food Allergies'>No known Food Allergies</option>
            </select>
            <br/>
            <h1>Absence of Information</h1>
            <h2>Data</h2>
            <label>Absence statement</label>
            <select>
                <option value='No information about medications'>No information about allergies</option>
            </select>
            <br/>
            <label>Last Updated</label>
            <input type='datetime-local' onChange={e => setAiAbsenceOfInformationProtocolLastUpdated(e.target.value)}></input>
            <br/>
            <button>Temporary save</button>
            <button onClick={sendData}>Final save</button>
        </div>
        </>
    )
}
export default CreateAllergiesAndIntolerances;