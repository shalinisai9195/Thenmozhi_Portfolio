import React from 'react';
import img1 from './asset/img1.jpg';
import img2 from './asset/img2.jpg';
import Login from './asset/Login.jpg';
import Education from './asset/Education-Consulting.png';
import Junkfood from './asset/cute-junk-food-cartoon-illustration_621619-45.avif';


const Projects = () => {
  return <section className="portfolio" id="portfolio">
    <h1 className="heading">My<span>Portfolio</span></h1>
    <div className="box-container">
    <div className="card" style={{width:'25rem', margin: '15px'}}>
        <img src={img1} className="card-img-top img-sty" alt="calsy"/>
        <div className="card-body">
          <a href="https://github.com/shalinisai9195/Calculator_responsive" target="_blank" 
          className="btn btn-primary own-style">FEnd-SCode</a>
          <a href="https://github.com/shalinisai9195/Calculator_responsive" target="_blank" 
          className="btn btn-primary own-style">BEnd-SCode</a>
          <a href="https://cosmic-pastelito-6cdefe.netlify.app/" target="_blank" 
          className="btn btn-primary dep-url">Deploy-url</a>
        </div>
      </div>
      <div className="card card2-bank" style={{width:'25rem', margin: '15px'}}>
        <img src={img2} className="card-img-top img-sty" alt="calsy"/>
        <div className="card-body">
          <a href="https://github.com/shalinisai9195/Money_managing_frontend" target="_blank" 
          className="btn btn-primary own-style">FEnd-SCode</a>
          <a href="https://github.com/shalinisai9195/Money_managing_BackEnd" target="_blank" 
          className="btn btn-primary own-style">BEnd-SCode</a>
          <a href="https://money-managing-frontend.netlify.app/" target="_blank" 
          className="btn btn-primary dep-url">Deploy-url</a>
        </div>
      </div>
      <div className="card card2-bank" style={{width:'25rem' ,margin: '15px'}}>
        <img src="https://www.smallcase.com/wp-content/uploads/2023/02/Open-Source-URL-Shortner.png" className="card-img-top img-sty" alt="calsy"/>
        <div className="card-body">
          <a href="https://github.com/shalinisai9195/shortener_Url" target="_blank" 
          className="btn btn-primary own-style">FEnd-SCode</a>
          <a href="https://github.com/shalinisai9195/shortener_Url" target="_blank" 
          className="btn btn-primary own-style">BEnd-SCode</a>
          <a href="https://shortner-url-mu9i.onrender.com/" target="_blank" 
          className="btn btn-primary dep-url">Deploy-url</a>
        </div>
      </div>
      <div className="card card2-bank" style={{width: '25rem',margin: '15px'}}>
        <img src={Login} className="card-img-top img-sty" alt="calsy"/>
        <div className="card-body">
          <a href="https://github.com/shalinisai9195/login_FrontEnd" target="_blank" 
          className="btn btn-primary own-style">FEnd-SCode</a>
          <a href="https://github.com/shalinisai9195/login_backEnd" target="_blank" 
          className="btn btn-primary own-style">BEnd-SCode</a>
          <a href="https://polite-sorbet-38af4c.netlify.app/" target="_blank" 
          className="btn btn-primary dep-url">Deploy-url</a>
        </div>
      </div>
      <div className="card" style={{width: '25rem', margin: '15px'}}>
        <img src={Education} className="card-img-top" alt="calsy"/>
        <div className="card-body">
          <a href="https://github.com/shalinisai9195/Nodejs_Student-Mentor-Database" target="_blank" 
          className="btn btn-primary own-style">FEnd-SCode</a>
          <a href="https://github.com/shalinisai9195/Nodejs_Student-Mentor-Database" target="_blank" 
          className="btn btn-primary own-style">BEnd-SCode</a>
          <a href="https://studentsdatabase.onrender.com/" target="_blank" 
          className="btn btn-primary dep-url">Deploy-url</a>
        </div>
      </div>
      <div className="card" style={{width: '25rem',margin: '15px'}}>
        <img src={Junkfood} className="card-img-top" alt="calsy"/>
        <div className="card-body">
          <a href="https://github.com/shalinisai9195/Food_order_app_frontend" target="_blank" 
          className="btn btn-primary own-style">FEnd-SCode</a>
          <a href="https://github.com/shalinisai9195/Food_order_Backend" target="_blank" 
          className="btn btn-primary own-style">BEnd-SCode</a>
          <a href="https://funny-entremet-07c41f.netlify.app/" target="_blank" 
          className="btn btn-primary dep-url">Deploy-url</a>
        </div>
      </div>
   
</div>

 </section>
    
  
}

export default Projects