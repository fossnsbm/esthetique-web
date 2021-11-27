import HomeSection from './components/HomeSection';
import IntroSection from './components/IntroSection';
import PrizesSection from './components/PrizesSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="GradientEclipse" ></div>
      <div className="BackgroundLogomark" >
        <HomeSection></HomeSection>
        <IntroSection></IntroSection>
        <PrizesSection></PrizesSection>
      </div>
    </div>
  );
}

export default App;
