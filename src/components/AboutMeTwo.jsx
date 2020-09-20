import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { hiking } from "../images";

function AboutMeTwo() {
  return (
    <Container className="container-padding, bottom-padding">
      <Row>
        <Col className="col-align" md={12} lg={6}>
          <img src={hiking} alt="profile-img" width="540" height="400" />
        </Col>
        <Col className="col-align" md={12} lg={6}>
          <div className="about-me-div">
            <h2>Mine hobbyer</h2>
            <p className>
              Jeg bor på Tiller sammen med min samboer og våre to hunder, Milo
              og Zelda. Ved siden av studiene liker jeg å bruke tiden ut i
              naturen eller i sofaen med spaken til en spillkonsoll. Jeg bor på
              Tiller sammen med min samboer og våre to hunder, Milo og Zelda.
              Ved siden av studiene liker jeg å bruke tiden ut i naturen eller i
              sofaen med spaken til en spillkonsoll. Jeg bor på Tiller sammen
              med min samboer og våre to hunder, Milo og Zelda. Ved siden av
              studiene liker jeg å bruke tiden ut i naturen eller i sofaen med
              spaken til en spillkonsoll.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMeTwo;
