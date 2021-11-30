import HomeSection from "./components/HomeSection";
import IntroSection from "./components/IntroSection";
import PrizesSection from "./components/PrizesSection";
import TwitterSection from "./components/TwitterSection";
import SponsorSection from "./components/SponsorSection";
import RegisterSection from "./components/RegisterSection";
import NavbarSection from "./components/NavbarSection";
import FooterSection from "./components/FooterSection";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="GradientEclipse" />
        <div className="BackgroundLogomark">
          <NavbarSection />
          <HomeSection />
          <IntroSection />
          <PrizesSection />
          <SponsorSection />
          <TwitterSection />
          <div className="GradientEclipseFooter" />
          <RegisterSection />
          <FooterSection />
        </div>
      </div>
    </Router>
  );
}

export default App;
