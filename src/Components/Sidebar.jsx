import React from 'react';
import '../Components/style.css';
import imgFace from '../Components/asset/front_girl_logo.webp';


const Sidebar = () => {
  return <header>
    <div className="user">
     <img src={imgFace}/>
     <h3 className="name">Thenmozhi L</h3>
     <p className="role">FullStack Developer</p>
    </div>
    <nav className="navclass">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#portfolio">Works/Projects</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
    </nav>
  </header>
   
}

export default Sidebar