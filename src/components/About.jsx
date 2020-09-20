import React from "react";
import NavBar from "./NavBar";
import "./index.css";
import AboutMeOne from "./AboutMeOne";
import AboutMeTwo from "./AboutMeTwo";
import Education from "./Education";
import { hiking, drawing, profile } from "../images";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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

//I'm studying my 4th year of a M.Sc. in Computer Science degree at NTNU in Trondheim, where i specialize in Artificial Intelligence. Studying here offers great experience with new and interesting challenges everyday.
//I'm from Sykkylven, a small place in Sunnmøre surrounded by mountains and fjords. When I'm at home I like to socialize with friends and family, go hiking, and re-charge for another semester in Trondheim.

const Gallery = () => {
  const handleOnDragStart = (e) => e.preventDefault();
  return (
    <AliceCarousel mouseTrackingEnabled>
      <img
        src={hiking}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
        alt="hiking-img"
        style={{ width: 100, height: 100 }}
      />
      <img
        src={profile}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
        alt="profile-img"
        style={{ width: 100, height: 100 }}
      />
      <img
        src={drawing}
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
        alt="drawing-img"
        style={{ width: 100, height: 100 }}
      />
    </AliceCarousel>
  );
};

export { Gallery };
