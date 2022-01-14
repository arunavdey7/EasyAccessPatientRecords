import React from 'react' 

const CreatePrescription = () => {
    const handleClick = () => {
        window.location.href = '/prescription'
    }
    var tempMedOrders = JSON.parse(localStorage.getItem('tempMedOrders')) || []
    var currCount = JSON.parse(localStorage.getItem('currCount')) || [0]
    const removeMedOrder = () => {
        
    }
    const handleFinalize = () => {
        localStorage.removeItem('tempMedOrders')
    }
    return(
        <div>
            <h1 className='page_heading'>Add Medication Order(s)</h1>
            <button onClick={handleClick} className=''>Create Medication Order</button>
            <div className='med_orders_container'>
                {tempMedOrders.length === 0 ? 
                    <h3>No medication orders found</h3>
                :
                
                    tempMedOrders.map(() => <h3>Med order<span><button onClick={removeMedOrder}>Remove</button></span></h3>)
                }
            </div> 
            <button onClick = {handleFinalize}>Finalize and Send</button>       
        </div>
        
    )
}
export default CreatePrescription;