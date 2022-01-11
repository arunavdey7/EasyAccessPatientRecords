import React,{useState} from 'react' 
import './styles.css'

const CollapsibleDiv = () => {
    const [styling, setStyling] = useState({display:"none"})
    const handleExpansion = () => {
        if(styling.display==="none")
            setStyling({display:"flex"})
        else
            setStyling({display:"none"})
    }
    return(
        <div className='collapsible_div'>
            <div onClick={handleExpansion} className='visible_part'></div>
            <div className='hidden_part' style={styling}>
                
            </div>
        </div>
    )
}
export default CollapsibleDiv;