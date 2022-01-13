import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Estimaton from './pages/Estimaton';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='estimation' element={<Estimaton />} />
      </Routes>
    </div>
  );
}

export default App;
