import React,{useState} from 'react';

const SocialHistory = () => {

    const [data, setData] = useState({

    // Social History Tobacco Smoking Summary Data (ts)
        tsOverallStatus:'',

    // Social History Alcohol Consumption Summary Data (ac)
        acOverallStatus:'',

    // Social History Alcohol Consumption Summary Data Per Episode (ac)
        acTypicalConsumptionInput:'',
        acTypicalConsumptionSelect:''
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
            <h1 className='main_heading'>Social History</h1>
        <div className='form_container'>
            <h1>Tobacco smoking summary</h1>
            <h2>Data</h2>
            <label>Overall Status</label> 
            <select>
                <option value='Never smoked'>Never smoked</option>
                <option value='Current smoker'>Current smoker</option>
                <option value='Former smoker'>Former smoker</option>
            </select>
            <br/>
            <h1>Alcohol consumption summary</h1>
            <h2>Data</h2>
            <label>Overall Status</label> 
            <select>
                <option value='Current drinker'>Current drinker</option>
                <option value='Former drinker'>Former drinker</option>
                <option value='Lifetime non-drinker'>Lifetime non-drinker</option>
            </select>
            <br/>
            <h2>Per episode</h2>
            <label>Typical consumption (alcohol units)</label>
            <input placeholder=">=0" name='acTypicalConsumptionInput' value={data.ierPosition || ''} onChange={handleChange}></input>
            <select>
                <option value='1/d'>1/d'</option>
                <option value='1/wk'>1/wk</option>
                <option value='1/mo'>1/mo</option>
            </select>
            <br/>
        </div>
        </>
    )
}
export default SocialHistory;