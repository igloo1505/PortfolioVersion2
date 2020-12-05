import React, {useState, useEffect} from 'react'
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
import {AppColors} from '../UniversalData'
import {gitHubSvg, linkedInSvg, mediumSvg} from '../assets/svg'

//   TODO Change second link to blog link in socialHeader list
//   TODO Add hamburger menu for mobile
const Navbar = () => {
    return (
        <div className="nav-container">
        <header>
        <img className="logo" src={logo} alt="Igloo Development" />
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
        <li><a href="https://github.com/igloo1505">{gitHubSvg("#000")}</a></li>
        <li><a href="https://github.com/igloo1505">{linkedInSvg("#000", "auto", "auto")}</a></li>
        <li><a href="https://github.com/igloo1505">{mediumSvg("#000", "auto", "auto")}</a></li>
        
        </ul>
        </div>
        </div>
    )
}

export default Navbar
