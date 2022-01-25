import React from 'react' 

const ProblemistItem = ({
    problem_name,
    id
}) => {
    const handleClick = () => {
        localStorage.setItem('problem_id',id)
        window.location.href = '/showproblemlist'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>{problem_name}</h3>
            </div>
        </div>
    )
}
export default ProblemistItem;