import { Link } from "react-router-dom"
import AnimacionLetras from "../AnimacionLetras"
import './index.scss'

function Home(){
    return (
        <div className="container">
            <section className="home-page">
                <div className="text-zone">
                    <h1>
                        <AnimacionLetras palabra={'¡Hola!'}/> 
                        <AnimacionLetras palabra={'Soy'}/>  
                        <AnimacionLetras palabra={'David'}/>
                    </h1>
                    <h2>Constructor de soluciones a partir <br /> 
                        de la tecnología</h2>
                    <Link to="/contacto" className="flat-button">Contáctame</Link>
                </div>
            </section>
            
        </div>
    )
}

export default Home