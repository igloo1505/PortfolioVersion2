import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/white_logo_transparent_background.png'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import Burger from '@animated-burgers/burger-squeeze' 
import {gsap} from "gsap"
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
    const [burgerIsOpen, setBurgerIsOpen] = useState(false)
    const handleBurgerClick = () => {
        if(!burgerIsOpen){
            gsap.to(".slideOutDiv", {
                duration: 0.5,
                x: -230
            })
            let el = document.getElementsByClassName("burger-lines");
            el[0].classList.add("burgerWasClicked")
            console.log(el[0])
        }
        if(burgerIsOpen){
            gsap.to(".slideOutDiv", {
                duration: 1,
                x: 230
            })
            let el = document.getElementsByClassName("burger-lines");
            el[0].classList.remove("burgerWasClicked")
        }
        setBurgerIsOpen(!burgerIsOpen)
        console.log(burgerIsOpen)
    }
    return (
        <div className="nav-container">
        <header>
        <i class="logoFont">Igl<span className="innerLogoText">ooDevelo</span>pment</i>
        <nav>
        <ul className="inlineNavUl">
        <li className="inlineNavLinks"><a href="#!">My Work</a></li>
        <li className="inlineNavLinks"><a href="#!">My Skills</a></li>
        <li className="inlineNavLinks"><a href="#!">Contact Me</a></li>
        <li className="burgerButtonLi">
        <Burger className="burgerButton" isOpen={ burgerIsOpen } onClick={handleBurgerClick}/>
        </li>
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
        <div className="slideOutDiv">
        <ul className="slideOutMenu">
        <li className="slideOutMenuItem">
        <a href="#!">My Skills</a>
        </li>
        <li className="slideOutMenuItem">
        <a href="#!">My Work</a>
        </li>
        <li className="slideOutMenuItem">
        <a href="#!">Contact Me</a>
        </li>
        </ul>
        </div>
        </div>
    )
}

export default Navbar
