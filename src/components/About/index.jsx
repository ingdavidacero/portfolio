import './index.scss'
//Componentes
import ImagenMia from '../../assets/images/linkedin.jpg'
import AnimacionLetras from "../AnimacionLetras"
import Card from '../Card'
import CardFlip from '../CardFlip'
//SVGs
import SvgCss from '../../assets/images/logos/css.svg'
import SvgGit from '../../assets/images/logos/git.svg'
import SvgGitHub from '../../assets/images/logos/github.svg'
import SvgHtml from '../../assets/images/logos/html.svg'
import SvgJavaScript from '../../assets/images/logos/javascript.svg'
import SvgMySql from '../../assets/images/logos/mysql.svg'
import SvgPhp from '../../assets/images/logos/php.svg'
import SvgReact from '../../assets/images/logos/react.svg'
import SvgSass from '../../assets/images/logos/sass.svg'
import NodeJs from '../../assets/images/logos/node.svg'
import Laravel from '../../assets/images/logos/laravel.svg'
//Imagenes
import ImgBarichara from '../../assets/images/viajes/barichara.jpg'
import ImgCaboDeLaVela from '../../assets/images/viajes/cabo_de_la_vela.jpg'
import ImgCanyon from '../../assets/images/viajes/canyon.jpg'
import ImgPalomino from '../../assets/images/viajes/palomino.jpg'
import ImgTortuga from '../../assets/images/viajes/tortuga.jpg'
import ImgPerdidos from '../../assets/images/viajes/canyon1.jpg'
import ImgColores from '../../assets/images/viajes/colores.jpg'
import ImgCusco from '../../assets/images/viajes/cusco.jpg'
import ImgHuacachina from '../../assets/images/viajes/huacachina.jpg'
import ImgHumantay from '../../assets/images/viajes/humantay.jpg'
import ImgIslaFuerte from '../../assets/images/viajes/isla_fuerte.jpg'
import ImgLima from '../../assets/images/viajes/lima.jpg'

