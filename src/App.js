import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import DreamHome from './components/DreamHome/DreamHome';
import FeatureCard from './components/FeatureCard/FeatureCard';
import Header from './components/Header/Header';
import Modern from './components/Modern/Modern';
import Navbar from './components/NavBar/Navbar';
import Ourteam from './components/OurTeam/Ourteam';
import Partners from './components/Partners/Partners';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Banner />
      <FeatureCard />
      <AboutUs />
      <Partners />
      <Testimonial />
      <DreamHome />
    </div>
  );
}

export default App;
