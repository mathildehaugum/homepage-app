import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { workImg } from "../images";

function WorkExperience() {
  return (
    <Container className="container-padding">
      <Row>
        <Col className="col-align" md={12} lg={6}>
          <div className="about-me-div">
            <h2>Arbeidserfaring</h2>
            <p className>
              Jeg fikk min første jobb allerede når jeg var 14 år, og har siden
              hatt flere jobber både deltid og ila. sommeren. Jeg fikk min
              første jobb allerede når jeg var 14 år, og har siden hatt flere
              jobber både deltid og ila. sommeren.Jeg fikk min første jobb
              allerede når jeg var 14 år, og har siden hatt flere jobber både
              deltid og ila. sommeren.Jeg fikk min første jobb allerede når jeg
              var 14 år, og har siden hatt flere jobber både deltid og ila.
              sommeren.Jeg fikk min første jobb allerede når jeg var 14 år, og
              har siden hatt flere jobber både deltid og ila. sommeren.Jeg fikk
              min første jobb allerede når jeg var 14 år, og har siden hatt
              flere jobber både deltid og ila. sommeren.Jeg fikk min første jobb
              allerede når jeg var 14 år, og har siden hatt flere jobber både
              deltid og ila. sommeren.
            </p>
          </div>
        </Col>
        <Col className="col-align" md={12} lg={6}>
          <img src={workImg} alt="profile-img" width="360" height="300" />
        </Col>
      </Row>
    </Container>
  );
}

export default WorkExperience;
