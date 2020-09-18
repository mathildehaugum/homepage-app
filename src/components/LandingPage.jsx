import React from "react";
import "./index.css";
import NavBarComponent from "./NavBarComponent";
import MiddleContainerComponent from "./MiddleContainerComponent";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div>
      <NavBarComponent />
      <MiddleContainerComponent />
      <Footer />
    </div>
  );
}

export default LandingPage;
