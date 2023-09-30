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
//Imagenes
import ImgBarichara from '../../assets/images/viajes/barichara.jpg'
import ImgCaboDeLaVela from '../../assets/images/viajes/cabo_de_la_vela.jpg'
import ImgCanyon from '../../assets/images/viajes/canyon.jpg'
import ImgPalomino from '../../assets/images/viajes/palomino.jpg'
import ImgTayrona from '../../assets/images/viajes/tayrona.jpg'
import ImgTortuga from '../../assets/images/viajes/tortuga.jpg'

function About(){
    const viajes = [
        {
            'id':1,
            'imagen':ImgBarichara,
            'titulo':'Barichara',
            'descripcion':'El denominado pueblo más lindo de Colombia. Este destino sobresale por tener calles hermosas llenas de vida y color, resaltando su arquitectura colonial.'
        },
        {
            'id':2,
            'imagen':ImgCaboDeLaVela,
            'titulo':'Cabo de la vela',
            'descripcion':'Un lugar maravilloso donde se encuentran playas paradisíacas las cuales se contrastan con la zona desértica más amplia de Colombia. De aquí se logran ver los atardeceres más lindos de todo el país.'
        },
        {
            'id':3,
            'imagen':ImgCanyon,
            'titulo':'Cañón del Chicamocha',
            'descripcion':'Es un monumento natural que realmente impone cuando uno lo ve, a primera vista parece ser un lugar árido, pero a medida que uno se adentra va encontrando gran cantidad de biodiversidad en un mismo lugar.'
        },
        {
            'id':4,
            'imagen':ImgPalomino,
            'titulo':'Palomino',
            'descripcion':'Este espacio es la clara definición de un destino de descanso y aventura. Mi forma de definirlo es un pueblo "hippie" en el que se puede disfrutar las aguas del mar Caribe.'
        },
        {
            'id':5,
            'imagen':ImgTayrona,
            'titulo':'Parque Nacional Tayrona',
            'descripcion':'Una pequeña vista de cómo se ve el parque nacional del Tayrona desde las profundidades del mar. Esta fauna y flora marina me ha enamorado y apasionado debido a que es la forma en la que uno puede conectar el alma con el mundo.'
        },
        {
            'id':6,
            'imagen':ImgTortuga,
            'titulo':'Tortuga',
            'descripcion':'Esta foto representa mucho para mí, es la única vez que he visto una tortuga gigante. Al ver semejante belleza la frase "La tierra no es una herencia de tus padres, es un préstamo a tus hijos" toma más fuerza.'
        }
    ]

    const trabajos = [
        {
            'id': 1,
            'url': 'https://www.scapanalysis.com',
            'titulo': 'SCAP ANALYSIS',
            'subtitulo': 'Desarrollo Back-End(2017-2018)',
            'descripcion' : 'En este periodo de tiempo tuve mis primeros acercamientos con PHP y JavaScript enfocado en la automatización de procesos a partir de datos.'
        },
        {
            'id': 2,
            'url': 'https://www.aviamarketing.com/',
            'titulo': 'Avia Marketing',
            'subtitulo': 'Programador Jr(2021-2022)',
            'descripcion': 'Desarrollé e hice mantenimiento de aplicaciones corporativas de uso interno, también en la constante mejora de aplicaciones orientadas a nivel cliente. Durante este tiempo hice uso de tecnologías como PHP(Vanilla, Laravel y Prestashop), Mysql, JavaScript vanilla, git, linux y tuve mi primer acercamiento con .NET.' 
        },
        {
            'id': 3,
            'url': 'https://www.celeusgroup.com/',
            'titulo': 'Constructora Celeus Group',
            'subtitulo': 'Desarrollo web(2019-hoy)',
            'descripcion': 'En la empresa he desempeñado el cargo de Full Stack con el uso de PHP, HTML, JavaScript vanilla, Mysql, git y linux. He implementado generación de documentos, ventas de inmuebles, automatización de procesos manuales, configuración de pasarela de pago, manejo de informes y gestión de contenidos.'
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
                        const {id,url,titulo,subtitulo,descripcion} = trabajo
                        const contenido = (<>
                            <h1>{titulo}</h1>
                            <h2>{subtitulo}</h2>
                            <p>{descripcion}</p>
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
                        <AnimacionLetras palabra={'Hobbies'}/>
                    </h1>
                </div>
            </div>
            <section className="row d-flex justify-content-center align-items-center hobbies">
                <div className="col-lg-12 text-zone">
                    <p>
                        Desde una edad muy corta comencé a practicar gran variedad de deportes entre los que más se destacan son: el fútbol en él he aprendido 
                        la importancia del trabajo en equipo, el ajedrez el cual me ha ayudado a desarrollar mi pensamiento lógico, el buceo como una forma de conexión con
                        el mundo y por último la escalada la cual ha sido un reto para mi debido a mi miedo a las alturas.<br />
                        Una de las cosas más lindas de la vida es apreciar el arte es por ello que en ocasiones me gusta pintar y apreciar un buen concierto.<br />
                        Me encanta explorar nuevos lugares es por ello que a continuación muestro algunas fotografías que he tomado de lugares espectaculares de 
                        Colombia resaltando sobre todo lo bello que es la naturaleza:
                    </p>
                </div>
                {
                    viajes.map(viaje=>{
                        const {id,imagen,titulo,descripcion} = viaje
                        const backContents = (<>
                            <h1>{titulo}</h1>
                            <p>{descripcion} </p>
                        </>)
                        
                        return (
                            <div className="col-md-6 col-lg-4 card-travel" key={id}>
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