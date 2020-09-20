import React from "react";
import { Row, Container, Col } from "react-bootstrap";

function Education() {
  return (
    <Container className="container-padding">
      <Row>
        <h2 className="education-header">Min utdanning</h2>
      </Row>
      <Row>
        <Col sm={12} lg={4} className="coloumn-padding">
          <div className="education-card">
            <h4>
              Datateknologi <span className="education-year">[2018-2022]</span>
            </h4>
            <p>
              Jeg studerer Datateknologi ved NTNU med spesialisering innenfor
              Kunstig Intelligens. Det var interessen for programmering og
              teknologi som gjorde at jeg valgt denne studieretningen og jeg
              trives svært godt.
            </p>
          </div>
        </Col>
        <Col sm={12} lg={4} className="coloumn-padding">
          <div className="education-card">
            <h4>
              Nanoteknologi <span className="education-year">[2014-2018]</span>
            </h4>
            <p>
              Jeg studerte Nanoteknologi med retning innenfor bionano i fire år.
              Det var interessen for teknologi som gjorde at jeg valgt denne
              studieretningen og jeg trives svært godt.
            </p>
          </div>
        </Col>
        <Col sm={12} lg={4} className="coloumn-padding">
          <div className="education-card">
            <h4>
              Studiespesialisering
              <span className="education-year"> [2011-2014]</span>
            </h4>
            <p>
              I perioden 2011-2014 gikk jeg på studiespesialisering ved Olav
              Duun i Namsos. Jeg tok flere emner innenfor realfag og det ble
              begynnelsen for min interesse for teknologi og vitenskap.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
