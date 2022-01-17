import React,{useContext} from 'react' 
import IpsItem from '../ipsitem/IpsItem'
import SessionContext from '../../utilities/SessionContext'
import './styles.css'

const IpsContainer = (
    {
        selectedIPSCollective,
        setSelectedIPSCollective
    }
) => {
    const sessionData = useContext(SessionContext);
    const headings = [
        {
            fieldName:'Medication Summary',
            gotoUrl:'/allmedicationstatements'
        },
        {
            fieldName:'Allergies and Intolerances',
            gotoUrl:'/allergiesandintolerances'
        },
        {
            fieldName:'Problem List',
            gotoUrl:'/ips/problemlist'
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
            gotoUrl:'/pasthoi'
        },
        {
            fieldName:'Pregnancy',
            gotoUrl:'/medicationstatements'
        },
        {
            fieldName:'Diagnostic results',
            gotoUrl:'/getalldiagnosticresults'
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
            gotoUrl:'/advancedirectives'
        }

    ]
    return(
        <div className='ips_container'>
            <div className='ips_inner_container'>
                {
                    headings.map((data) => <IpsItem {...data}
                                                    selectedIPSCollective={selectedIPSCollective}
                                                    selectedIPSCollective={setSelectedIPSCollective}
                    />)
                }
            </div>
        </div>
    )
}
export default IpsContainer;