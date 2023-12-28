import React from 'react';
import '../Components/style.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";



const Contact = () => {

  function SendMail(event){
    event.preventDefault() 
    emailjs.init('nVHOH2oG6GwI4Pdc7');
    let parms = {
    
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        project: document.getElementById("project").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_3ywvtgh","template_243rb0i",parms).then(function (res){
        document.getElementById("fullName").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("project").value = "";
        document.getElementById("message").value = "";
  
        console.log(res);
        alert("success!"+res.status);
    }).catch((err)=>{
       console.log(err);
    })
    
    }

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
          
          <a href="https://www.linkedin.com/in/thenmozhi-l-57334a292/" target='_blank'><FaLinkedin /></a>  
          <a href="https://github.com/shalinisai9195" target='_blank'><FaGithub /></a>
         
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