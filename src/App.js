import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Estimaton from './pages/Estimaton';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Content from './context/ContentContext';
import { useEffect } from 'react';

function App() {
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div className="App">
      <Content>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/details' element={<Estimaton />} />
      </Routes>
    </Content>  
    </div>
  );
}

export default App;
