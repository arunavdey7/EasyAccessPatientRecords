import React from 'react' 
import PastHoi from './PastHoi'

const PastHoiItem = ({
    id,
    problem_name
}) => {
    const handleClick = () => {
        localStorage.setItem('past_hoi_id',id)
        window.location.href = '/showpasthoi'
    }
    return(
        <div onClick={handleClick} className='container'>
            <div className='name_container'>
                <h3>{problem_name}</h3>
            </div>
        </div>
    )
}
export default PastHoiItem;