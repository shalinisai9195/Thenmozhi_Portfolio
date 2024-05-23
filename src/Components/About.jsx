import React from "react";


const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>About</span>me
      </h1>
      <div className="row">
        <div className="info">
          <h3>
            <span>Name :</span>Thenmozhi L
          </h3>
          <h3>
            <span>Qualification :</span>Bachelor of Computer Application
          </h3>
          <h3>
            <span>Post :</span>FullStack Developer
          </h3>
          <h3>
            <span>Language :</span>English,Tamil
          </h3>
          <a href="https://drive.google.com/file/d/1pvD_44JO5Y2jnSnIqeLiUAPAPrZ54zOi/view?usp=drive_link" target="_blank" >
            <button className="btn">
              Download CV<i className="fas fa-download"></i>
            </button>
          </a>
        </div>
        <div className="couter">
          <div className="box">
            <span>&#60;&#60;1</span>
            <h3>years of experience..</h3>
          </div>
          <div className="box">
            <span>10+</span>
            <h3>completed Projects</h3>
          </div>
        </div>
      </div>
      <h1 className="heading1">
        {" "}
        My<span>skills</span>{" "}
      </h1>
      <div className="row-2">
        <div className="skills">
        <div className="progress">
            <h3>
              {" "}
              JavaScript <span> 75% </span>{" "}
            </h3>
            <div className="bar">
              {" "}
              <span ></span>{" "}
            </div>
          </div>
          <div className="progress">
            <h3>
              {" "}
              Html <span> 90% </span>{" "}
            </h3>
            <div className="bar">
              {" "}
              <span></span>{" "}
            </div>
          </div>
          <div className="progress">
            <h3>
              {" "}
              CSS <span> 80% </span>{" "}
            </h3>
            <div className="bar">
              {" "}
              <span></span>{" "}
            </div>
          </div>
          <div className="progress">
            <h3>
              {" "}
              React <span> 70% </span>{" "}
            </h3>
            <div className="bar">
              {" "}
              <span></span>{" "}
            </div>
          </div>
          <div className="progress">
            <h3>
              {" "}
              NodeJS & Express <span> 60% </span>{" "}
            </h3>
            <div className="bar">
              {" "}
              <span></span>{" "}
            </div>
          </div>
          <div className="progress">
            <h3>
              {" "}
              MongoDB & SQL <span> 70% </span>{" "}
            </h3>
            <div className="bar">
              {" "}
              <span></span>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
