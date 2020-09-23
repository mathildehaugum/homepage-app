import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { hiking } from "../images";

function AboutMeTwo() {
  return (
    <Container className="bottom-padding top-padding">
      <Row>
        <Col className="col-align col-padding" md={12} lg={6}>
          <img src={hiking} alt="profile-img" width="500" height="360" />
        </Col>
        <Col className="col-padding" md={12} lg={6}>
          <div className="div-header-right">
            <h2>Mine hobbyer</h2>
            <p className="div-paragraph">
              Jeg bor på Tiller sammen med min samboer, Espen, og våre to
              hunder, Milo og Zelda. Jeg har alltid vært svært glad i dyr og har
              vokst opp med en familiehund. Derfor var det en stor glede når vi
              fikk muligheten til å få våre egne hunder, og jeg bruker mye tid
              på å trene og være med dem. Livet med hund har også gjort at jeg
              har blitt svært glad i tur og friluftsliv, og i helgene befinner
              jeg meg ofte på fjellet med en stor sekk som rommer sovepose, telt
              og primusen. Dersom jeg ikke er ute å farter kan jeg gjerne bruke
              tid på dataspill, og utviklingen innenfor spillteknologi har vært
              en bidragsyter til min nysgjerrighet innenfor teknologi. I løpet
              av den siste tiden har jeg også lært mye om utvikling av
              nettapplikasjoner gjennom et kurs på udemy, og jeg har brukt mye
              av tiden ved siden av deltidsjobb og studie på å videreutvikle
              mine ferdigheter innenfor web utvikling.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMeTwo;
