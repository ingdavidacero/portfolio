import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons'

function FooterBar(){
    return (
        <footer className="footer-nav">
                <div className="nav-bar-footer">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/david-acero/">
                                <FontAwesomeIcon icon={faLinkedin} color="#93B1A6"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ingdavidacero">
                                <FontAwesomeIcon icon={faGithub} color="#93B1A6"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/another_vinci/">
                                <FontAwesomeIcon icon={faInstagram} color="#93B1A6"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <p>Creado y diseñado por David Acero.</p>
        </footer>
    )
}

export default FooterBar