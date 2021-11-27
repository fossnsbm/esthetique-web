import HomeSection from './components/HomeSection';
import IntroSection from './components/IntroSection';
import PrizesSection from './components/PrizesSection';
import TwitterSection from './components/TwitterSection';
import Sponsor from './components/SponsorSection';
import RegisterSection from './components/RegisterSection';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="GradientEclipse" ></div>
      <div className="BackgroundLogomark" >
        <HomeSection></HomeSection>
        <IntroSection></IntroSection>
        <PrizesSection></PrizesSection>
        <Sponsor></Sponsor>
        <TwitterSection></TwitterSection>
        <RegisterSection></RegisterSection>
      </div>
    </div>
  );
}

export default App;
