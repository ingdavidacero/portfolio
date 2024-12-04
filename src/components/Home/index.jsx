import { Link } from "react-router-dom"
import Llave from '../../assets/images/llave.svg'
import './index.scss'
import {useState} from 'react'


function Home(){
    const [isAnimate, setAnimationKey] = useState(false)
    
    const keyClassName = isAnimate 
        ? 'container-llave activo'
        : 'container-llave'

    const ClicAnimation = () =>{
        setAnimationKey(!isAnimate)
    }
    return (
        <div className="container">
            <section className="home-page">
                <div className="text-zone">
                    <h1>David Leonardo Acero</h1>
                    <h2>Ingeniero de Software & Exterminador de bugs</h2>
                    <Link to="/portfolio/sobre-mi" className="flat-button">Conóceme más</Link>
                    
                    <div className={keyClassName} onClick={ClicAnimation}>
                        <img className="img-llave" src={Llave} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home