import React,{useState} from 'react';

const Test = () => {

    const [data, setData] = useState({
        a:'',
        b:'',
        c:''
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
            <input name='a' value={data.a || ''} onChange={handleChange}></input>
            <input name='b' value={data.b || ''} onChange={handleChange}></input>
            <input name='c' value={data.c || ''} onChange={handleChange}></input>
        </>
    )
}
export default Test;