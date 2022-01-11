import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import FeatureCard from './components/FeatureCard/FeatureCard';
import Header from './components/Header/Header';
import Modern from './components/Modern/Modern';
import Navbar from './components/NavBar/Navbar';
import Partners from './components/Partners/Partners';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Banner />
      <FeatureCard />
      <AboutUs />
      <Partners />
      <Modern />
    </div>
  );
}

export default App;
