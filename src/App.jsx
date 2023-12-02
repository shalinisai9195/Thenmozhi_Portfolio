import React from 'react';
import './Components/style.css';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import '././Components/style.css';


const App = () => {
  
return <>
      <div className="cursor-1"></div>
      <div className="cursor-2"></div>
      <Sidebar/>
      <div id="menu" className="fas fa-bars"></div>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
      
    </>
    
  
}

export default App