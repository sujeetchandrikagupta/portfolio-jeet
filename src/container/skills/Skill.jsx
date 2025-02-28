import React from "react";
import "./skill.css";

const Skill = () => {
  return (
   <div className="container py-4" >
     <h1 id="skill" className="heading ">Programming Skills</h1>

    <div className="grid-container px-5 py-5">
      <div className="grid-item"> <div className="about-skill"><p>HTML</p><hr style={{ width: "70%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>CSS</p><hr style={{ width: "60%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>JavaScript</p><hr style={{ width: "50%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>MySql</p><hr style={{ width: "45%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>PHP</p><hr style={{ width: "65%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>React JS</p><hr style={{ width: "35%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>Node JS</p><hr style={{ width: "50%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>Bootstrap</p><hr style={{ width: "65%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>Tailwind</p><hr style={{ width: "30%" }}/></div></div>
    </div>

    </div>
  );
};

export default Skill;
