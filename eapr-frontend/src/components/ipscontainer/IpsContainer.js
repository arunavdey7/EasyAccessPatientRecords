import React from 'react' 
import IpsItem from '../ipsitem/IpsItem'

import './styles.css'

const IpsContainer = () => {

    const headings = [
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Allergies and Intolerances',
            gotoUrl:'/allergiesandintolerances'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medication Summary',
            gotoUrl:'/medicationstatements'
        }

    ]

    return(
        <div className='ips_container'>
            {
                headings.map((data) => <IpsItem {...data}/>)
            }
        </div>
    )
}
export default IpsContainer;