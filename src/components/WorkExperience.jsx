import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { workImg } from "../images";

function WorkExperience() {
  return (
    <Container className="container-padding">
      <Row>
        <div className="div-header-left">
          <h2>Arbeidserfaring</h2>
        </div>
      </Row>
      <Row>
        <Col className="col-padding" md={12} lg={6}>
          <p className="div-paragraph">
            Jeg fikk mitt første møte med arbeidslivet allerede når jeg var 14
            år og har siden det hatt flere jobber, både som deltidsansatt og
            sommervikar. Dette har gitt meg god erfaring med å samarbeide med
            ulike typer mennesker og et ønske om å gjøre arbeidsoppgavene mine
            så godt som mulig. Jeg drives av mestringsfølelsen man får av å
            lykkes med arbeidsoppgaver og få positive tilbakemeldinger. For
            eksempel når jeg jobbet på Kappahl hadde vi flere konkurranser med
            andre butikker rundt om i landet, og selv om Namsos har en liten
            butikk toppet vi listene for mengde mersalg. I februar 2018 fikk jeg
            stillingen som prosjektkoordinator ved IWMAC AS, der
            arbeidsoppgavene mine innebærer tegning og design av
            brukergrensesnitt. Jeg trives ekstremt godt med deltidsjobben min og
            ønsker å beholde denne frem til studieslutt i 2022. Noe av det jeg
            liker best med IWMAC er at de har et svært godt arbeidsmiljø, der
            man kan føle seg trygg og hjelpe hverandre. Dette er viktige
            faktorer for meg når jeg ser etter videre jobb i fremtiden.
          </p>
        </Col>
        <Col className="col-align col-padding" md={12} lg={6}>
          <img src={workImg} alt="work-img" width="350" height="290" />
        </Col>
      </Row>
    </Container>
  );
}

export default WorkExperience;
