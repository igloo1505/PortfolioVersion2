import React from "react";
import { portfolioArray, HeroImagePallet } from "../UniversalData";
import PortfolioPiece from "../components/PortfolioPiece";

const PortfolioSection = () => {
  return (
    <section className="portfolio">
      {portfolioArray.map((p) => (
        <PortfolioPiece key={p.appName} p={p} />
      ))}
    </section>
  );
};

export default PortfolioSection;
