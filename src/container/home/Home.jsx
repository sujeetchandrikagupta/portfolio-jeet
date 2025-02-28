import React from "react";
import "./Home.css";
import profilephoto from "../../assets/profilephoto.jpg";
import shape from "../../assets/shape-bg.png";
import { useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* scroll-to-top buttom */}
      <button className="scroll-to-home-btn" onClick={scrollToHome}>
        ↑
      </button>

      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* shape-style-start  */}
      <div className="shape">
        <img src={shape} alt="shape-img" />
      </div>

      {/* Main Content */}
      <div id="home" className="home-pg-contant d-flex">
        <div className="home-pg-text">
          <h1>
            Hi, I'M <span className="name"> Sujeet Gupta</span> <br /> A Web
            Developer
          </h1>
          <p>
            As a web developer, I specialize in developing websites and web
            applications
            <br /> using React and Laravel with frontend and backend operations.
          </p>
          <div className="btns d-flex">
          <a href="Hire-Me.pdf" download="Hire_Me.pdf">
            <button className="h-btn1 shadow-lg">
              {" "}
              <b>Hire Me</b>{" "}
            </button>{" "}
            </a>
            <a href="Resume.pdf" download="Sujeet_Gupta.pdf">
            <button className="h-btn2 shadow-lg">
              {" "}
              <b> Get Resume</b>
            </button>
            </a>
          </div>
        </div>
        <div className="circular-border">
          <img className="shadow" src={profilephoto} alt="profilephoto" />
        </div>
      </div>
    </>
  );
}

export default Home;
