import './index.scss'
//Componentes
import AnimacionLetras from "../AnimacionLetras"
import Card from '../Card'
//SVGs
import SvgHtml from '../../assets/images/logos/html.svg'
import SvgReact from '../../assets/images/logos/react.svg'
import SvgSass from '../../assets/images/logos/sass.svg'
import SvgPHP from '../../assets/images/logos/php.svg'
import SvgMysql from '../../assets/images/logos/mysql.svg'
//Imagenes
import ImgProyectos from '../../assets/images/proyectos/portafolio.jpg'
import ImgAtenea from '../../assets/images/proyectos/atenea.jpg'

function Projects(){
    const proyectos = [
        {
            'id':2,
            'url':'https://github.com/ingdavidacero/ateneaapp',
            'titulo':'Atenea',
            'descripcion':'Atenea es un sistema de preguntas estilo "¿Quién quiere ser millonario?" denominado así por la diosa griega de la guerra que aparte es considerada la diosa de la sabiduría. El objetivo de este proyecto es mostrar un API con PHP sin el uso de ningún framework.',
            'imagen':ImgAtenea,
            'techstack':[
                {
                    'id':1,
                    'nombre':'PHP',
                    'imagen': SvgPHP
                },
                {
                    'id':2,
                    'nombre':'MYSQL',
                    'imagen': SvgMysql
                }
            ]
        },
        {
            'id':1,
            'url':'https://github.com/ingdavidacero/portfolio',
            'titulo':'Portafolio',
            'descripcion':'En este proyecto se refleja la compilación de nuevos trabajos que voy a ir compartiendo. Esta idea nació con el fin de mostrar mis habilidades de desarrollo de software y también para crear un espacio de pruebas de componentes que tenga en mente.',
            'imagen':ImgProyectos,
            'techstack':[
                {
                    'id':1,
                    'nombre':'React',
                    'imagen': SvgReact
                },
                {
                    'id':2,
                    'nombre':'SASS',
                    'imagen': SvgSass
                },
                {
                    'id':3,
                    'nombre':'HTML',
                    'imagen': SvgHtml
                }
            ]
        }
    ]
    return(
        <div className="container">
            <section className="projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimacionLetras palabra={'Proyectos'}/>
                    </h1>
                    <h2 className="description">
                        "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito."
                        <span>(Aristóteles)</span>
                    </h2>
                </div>
            </section>
            <section className="row d-flex justify-content-center align-items-center projects">
                {
                    proyectos.map(proyecto=>{
                        const {id,url,titulo,descripcion,imagen,techstack} = proyecto
                        const descherramientas = techstack.map(herramienta=>{
                            const {id,nombre,imagen} = herramienta
                            return(
                                <li key={id}>
                                    <img src={imagen} alt={nombre} />
                                </li>
                            )
                        })
                        const contenido = (
                            <>
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-lg-12">
                                        <h1>{titulo}</h1>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center align-items-center projects-content">
                                    <div className="col-lg-4"> 
                                        <img src={imagen} alt={titulo} />
                                    </div>
                                    <div className="col-lg-8">
                                        <p>{descripcion}</p>
                                        <span>Las herramientas utilizadas en este proyecto son:</span>
                                        <ol>
                                            {descherramientas}
                                        </ol>
                                        <span>Si quieres revisar el código base </span><a href={url}>clic aquí</a>
                                    </div>
                                </div>
                            </>
                        )
                        return(
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
        </div>
    )
}

export default Projects