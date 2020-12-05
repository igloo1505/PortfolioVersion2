import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import {skillsArray, AppColors} from '../UniversalData'
import skillImageOne from '../assets/skillImageOne.png'
import SkillCard from './SkillCard'

const SkillsSection = () => {
    const imageArray = [
        skillImageOne
    ]
    return (
        <section className="skills" style={{ background: AppColors.skillsBodyColor}}>
        <div className="skills-container">
        <ul>
        {skillsArray.map(s => (<SkillCard skill={s}/>))}
        </ul>

        </div>
        </section>
    )
}

export default SkillsSection
