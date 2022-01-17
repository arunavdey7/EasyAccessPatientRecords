
import React,{useState} from 'react' 
import './styles.css'
const CreatePrescription = () => {
    const handleClick = () => {
        window.location.href = '/prescription'
    }
    var tempMedOrders = JSON.parse(localStorage.getItem('tempMedOrders')) || []
    var currCount = JSON.parse(localStorage.getItem('currCount')) || [0]
    const [refresh, setRefresh] = useState(0)
    const removeMedOrder = () => {
        
    }
    const handleFinalize = () => {
        localStorage.removeItem('tempMedOrders')
    }
    const handleClearAll = () => {
        localStorage.removeItem('tempMedOrders')
        setRefresh(refresh+1)
    }
    const handleGoBack = () => {
        window.location.href = '/doctorsdashboard'
    }
    return(
        <div className='main_cont'>
            <h1 className='page_heading'>Add Medication Order(s)</h1>
            <div className='aa'>
                <div>
                    <button className='rm_btn' onClick={handleClick}>Create Medication Order</button>
                </div>
            </div>
            <div className='med_orders_container'>
                {tempMedOrders.length === 0 ? 
                    <h3 style={{textAlign:"center"}}>No medication orders found</h3>
                :
                
                    tempMedOrders.map((info) => <div className='med_order_card'>
                        <div >
                            <h2 className='jj'>{info.medicationItem}</h2>
                        </div>
                    </div>)
                }
            </div> 
            <div className='aa'>
                <div>
                    <button className='rm_btn' onClick = {handleFinalize}>Finalize and Send</button>
                </div>
                <div>
                    <button className='rm_btn' onClick = {handleClearAll}>Clear and Start again</button>
                </div>
                <div>
                    <button className='rm_btn' onClick = {handleGoBack}>Go back to dashboard</button>
                </div>
            </div>       
        </div>
        
    )
}
export default CreatePrescription;