function About(){
    const viajes = [
        {
            'id':1,
            'imagen':ImgBarichara,
            'titulo':'Barichara, Colombia'
        },
        {
            'id':2,
            'imagen':ImgCaboDeLaVela,
            'titulo':'Cabo de la vela, Colombia'
        },
        {
            'id':3,
            'imagen':ImgCanyon,
            'titulo':'Cañón del Chicamocha, Colombia'
        },
        {
            'id':4,
            'imagen':ImgPalomino,
            'titulo':'Palomino, Colombia'
        },
        {
            'id':5,
            'imagen':ImgTortuga,
            'titulo':'Mar Caribe, Colombia'
        },
        {
            'id':6,
            'imagen':ImgPerdidos,
            'titulo':'Cañón de los perdidos, Perú'
        },
        {
            'id':7,
            'imagen':ImgColores,
            'titulo':'Montaña de los 7 colores, Perú'
        },
        {
            'id':8,
            'imagen':ImgCusco,
            'titulo':'Cusco, Perú'
        },
        {
            'id':9,
            'imagen':ImgHuacachina,
            'titulo':'Huacachina, Perú'
        },
        {
            'id':10,
            'imagen':ImgHumantay,
            'titulo':'Laguna Humantay, Perú'
        },
        {
            'id':11,
            'imagen':ImgIslaFuerte,
            'titulo':'Isla Fuerte, Colombia'
        },
        {
            'id':12,
            'imagen':ImgLima,
            'titulo':'Lima, Perú'
        }
    ]

    const trabajos = [
        {
            'id': 1,
            'url': 'https://www.scapanalysis.com',
            'titulo': 'SCAP ANALYSIS',
            'subtitulo': 'Desarrollo Back-End(2017-2018)',
            'funciones' : [
                {
                    'id_responsabilidad':1,
                    'texto':'Desarrollo Backend: Primeros acercamientos con PHP y JavaScript enfocado en la automatización de procesos a partir de datos.'
                },
                {
                    'id_responsabilidad':2,
                    'texto':'Gestión de Bases de Datos: Optimización de consultas para mejorar el rendimiento en el análisis de datos usando MySQL.'
                }
            ]
        },
        {
            'id': 2,
            'url': 'https://www.aviamarketing.com/',
            'titulo': 'Avia Marketing',
            'subtitulo': 'Programador Jr(2021-2022)',
            'funciones': [
                {
                    'id_responsabilidad':3,
                    'texto':'Desarrollo Backend: Programación en PHP, JavaScript y .NET con experiencia en entornos de desarrollo modernos.',
                },
                {
                    'id_responsabilidad':4,
                    'texto':'Frameworks: Dominio del uso de Laravel para el desarrollo de aplicaciones web.',
                },
                {
                    'id_responsabilidad':5,
                    'texto':'Diseño de Bases de Datos: Modelado y optimización de bases de datos relacionales.',
                },
                {
                    'id_responsabilidad':6,
                    'texto': 'Gestión de Bases de Datos: Uso de MySQL para consultas, integridad de datos y rendimiento.',
                },
                {
                    'id_responsabilidad':7,
                    'texto':'Cloud Computing: Gestión y configuración de servicios de bases de datos en Amazon RDS.'
                }
            ]

        },
        {
            'id': 3,
            'url': 'https://www.celeusgroup.com/',
            'titulo': 'Constructora Celeus Group',
            'subtitulo': 'Desarrollo web(2019-hoy)',
            'funciones': [
                {
                    'id_responsabilidad':8,
                    'texto':'Desarrollo Backend: Experiencia en desarrollo con PHP y JavaScript, creando aplicaciones eficientes y escalables'
                },
                {
                    'id_responsabilidad':9,
                    'texto':'Diseño y Administración de Bases de Datos: Modelado, diseño y optimización de bases de datos relacionales, implementación de estándares y políticas de seguridad para la administración de bases de datos, administración de bases de datos para garantizar su integridad y disponibilidad.'
                },
                {
                    'id_responsabilidad':10,
                    'texto':'Configuración de Servidores: Configuración, administración y mantenimiento de servidores Linux'
                },
                {
                    'id_responsabilidad':11,
                    'texto':'Seguridad de Sistemas: Implementación de técnicas de ciberseguridad para el sistema.'
                },
                {
                    'id_responsabilidad':12,
                    'texto':'Manejo y optimización de transacciones de clientes, asegurando precisión, eficiencia y seguridad en los procesos.'
                }
            ]
        }
    ]

    const herramientas = [
        {
            'id': 1,
            'imagen': SvgHtml,
            'titulo': 'HTML'
        },
        {
            'id': 2,
            'imagen': SvgCss,
            'titulo': 'CSS'
        },
        {
            'id': 3,
            'imagen': SvgSass,
            'titulo': 'SASS'
        },
        {
            'id': 4,
            'imagen': SvgJavaScript,
            'titulo': 'JAVASCRIPT'
        },
        {
            'id': 5,
            'imagen': SvgReact,
            'titulo': 'REACT'
        },
        {
            'id': 6,
            'imagen': SvgPhp,
            'titulo': 'PHP'
        },
        {
            'id': 7,
            'imagen': SvgMySql,
            'titulo': 'MYSQL'
        },
        {
            'id': 8,
            'imagen': SvgGit,
            'titulo': 'GIT'
        },
        {
            'id': 9,
            'imagen': SvgGitHub,
            'titulo': 'GITHUB'
        },
        {
            'id': 10,
            'imagen': NodeJs,
            'titulo': 'NODEJS'
        },
        {
            'id': 11,
            'imagen': Laravel,
            'titulo': 'LARAVEL'
        }
    ]
    return(
        <div className="container about-page">
            <div className="row title-about">
                <div className="col-lg-12">
                    <h1>
                        <AnimacionLetras palabra={'Sobre mí'}/>
                    </h1>
                </div>
            </div>
            <section className="row d-flex justify-content-center align-items-center">
                <div className="me col-lg-4">
                    <figure>
                        <img src={ImagenMia} width={350} height={350} className="radius" alt="Perfil David Acero" />
                    </figure>
                </div>
                <div className="text-zone col-lg-8">
                    <p>
                        Soy ingeniero de sistemas de la Universidad Distrital Francisco José de Caldas que cuenta con experiencia a partir del 2017 en desarrollo web. 
                    </p>
                    <p>
                        Tengo conocimientos en diseño y administración de bases de datos, desarrollo de soluciones de software
                        tanto Front-End como Back-End.
                    </p>
                    <p>
                        Estoy siempre buscando la manera de aprender cosas nuevas que me ayuden en el crecimiento profesional y personal.
                    </p>
                </div>
            </section>
            <div className="row title-about">
                <div className="col-lg-12">
                    <h1>
                    <AnimacionLetras palabra={'Experiencia'}/>
                    </h1>
                </div>
            </div>
            <section className="row d-flex justify-content-center align-items-center experiencia">
                {
                    trabajos.map(trabajo=>{
                        const {id,url,titulo,subtitulo,funciones} = trabajo
                        const contenido = (<>
                            <h1>{titulo}</h1>
                            <h2>{subtitulo}</h2>
                            <ul>
                            {funciones.map(responsabilidad=>{
                                const {id_responsabilidad,texto} = responsabilidad
                                return <li key={id_responsabilidad}><p>{texto}</p></li>
                            })}
                            </ul>
                        </>)
                        return (
                            <div className="col-lg-12" key={id}>
                                <Card 
                                    url={url}
                                    contenido={contenido}
                                />
                            </div> 
                        )
                    })
                }
                
            </section>
            <div className="row title-about">
                <div className="col-lg-12">
                    <h1>
                        <AnimacionLetras palabra={'Tech Stack'}/>
                    </h1>
                </div>
            </div>
            <section className="row d-flex justify-content-center align-items-center techstack">
                <div className="col-lg-12 text-zone">
                    <p>Algunos de los lenguajes, tecnologías y herramientas que uso son:</p>
                </div>
                {
                    herramientas.map(herramienta=>{
                        const {id,imagen,titulo} = herramienta
                        return (
                            <div className="col-sm-6 col-md-4 col-lg-3 tech_icon" key={id}>
                                <img src={imagen} alt={titulo} />
                                <span>{titulo}</span>
                            </div>
                        )
                    })
                }
            </section>
            <div className="row title-about">
                <div className="col-lg-12">
                    <h1>
                        <AnimacionLetras palabra={'Algunos viajes'}/>
                    </h1>
                </div>
            </div>
            <section className="row d-flex justify-content-center align-items-center hobbies">
                <div className="col-lg-12 text-zone">
                    <p>Soy una persona que le encanta viajar y conocer rincones rodeados de magia de este mundo, acá dejo algunos de estos lugares.</p>
                </div>
                {
                    viajes.map(viaje=>{
                        const {id,imagen,titulo} = viaje
                        const backContents = (<>
                            <h1>{titulo}</h1>
                        </>)
                        
                        return (
                            <div className="col-md-6 col-lg-3 card-travel" key={id}>
                                <CardFlip 
                                    frontContent={<img src={imagen} alt={titulo}/>} 
                                    backContent={backContents} 
                                />
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default About