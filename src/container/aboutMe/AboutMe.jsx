import React from "react";
import "./AboutMe.css";
import profilephoto from "../../assets/profilephoto.jpg";


const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="about-title" >
        <h1>About me</h1>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profilephoto} alt="about img 2" />
        </div>

        <div className="about-right">
            <p>
              {" "}
              Hello, I am Sujeet Gupta. As a frontend developer, I create attractive and user-friendly websites and web applications.I have a strong foundation in HTML, CSS and JavaScript and I specialize in building responsive and interactive website and web applications, using React and Laravel.
            </p>
            <p>
              {" "}
              My web development journey started with a curiosity about how websites are made and turned into a full career. I enjoy solving complex problems with simple, beautiful solutions and i am always excited to take on new challenges and projects.
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
