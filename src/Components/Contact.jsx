import React from 'react';
import '../Components/style.css';
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";


const Contact = () => {

return <section className="contact" id="contect">
    <h1 className="heading"><span>Contact</span>me</h1>
    <div className="row">
      <div className="content">
        <h3 className="title">Contact info</h3>
       <div className="info">
             <h3><i className="fas fa-envelope"></i>shalinisai9195@gmail.com</h3>
             <h3><i className="fas fa-phone"></i>+91 988-443-0375</h3>
             <h3><i className="fas fa-map-marker-alt"></i>Chennai-600077, India.</h3>
       <div className="social-media">
          <a href="https://www.google.com/" target='_blank'><AiFillGoogleCircle /></a>
          <a href="https://www.youtube.com/" target='_blank'><FaYoutube/></a>  
          <a href="https://www.twitter.com/" target='_blank'><FaTwitterSquare /></a> 

       </div>
       </div>

      </div>
      <form onSubmit={(e)=> SendMail(e)}>
      <input type="text" placeholder="name" className="box" id="fullName"/>
        <input type="email" placeholder="email" className="box" id="email_id"/>
        <input type="text" id="project" placeholder="Project" className="box"/>
        <textarea cols="30" rows="10" className="box message" id="message" placeholder="message"></textarea>
        <button className="btn">send<i className="fas fa-paper-plane"></i></button>
      </form>
    </div>
  </section>
}

export default Contact;