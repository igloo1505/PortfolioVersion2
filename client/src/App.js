import './css/App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedSection from './components/FeaturedSection'
import SkillsSection from './components/SkillsSection'
import PortfolioSection from './components/PortfolioSection'


function App() {
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
