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
            fieldName:'Allergies & Intolerances',
            gotoUrl:'/allergiesandintolerances'
        },
        {
            fieldName:'Problem List',
            gotoUrl:'/ips/problemlist'
        },
        {
            fieldName:'Immunizations',
            gotoUrl:'/getallimmunizations'
        },
        {
            fieldName:'History of Procedures',
            gotoUrl:'/getallhistoryofprocedures'
        },
        {
            fieldName:'Medical Devices',
            gotoUrl:'/getallmedicaldevices'
        },
        {
            fieldName:'Vital Signs',
            gotoUrl:'/showvitalsigns'
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
            gotoUrl:'/getallsocialhistory'
        },
        {
            fieldName:'Plan of Care',
            gotoUrl:'/getallplanofcare'
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
        <div className='a'>
            <div>
                <h1 className='h_text'>Medical Record Categories</h1>
            </div>
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
        </div>
    )
}
export default IpsContainer;