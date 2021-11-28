import HomeSection from './components/HomeSection';
import IntroSection from './components/IntroSection';
import PrizesSection from './components/PrizesSection';
import TwitterSection from './components/TwitterSection';
import SponsorSection from './components/SponsorSection';
import RegisterSection from './components/RegisterSection';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="GradientEclipse" ></div>
      <div className="BackgroundLogomark" >
        <HomeSection></HomeSection>
        <IntroSection></IntroSection>
        <PrizesSection></PrizesSection>
        <SponsorSection></SponsorSection>
        <TwitterSection></TwitterSection>
        <RegisterSection></RegisterSection>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
