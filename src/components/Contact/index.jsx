import './index.scss'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimacionLetras from "../AnimacionLetras"

function Contact (){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            alert('¡Mensaje enviado con éxito!')
            window.location.reload(false)
        }, (error) => {
            alert('Fallo al intentar enviar el mensaje, intentelo de nuevo.')
        });
    };
    return (
        <>
            <div className="container">
                <div className="row contact-page">
                    <div className="col-lg-12 title-contact">
                        <h1>
                            <AnimacionLetras palabra={'Contacto'}/>
                        </h1>
                    </div>
                    <div className="col-lg-12 text-zone">
                        <p>Estoy interesado en grandes proyectos. Si tiene alguna pregunta o alguna solicitud, no dude en ponerse en contacto conmigo mediante el siguiente formulario.</p>
                        <form className="contact-form" ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Nombre" 
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        required
                                    />
                                </li>
                                <li>
                                    <input 
                                        type="text" 
                                        name="asunto" 
                                        placeholder="Asunto" 
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        placeholder="Mensaje"
                                        name="mensaje"
                                        required
                                    >
                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Enviar"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact