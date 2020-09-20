import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import CvPdf from "../assets/cv.pdf";
import { Row, Col } from "react-bootstrap";

function CvComponent() {
  return (
    <div>
      <NavBar />
      <div className="cv-div">
        <Row>
          <h2>Min CV</h2>
        </Row>
        <Row>
          <p>Hvis du ønsker å se min CV, kan du laste den ned her: </p>
        </Row>
        <Row>
          <Col align="center">
            <Link to={CvPdf} target="_blank" download>
              <button className="cv-btn">Last ned</button>
            </Link>
          </Col>
        </Row>
      </div>
      <div style={{ height: 530 }}></div>
    </div>
  );
}

export default CvComponent;
