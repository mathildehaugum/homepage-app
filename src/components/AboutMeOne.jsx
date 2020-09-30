import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { drawing } from "../images";

function AboutMeOne() {
  return (
    <Container className="about1-container">
      <Row>
        <div className="div-header-left">
          <h2>Om meg</h2>
        </div>
      </Row>
      <Row>
        <Col md={12} lg={6} className="col-margin">
          <p className="div-paragraph">
            Jeg heter Mathilde, er 24 år og kommer fra Namsos som er en liten by
            tre timer nord for Trondheim. I løpet av oppveksten har jeg alltid
            vært interessert i teknologi og problemløsning, og jeg har hatt en
            sterk indre motivasjon for å jobbe hardt med skolearbeid. Etter å ha
            fullført videregående flyttet jeg til Trondheim for å begynne på
            masterstudiet i Nanoteknologi ved NTNU. Her ble jeg kjent med mange
            hyggelige medstudenter og lærte mye om fremtidens teknologi.
            Samtidig hadde jeg mitt første møte med programmering innenfor emnet
            ITGK og dette ga mersmak. Etterhvert som vi fikk høre om kunstig
            intelligens, IoT, programvaresikkerhet, maskinlæring og big data
            kjente jeg et sterkt behov for å lære mer om disse områdene. Derfor
            tok jeg avgjørelsen å bytte over til masterstudiet Datateknologi ved
            NTNU, og jeg har ikke angret siden. Nå går jeg på mitt fjerde år med
            spesialisering innenfor kunstig intelligens, og jeg trives svært
            godt med dette. Jeg gleder meg til arbeidslivet og er spent på alt
            jeg skal lære i fremtiden.
          </p>
        </Col>
        <Col className="col-align col-margin" md={12} lg={6}>
          <img src={drawing} alt="profile-img" width="420" height="400" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMeOne;
