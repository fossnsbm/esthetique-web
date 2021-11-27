import HomeSection from './components/HomeSection';
import IntroSection from './components/IntroSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="GradientEclipse" ></div>
      <div className="BackgroundLogomark" >
        <HomeSection></HomeSection>
        <IntroSection></IntroSection>
      </div>
    </div>
  );
}

export default App;
