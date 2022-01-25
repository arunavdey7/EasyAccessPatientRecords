import React,{useState} from 'react'
import { toast } from 'react-toastify'
import { addAdvancedDirectives } from '../../utilities/AdvancedDirectivesUtility'
import { addMedicationStatement } from '../../utilities/MedicationStatementUtility'

const CreateAdvancedDirectives = () => {

    const [type_of_directive, setType_of_directive] = useState("")
    const [a_status, setA_status] = useState("")
    const [description, setDescription] = useState("")
    const [condition, setCondition] = useState("")

   
    const [directive_location, setDirective_location] = useState(0)
    const [a_comment, setA_comment] = useState("")
    const [valid_period_start, setValid_period_start] = useState(0)
    const [valid_period_end, setValid_period_end] = useState("")
    const [review_due_date, setReview_due_date] = useState("")
    const [last_updated, setLast_updated] = useState("")
    const [mandate, setMandate] = useState("")
    const [status, setStatus] = useState(0)
    const [type_of_limitation, setType_of_limitation] = useState("")
    const [decision, setDecision] = useState("")
    const [qualification, setQualification] = useState("")
    const [rationale, setRationale] = useState("")
    const [patient_awareness, setPatient_awareness] = useState("")
    const [carer_awareness, setCarer_awareness] = useState("");
    const [comment, setComment] = useState("");

  
    const [element, setElement] = useState("");
    const [protocol_review_date, setProtocol_review_date] = useState("");
  
    var data = {
        "patient_id":"1",
          "type_of_directive":"declaration of life",
          "a_status":"Present",
          "description":"overview of advance type",
          "condition":"brain injury",
          "directive_location":"in the top drawer of the bedside table",
          "a_comment":"about the advance care directives",
          "valid_period_start":"02/11/2021",
          "valid_period_end":"20/11/2021",
          "review_due_date":"24/11/2021",
          "last_updated":"30/11/2021",
          "mandate":"advance decision are covered bt the mental capacity act",
          "status":"Allow natural death",
          "type_of_limitation":"Dialysis",
          "decision":"permitted",
          "qualification":"clarification about the limitation",
          "rationale":"justification for the limitation",
          "patient_awareness":"Patient aware of decision",
          "carer_awareness":"family awareness",
          "comment":"about the limitations",
          "element":"12/09/2020",
          "protocol_review_date":"15/09/2020"
    }
    const sendData = async () => {
        var result = await addAdvancedDirectives(data)
        if(result === true)
            toast("Data added succesfully")
        else
            toast("Unable to add data right now.")
    }
    return(
        <>
        <h1 className='main_heading'>Advanced Directives</h1>
        <div className='form_container'>
            <h1>Advance care directive</h1>
            <h2>data</h2>
            <label>Type of directive</label>
            <input  onChange={e => setType_of_directive(e.target.value)}></input>
            <br />
            <label>Status</label>
            <input  onChange={e => setA_status(e.target.value)}></input>
            <br />
            <label>Description</label>
            <input  onChange={e => setDescription(e.target.value)}></input>
            <br />
            <label>Condition</label>
            <input  onChange={e => setCondition(e.target.value)}></input>
            <br />
            <h2>Directive location</h2>
            <label>Location</label>
            <input  onChange={e => setDirective_location(e.target.value)}></input>
            <br />
            <label>Comment</label>
            <input  onChange={e => setA_comment(e.target.value)}></input>
            <br />
            <h2>protocol</h2>
            <label>Valid period start</label>
            <input  type='datetime-local' onChange={e => setValid_period_start(e.target.value)}></input>
            <br />
            <label>Valid period end</label>
            <input  type='datetime-local' onChange={e => setValid_period_end(e.target.value)}></input>
            <br/>
            <label>Review due date</label>
            <input   type='datetime-local' onChange={e => setReview_due_date(e.target.value)}></input>
            <br />
            <label>Last updated</label>
            <input   type='datetime-local' onChange={e => setLast_updated(e.target.value)}></input>
            <br />
            <label>Mandate</label>
            <input   onChange={e => setMandate(e.target.value)}></input>
            <br />
            <h1>Limitation of treatment</h1>
            <h2>data</h2>
            <label>Status</label>
            <select>
                <option value='No limitation of treatment'>No limitation of treatment</option>
                <option value='Limitation of medical treatment'>Limitation of medical treatment</option>
                <option value='Allow natural death'>Allow natural death</option>
                
            </select>
            <br />
            <h2>Per limitation</h2>
            <label>Type of limitation</label>
            <select>
                <option value='Cardiopulmonary resuscitation'>Cardiopulmonary resuscitation</option>
                <option value='Endotrcheal intubation'>Endotrcheal intubation</option>
                <option value='Mechanical ventilation'>Mechanical ventilation</option>
                <option value='Vasopressor therapy'>Vasopressor therapy</option>
                <option value='Parental or artificial nutrition'>Parental or artificial nutrition</option>
                <option value='Dialysis'>Dialysis</option>
                <option value='Blood products'>Blood products</option>
                <option value='Antibiotics'>Antibiotics</option>
                <option value='Intravenous fluids'>Intravenous fluids</option>
            </select>
            <br />
            <label> Decision</label>
            <select>
                <option value='Permitted'>Permitted</option>
                <option value='Not Permitted'>Not Permitted</option>
            </select>
            <br />
            <label>Qualification</label>
            <input   onChange={e => setQualification(e.target.value)}></input>
            <br />
            <label>Rationale</label>
            <input   onChange={e => setRationale(e.target.value)}></input>
            <br />
            <label>Patient awareness</label>
            <select>
                <option value='Patients not aware of the decision/s'>Permitted</option>
                <option value='Patients aware of the decision/s'>Not Permitted</option>
            </select>
            <br />
            <label>Carer awareness</label>
            <input   onChange={e => setCarer_awareness(e.target.value)}></input>
            <br />
            <label>Comment</label>
            <input   onChange={e => setComment(e.target.value)}></input>
            <br />
            <h2>protocol</h2>
            <label>ELEMENT</label>
            <input  type='datetime-local' onChange={e => setElement(e.target.value)}></input>
            <br />
            <label>Review date</label>
            <input  type='datetime-local' onChange={e => setProtocol_review_date(e.target.value)}></input>
            <br />
        </div>
        <button onClick={sendData}>Finalize</button>
        </>
    )
}
export default CreateAdvancedDirectives;