import './index.scss'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faHouse, faUser, faDiagramProject, faAddressCard } from '@fortawesome/free-solid-svg-icons';

function SideBar(){
    const navRef = useRef();
    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive-nav")
    }
    return (
        <header className="header-nav">
            <nav className="nav-bar">
                <ul>
                    <li>
                        <NavLink 
                            exact="true" 
                            activeclassname="active"
                            className="principal"
                            to="/portfolio"
                        >
                            <FontAwesomeIcon icon={faHouse} color="#C0C0C0"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            exact="true" 
                            activeclassname="active"
                            className="sobre-mi"
                            to="/portfolio/sobre-mi"
                        >
                            <FontAwesomeIcon icon={faUser} color="#93B1A6"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            exact="true" 
                            activeclassname="active"
                            className="proyectos"
                            to="/portfolio/proyectos"
                        >
                            <FontAwesomeIcon icon={faDiagramProject} color="#93B1A6"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            exact="true" 
                            activeclassname="active"
                            className="contacto"
                            to="/portfolio/contacto"
                        >
                            <FontAwesomeIcon icon={faAddressCard} color="#93B1A6"/>
                        </NavLink>
                    </li>
                </ul>
                
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
    )
}

export default SideBar