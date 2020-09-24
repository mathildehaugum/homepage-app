import React from "react";
import { Row, Container, Col } from "react-bootstrap";

function Education() {
  return (
    <Container className="education-container">
      <Row>
        <h2 className="div-header-left">Min utdanning</h2>
      </Row>
      <Row>
        <Col sm={12} lg={4}>
          <div className="education-card">
            <h4>
              Datateknologi <span className="education-year">[2018-2022]</span>
            </h4>
            <p>
              Jeg studerer 4. året på Datateknologi ved NTNU i Trondheim med
              spesialisering innenfor Kunstig Intelligens. Motivasjonen for å
              starte på studiet var et sterkt ønske om å lære mer om
              programmering og kunne bidra i utviklingen av fremtidens
              teknologier.
            </p>
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <div className="education-card">
            <h4>
              Nanoteknologi <span className="education-year">[2014-2018]</span>
            </h4>
            <p>
              Jeg studerte i 3.5 år på Nanoteknologi ved NTNU i Trondheim. Det
              var interessen for realfag og nysgjerrigheten for hva som skjer
              ved nanoskala som gjorde at jeg valgte dette studiet. Siden
              studiet er så tverrfaglig, fikk jeg innblikk i mange ulike
              fagområder.
            </p>
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <div className="education-card">
            <h4>
              VGS
              <span className="education-year"> [2011-2014]</span>
            </h4>
            <p>
              Jeg gikk studiespesialisering ved Olav Duun Videregående skole med
              fokus på realfag. Årsaken til dette valget var et ønske om å bli
              sivilingeniør og en interesse for matte, biologi og fysikk. Årene
              på videregående økte motivasjonen for å lære mer om
              teknologiutvikling.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
