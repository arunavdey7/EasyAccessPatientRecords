import React,{useState} from 'react'
import './styles.css'
const ShowPrescription = () => {

    var data = {
        "Specific_date": "Sun, 21 Nov 2021 00:00:00 GMT",
        "Specific_day_of_month": "jan",
        "additionalInstructions": "tyfgfv",
        "allowedPeriod": "qwwd",
        "comment": "uheds",
        "dateDiscontinued": "Mon, 01 Nov 2021 00:00:00 GMT",
        "dateWritten": "Tue, 01 Nov 2022 00:00:00 GMT",
        "description": "idjsd",
        "diluentAmount": 10,
        "diluentunit": "100mg",
        "dispenseAmount": 21,
        "dispenseAmountDescription": "innds",
        "dispenseAmountUnit": 90,
        "dispenseInstrution": "hubhb",
        "dosageInstruction": "asdf",
        "dose_duration": "tomowwo",
        "dose_frequency": "twice",
        "dose_timing": "Tue, 01 Nov 2022 00:00:00 GMT",
        "dose_unit": 3,
        "form": "okds",
        "maximumAmount": 2,
        "maximumAmountDoseUnit": "wedfrgh",
        "medicationItem": "xyz",
        "numOfRepeatsAllowed": 5,
        "overrideReason": "nubhhjb",
        "reasons": "bhj",
        "repetition_interval": "5 mins",
        "route": "qwe",
        "specific_Event": "tom",
        "specific_day_of_week": "monday",
        "status": "done",
        "strength": 10,
        "strengthUnit": "oksjn",
        "substance_name": "omnws",
        "validityPeriod": "Fri, 04 Feb 2022 00:00:00 GMT"
    }
    return(
        <>
        <h1 className='main_heading'>Medication Summary</h1>
        <div className='prescription_container'>
            <h1 className='prescription_heading'>Prescription</h1>
            <label>Prescription Identifier : <span className='values'>{data["medication"]}</span></label>
            <h2>Medication Order</h2>
            <h4>Order</h4>
            <label>Medication Item : <span className='values'>{data["medicationItem"]}</span></label>
            <h4>Preparation</h4>
            <label>Substance name : <span className='values'>{data["substance_name"]}</span></label>
            <br/>
            <label>Form : <span className='values'>{data["form"]}</span></label>
            <br/>
            <label>Strength : <span className='values'>{data["strength"]}</span></label>
            <br/>
            <label>Strength unit : <span className='values'>{data["strengthUnit"]}</span></label>
            <br/>
            <h4>Dilutent</h4>
            <label>Dilutent amount : <span className='values'>{data["diluentAmount"]}</span></label>
            <br/>
            <label>Dilutent unit : <span className='values'>{data["diluentunit"]}</span></label>
            <br/>
            <h4>Ingredient</h4>
            <h4>Ingredient substance</h4>
            <label>Substance name : <span className='values'>{data["substance_name"]}</span></label>
            <br/>
            <label>Form : <span className='values'>{data["form"]}</span></label>
            <br/>
            <label>Category : </label>
            <br/>
            <label>Ingredient amount : </label>
            <br/>
            <label>Ingredient amount unit : </label>
            <br/>
            <label>Role : </label>
            <br/>
            <label>or : </label>
            <br/>
            <label>Description : </label>
            <br/>
            <label>Route : <span className='values'>{data["route"]}</span></label>
            <br/>
            <label>Dosage instructions : <span className='values'>{data["medication"]}</span></label>
            <br/>
            <h4>Dose Direction</h4>
            <h4>Dose pattern</h4>
            <label >Dose : </label>
            <br/>
            <label>Lower : </label>
            <br/>
            <label>Upper : </label>
            <br/>
            <label>Dose Unit : <span className='values'>{data["dose_unit"]}</span></label>
            <br/>
            <h4>Dose timing</h4>
            <label>Frequency : <span className='values'>{data["dose_frequency"]}</span></label>
            <br/>
            <label>Lower : </label>
            <br/>
            <label>Upper : </label>
            <br/>
            <label>Interval : </label>
            <br/>
            <label>Specific time : </label>
            <br/>
            <label>Named time event : </label>
            <br/>
            <label>Exact timing critical : </label>
            <br/>
            <label>As required : </label>
            <br/>
            <label>As required criterion : </label>
            <br/>
            <label>Infusion administration rate : </label>
            <br/>
            <label>Direction duration : </label>
            <br/>
            <h4>Direction repetetion</h4>
            <label>Repetition Interval : <span className='values'>{data["repetition_interval"]}</span></label>
            <br/>
            <label>Specific Date : <span className='values'>{data["Specific_date"]}</span></label>
            <br/>
            <label>Specific day of the week : <span className='values'>{data["specific_day_of_week"]}</span></label>
            <br/>
            <label>Specific day of the month : <span className='values'>{data["Specific_day_of_month"]}</span></label>
            <br/>
            <h4>Specific event</h4>
            <label>Event name : <span className='values'>{data["specific_Event"]}</span></label>
            <br/>
            <label>Start interval : </label>
            <br/>
            <h4>Medication Safety</h4>
            <h4>Max dose per period</h4>
            <label>Maximum amount : <span className='values'>{data["maximumAmount"]}</span></label>
            <br/>
            <label>Maximum amount dose unit : <span className='values'>{data["maximumAmountDoseUnit"]}</span></label>
            <br/>
            <label>Allowed period : <span className='values'>{data["allowedPeriod"]}</span></label>
            <br/>
            <label>Override reason : <span className='values'>{data["overrideReason"]}</span></label>
            <br/>
            <label>Additional Instructions : <span className='values'>{data["additionalInstructions"]}</span></label>
            <br/>
            <label>Reason : <span className='values'>{data["reasons"]}</span></label>
            <br/>
            <h4>Order details</h4>
            <h4>Course Summary</h4>
            <label>Status : <span className='values'>{data["status"]}</span></label>
            <br/>
            <label>Date discontinued : <span className='values'>{data["dateDiscontinued"]}</span></label>
            <br/>
            <label>Date written : <span className='values'>{data["dateWritten"]}</span></label>
            <br/>
            <h4>Authorization details</h4>
            <label>Number of repeats allowed : <span className='values'>{data["numOfRepeatsAllowed"]}</span></label>
            <br/>
            <label>Validity period : <span className='values'>{data["validityPeriod"]}</span></label>
            <br/>
            <h4>Dispense Directions</h4>
            <label>Dispense instructions : <span className='values'>{data["dispenseInstrution"]}</span></label>
            <br/>
            <h4>Dispense amount</h4>
            <label>Amount description : <span className='values'>{data["dispenseAmountDescription"]}</span></label>
            <br/>
            <label>Amount : <span className='values'>{data["dispenseAmount"]}</span></label>
            <br/>
            <label>Units : <span className='values'>{data["dispenseAmountUnit"]}</span></label>
            <br/>
            <label>Duration of supply : </label>
            <br/>
            <label>Comment : <span className='values'>{data["comment"]}</span></label>
            <br/>
            <label>Identifier : </label>
            <br/>
        </div>
        </>
    )
    

}
export default ShowPrescription;