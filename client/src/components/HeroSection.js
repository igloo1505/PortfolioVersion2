import React from 'react'
import {heroText} from '../UniversalData'

const HeroSection = () => {
    return (
        <div className="hero">
        <section className="content">
        {heroText()}
        <div className="prompt">
        <p>Learn More Below</p>
        </div>
        </section>
        </div>
    )
}

export default HeroSection
