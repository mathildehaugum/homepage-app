import React from "react";
import NavBar from "./NavBar";
import "./index.css";
import AboutMeOne from "./AboutMeOne";
import AboutMeTwo from "./AboutMeTwo";
import Education from "./Education";

function About() {
  return (
    <div>
      <NavBar />
      <AboutMeOne />
      <Education />
      <AboutMeTwo />
    </div>
  );
}

export default About;
