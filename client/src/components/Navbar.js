import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/white_logo_transparent_background.png'
import {
    faHtml5,
    faCss3Alt,
    faReact,
    faJs,
    faNodeJs,
    faGit,
    faNpm,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
  import {faPen} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="nav-container">
        <header>
        <img className="logo" src={logo} alt="Igloo Development" style={{backgroundColor: "#000"}}/>
        <nav>
        <ul>
        <li><a href="#!">My Work</a></li>
        <li><a href="#!">My Skills</a></li>
        <li><a href="#!">Contact Me</a></li>
        </ul>
        </nav>
        </header>
        <div className="socialHeader">
        <ul>
        <li><a href="https://github.com/igloo1505"><FontAwesomeIcon className="socialIcon githubIcon" icon={faGithub} /></a></li>
        <li><a href="https://github.com/igloo1505"><FontAwesomeIcon className="socialIcon blogIcon" icon={faPen} /></a></li>
        </ul>
        </div>
            <h3>Yup.. This mothafucka too!</h3>
        </div>
    )
}

export default Navbar
