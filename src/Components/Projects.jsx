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
    {/* <div className="card" style={{width:'25rem', margin: '15px'}}>
        <img src={img1} className="card-img-top img-sty" alt="calsy"/>
        <div className="card-body">
          <a href="https://github.com/shalinisai9195/Calculator_responsive" target="_blank" 
          className="btn btn-primary own-style">FEnd-SCode</a>
          <a href="https://github.com/shalinisai9195/Calculator_responsive" target="_blank" 
          className="btn btn-primary own-style">BEnd-SCode</a>
          <a href="https://cosmic-pastelito-6cdefe.netlify.app/" target="_blank" 
          className="btn btn-primary dep-url">Deploy-url</a>
        </div>
    </div> */}
      <div className="card card2-bank" style={{width:'25rem', margin: '15px'}}>
      <h3 style={{textAlign:"center",fontFamily:"Arial",fontWeight:"bold"}}>Money_Tracker</h3>
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
        <h3 style={{textAlign:"center",fontFamily:"Arial",fontWeight:"bold"}}>My Blogs</h3>
        <img src="https://www.agencycentral.co.uk/sites/default/files/techbloggers.jpg" className="card-img-top img-sty" alt="calsy"/>
        <div className="card-body">
          
          <a href="https://github.com/shalinisai9195/Blogs_FrontEnd" target="_blank" 
          className="btn btn-primary own-style">FEnd-SCode</a>
          <a href="https://github.com/shalinisai9195/Blogs_BackEnd" target="_blank" 
          className="btn btn-primary own-style">BEnd-SCode</a>
          <a href="https://myblogs-frontend.netlify.app/" target="_blank" 
          className="btn btn-primary dep-url">Deploy-url</a>
        </div>
      </div> 
      <div className="card card2-bank" style={{width: '25rem',margin: '15px'}}>
      <h3 style={{textAlign:"center",fontFamily:"Arial",fontWeight:"bold"}}>Recipe_Books</h3>
        <img src="https://www.printablee.com/postpic/2010/02/printable-cookbook-cover-designs_220998.jpg" className="card-img-top img-sty" alt="calsy"/>
        <div className="card-body">
          <a href="https://github.com/shalinisai9195/Recipe_Books" target="_blank" 
          className="btn btn-primary own-style">FEnd-SCode</a>
          <a href="https://github.com/shalinisai9195/RecipeBooks_BackEnd" target="_blank" 
          className="btn btn-primary own-style">BEnd-SCode</a>
          <a href="https://snazzy-custard-3381f6.netlify.app/" target="_blank" 
          className="btn btn-primary dep-url">Deploy-url</a>
        </div>
      </div>
      <div className="card card2-bank" style={{width: '25rem',margin: '15px'}}>
        <h3 style={{textAlign:"center",fontFamily:"Arial",fontWeight:"bold"}}>Movie_Booking_App</h3>
        <img src={"https://hirharang.com/wp-content/uploads/2018/07/Movie-Ticket-Booking-Online.jpg"} 
        style={{height:"255px"}} 
        className="card-img-top" alt="booking"/>
        <div className="card-body">
          <a href="https://github.com/shalinisai9195/Movie_Booking_FrontEnd" target="_blank" 
          className="btn btn-primary own-style">FEnd-SCode</a>
          <a href="https://github.com/shalinisai9195/Movie_Booking_BackEnd" target="_blank" 
          className="btn btn-primary own-style">BEnd-SCode</a>
          <a href="https://movie-booking-app-fend.netlify.app" target="_blank" 
          className="btn btn-primary dep-url">Deploy-url</a>
        </div>
      </div>
      <div className="card card2-bank" style={{width: '25rem',margin: '15px'}}>
        <h3 style={{textAlign:"center",fontFamily:"Arial",fontWeight:"bold"}}>Food_Order</h3>
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
      <div className="card card2-bank" style={{width: '25rem', margin: '15px'}}>
      <h3 style={{textAlign:"center",fontFamily:"Arial",fontWeight:"bold"}}>Student_Database</h3>
        <img src={Education} className="card-img-top" alt="calsy"/>
        <div className="card-body">
          <a href="https://github.com/shalinisai9195/Nodejs_Student-Mentor-Database" target="_blank" 
          className="btn btn-primary own-style">BEnd-SCode</a>
          <a href="https://studentsdatabase.onrender.com/" target="_blank" 
          className="btn btn-primary dep-url">Deploy-url</a>
        </div>
      </div>
   
</div>

 </section>
    
  
}

export default Projects