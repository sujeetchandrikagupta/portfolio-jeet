import React from "react";
import "./App.css";
import Home from "./container/home/Home";
import AboutMe from "./container/aboutMe/AboutMe";
import Skill from "./container/skills/Skill";
import ContactMe from "./container/contactMe/ContactMe";
import BottomBar from "./container/bottomBar/BottomBar";

function App() {
  return (
      <div className="main">
        <Home/>
        <AboutMe />
        <Skill/>
        <ContactMe />
        <BottomBar />
      </div>
  );
}
export default App;
