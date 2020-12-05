import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import TechIcons from '../assets/TechIcons'
import {codeSymbolSvg, swiftSvg} from '../assets/svg'
import googleAnalyticsSvg from '../assets/googleAnalyticsSvg.svg'

const SkillCard = ({skill}) => {

    return (
        <div>
        <li key={skill.title} className="transition3">
        <div className={`icon-container ${skill.classIndex}`}>
        {skill.type === "MobileDevelopment" && swiftSvg()}
        {skill.type === "FrontendDesign" && <TechIcons/>}
        {skill.type === "BusinessTechnologies" && <img className="googleAnaltyicsIcon" src={googleAnalyticsSvg} alt="Google Analytics"/>}
        </div>
        <p className="skill-title">{skill.title}</p>
        <p className="featured-desc skill-desc">{skill.desc}</p>
            </li>
        </div>
    )
}

export default SkillCard
