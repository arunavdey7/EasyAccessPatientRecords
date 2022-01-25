import React from 'react' 
import DiagnosticResults from './ListDiagnosticResults'

const DiagnosticResultsItem = ({
    dignostic_id,
    dignosis_id,
    imaging_test_name,
    lab_test_name
}) => {
    const handleClick = () => {
        window.location.href = '/showdiagnosticresults'
        if(dignosis_id === undefined)
            dignosis_id = dignostic_id
        localStorage.setItem('dignosis_id',dignosis_id)

    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>{lab_test_name}s</h3>
                <p>{imaging_test_name}</p>
            </div>
        </div>
    )
}
export default DiagnosticResultsItem;