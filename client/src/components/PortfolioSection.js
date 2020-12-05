import React from 'react'
import {portfolioArray, HeroImagePallet} from '../UniversalData'
import portfolioImageOne from '../assets/portfolioImageOne.png'

const PortfolioSection = () => {
    const imageArray = [
        portfolioImageOne
    ]
    return (
        <section className="portfolio">
        {portfolioArray.map(p => (
            <div className="portfolio-container transition3">
            <div className={`portfolio-${p.orientation}`}>
            <div className="inner">
            <p className="subtitle" style={{color: HeroImagePallet.secondary}}>{p.appName}</p>
            <p className="featured-title" >{p.subTitle}</p>
            <p className="featured-desc">{p.description}</p>
            </div>
            </div>
            <a href="#!"><img src={imageArray[p.index]} alt="Portfolio Image"/></a>            
            </div>
            ))
        }
        </section>
    )
}

export default PortfolioSection
