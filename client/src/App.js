import React, {useEffect} from 'react'
import './css/App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedSection from './components/FeaturedSection'
import SkillsSection from './components/SkillsSection'
import PortfolioSection from './components/PortfolioSection'
import {gsap} from 'gsap'
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {animateOnScroll} from './animations/scrollTriggerFunctions'



function App() {
  useEffect(() => {
    gsap.registerPlugin(EaselPlugin, MotionPathPlugin, ScrollToPlugin, ScrollTrigger);
    animateOnScroll()
  }, [])

  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <FeaturedSection/>
    <SkillsSection/>
    <PortfolioSection/>
    </div>
  );
}

export default App;
