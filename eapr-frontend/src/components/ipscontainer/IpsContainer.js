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
            fieldName:'Problem List',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Immunizations',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'History of Procedures',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Medical Devices',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Vital Signs',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Past History of Illnesses',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Pregnancy',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Social History',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Plan of Care',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Functional Status',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Advanced Directives',
            gotoUrl:'/medicationstatements'
        }

    ]

    return(
        <div className='ips_container'>
            <div className='ips_inner_container'>
                {
                    headings.map((data) => <IpsItem {...data}/>)
                }
            </div>
        </div>
    )
}
export default IpsContainer;