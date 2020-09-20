import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { drawing } from "../images";

function AboutMeOne() {
  return (
    <Container className="container-padding">
      <Row>
        <Col className="col-align" md={12} lg={6}>
          <div className="about-me-div">
            <h2>Om meg</h2>
            <p className>
              Jeg heter Mathilde, er 24 år og går på fjerde året på
              Datateknologi ved NTNU. Jeg har valgt spesialisering innenfor
              Kunstig Intelligens, og blir stadig utfordret med nye og
              interessante teknologier. Før jeg begynte på Datateknologi
              studerte jeg fire år på Nanoteknologi ved NTNU. Jeg har alltid
              vært glad i teknologi og ser frem til å delta i fremtidig
              utvikling av innovative produkter. Jeg heter Mathilde, er 24 år og
              går på fjerde året på Datateknologi ved NTNU. Jeg har valgt
              spesialisering innenfor Kunstig Intelligens, og blir stadig
              utfordret med nye og interessante teknologier. Før jeg begynte på
              Datateknologi studerte jeg fire år på Nanoteknologi ved NTNU. Jeg
              har alltid vært glad i teknologi og ser frem til å delta i
              fremtidig utvikling av innovative produkter.
            </p>
          </div>
        </Col>
        <Col className="col-align" md={12} lg={6}>
          <img src={drawing} alt="profile-img" width="420" height="400" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMeOne;
