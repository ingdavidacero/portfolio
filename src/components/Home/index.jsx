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
                    <h1>Constructor de soluciones a partir <br /> 
                        de tecnología</h1>
                    <Link to="/contacto" className="flat-button">Contáctame</Link>
                    
                    <div className={keyClassName} onClick={ClicAnimation}>
                        <img className="img-llave" src={Llave} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home