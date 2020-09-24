import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import CvPdf from "../assets/cv.pdf";

function CvComponent() {
  return (
    <div>
      <NavBar />
      <div className="cv-div wrapper">
        <p>
          Hvis du ønsker å se min CV, kan du laste den ned{" "}
          <Link to={CvPdf} target="_blank" download>
            her
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default CvComponent;
