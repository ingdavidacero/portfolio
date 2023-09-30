import './index.scss'
import {useState} from 'react'

function CardFlip({frontContent, backContent}){
    const [isFlip, setisFlip] = useState(false)
    
    const cardClassName = isFlip 
        ? 'card-flip flipped'
        : 'card-flip'

    const ClicFlip = () =>{
        setisFlip(!isFlip)
    }
    return(
        <div className="container-card" onClick={ClicFlip}>
            <div className={cardClassName}>
                <div className="front">
                    {frontContent}
                </div>
                <div className="back">
                    {backContent}
                </div>
            </div>
        </div>
        
    )
}

export default CardFlip