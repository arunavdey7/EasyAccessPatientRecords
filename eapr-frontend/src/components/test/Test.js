import React,{useState} from 'react';

const Test = () => {

    const [data, setData] = useState({
        medicationItem:'',
        medicationName:'',
        medicationForm:'',
            
    })
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    console.log(data)
    return(
        <>
            <h1>Test</h1>
            <input name='medicationItem' value={data.medicationItem || ''} onChange={handleChange}></input>
            <input name='medicationName' value={data.medicationName || ''} onChange={handleChange}></input>
            <input name='medicationForm' value={data.medicationForm || ''} onChange={handleChange}></input>
        </>
    )
}
export default Test;