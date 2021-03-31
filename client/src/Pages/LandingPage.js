import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactModal from "../components/ContactModal";

const LandingPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <Navbar
        setModalIsOpen={setModalIsOpen}
        open={modalIsOpen}
        currentPath="landing"
      />
      <HeroSection />
      <FeaturedSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactModal open={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default LandingPage;
