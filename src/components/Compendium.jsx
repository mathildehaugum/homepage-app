import React from "react";
import {
  algdatPDF,
  databasePDF,
  infosysPDF,
  introaiPDF,
  mmiPDF,
  osPDF,
  progsikkPDF,
} from "../assets/";
import {
  algdatIMG,
  progsikkIMG,
  introAIIMG,
  databaseIMG,
  infosysIMG,
  mmiIMG,
  osIMG,
} from "../images";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";

function Compendium() {
  return (
    <div>
      <Container>
        <div className="compendium-header">
          <h2>Kompendium</h2>
          <p>
            I løpet av mine år på NTNU har jeg skrevet flere kompendier innenfor
            ulike emner. Grunnen til at jeg har skrevet disse er at jeg synes
            det er en god ressurs å ha når man kommer ut i arbeidslivet. Disse
            kompendiene inneholder mine egne forklaringer på utfordrende
            konseper, noe som gjør det at det blir enklere å sette seg inn i
            disse på nytt ved et senere tidspunkt. Følgende er et utvalg av mine
            kompendier som er relevant til datateknologi.
          </p>
        </div>
      </Container>
      {/*Algoritmer og datastrukturer*/}
      <div
        className="compendium-div"
        style={{ paddingTop: 10, backgroundColor: "#21364b" }}
      >
        <img
          className="compendium-image"
          src={algdatIMG}
          alt="profile-img"
          width="420"
          height="380"
        />
        <h3 className="compendium-title">Algoritmer og Datastrukturer</h3>
        <h4 className="compendium-time" style={{ color: "#436485" }}>
          Høsten 2018
        </h4>
        <Container>
          <Col className="compendium-desc" sm={12} md={8}>
            <p>
              I dette emnet lærte vi metoder for å analysere effektiviteten til
              algoritmer innenfor ordning, søking og sortering av datamengder.
              Dette var et utfordrende og svært lærerikt fag, og jeg likte at
              det var fokus på forståelse i stedet for pugging.
            </p>
          </Col>
        </Container>
        <Link to={algdatPDF} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "#436485" }}
          >
            Last ned
          </button>
        </Link>
      </div>
      {/*Programvaresikkerhet*/}
      <div className="compendium-div" style={{ backgroundColor: "#f76160" }}>
        <img
          className="compendium-image"
          src={progsikkIMG}
          alt="profile-img"
          width="420"
          height="390"
        />
        <h3 className="compendium-title">Programvaresikkerhet</h3>
        <h4 className="compendium-time" style={{ color: "#f59292" }}>
          Våren 2020
        </h4>
        <Container>
          <Col className="compendium-desc" sm={12} md={8}>
            <p>
              Dette er et av de mest spennende emnene jeg har hatt ved NTNU. Vi
              lærte om sikkerhetens rolle i SDLC, og vi fikk i oppgave å bruke
              OWASP testguide og Risk Management Framework for å finne
              utplasserte sårbarheter ved en gitt nettside.
            </p>
          </Col>
        </Container>
        <Link to={progsikkPDF} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "#f59292" }}
          >
            Last ned
          </button>
        </Link>
      </div>
      {/*Introduksjon AI*/}
      <div className="compendium-div" style={{ backgroundColor: "#31355b" }}>
        <img
          className="compendium-image"
          src={introAIIMG}
          alt="profile-img"
          width="420"
          height="350"
        />
        <h3 className="compendium-title">
          Introduksjon til kunstig intelligens
        </h3>
        <h4 className="compendium-time" style={{ color: "#535b9e" }}>
          Høsten 2019
        </h4>
        <Container>
          <Col className="compendium-desc" sm={12} md={8}>
            <p>
              I dette emnet lærte vi om de grunnleggende prinsippene for bruk av
              kunstig intelligens for problemløsning, søk, inferens og
              kunnskapsrepresentasjon. Dette ble mitt første ordentlige møte med
              kunstig intelligens, og det styrket min motivasjon for å lære mer
              om dette området.
            </p>
          </Col>
        </Container>
        <Link to={introaiPDF} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "#535b9e" }}
          >
            Last ned
          </button>
        </Link>
      </div>
      {/*Database*/}
      <div className="compendium-div" style={{ backgroundColor: "#f8c687" }}>
        <img
          className="compendium-image"
          src={databaseIMG}
          alt="profile-img"
          width="400"
          height="360"
        />
        <h3 className="compendium-title">
          Datamodellering og databasesystemer
        </h3>
        <h4 className="compendium-time" style={{ color: "#ffdeb6" }}>
          Våren 2019
        </h4>
        <Container>
          <Col className="compendium-desc" sm={12} md={8}>
            <p className="compendium-desc">
              Dette emnet introduserte konsepter innenfor design, håndtering og
              konstruksjon av databaser. I øvingene fikk vi i oppgave å lage en
              treningsdagbok, og det ble mitt første møte med hvordan MySQL kan
              brukes for å lagre og hente data fra en ekstern server, noe som ga
              stor mestrinsfølelse når vi fikk det til.
            </p>
          </Col>
        </Container>
        <Link to={databasePDF} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "#ffdeb6" }}
          >
            Last ned
          </button>
        </Link>
      </div>
      {/*Informasjonssystemer*/}
      <div className="compendium-div" style={{ backgroundColor: "#1E453E" }}>
        <img
          className="compendium-image"
          src={infosysIMG}
          alt="profile-img"
          width="390"
          height="330"
        />
        <h3 className="compendium-title">Informasjonssystemer</h3>
        <h4 className="compendium-time" style={{ color: "#306844" }}>
          Høsten 2019
        </h4>
        <Container>
          <Col className="compendium-desc" sm={12} md={8}>
            <p className="compendium-desc">
              I dette emnet lærte vi om ulike typer informasjonssystemer,
              hvordan man kan identifisere organisasjoners behov og hvordan man
              kan fremme suksessfull implementering av endringer. Dette var et
              spennende emne, for tidligere har vi lært hvordan man kan lage
              systemene, men nå fikk vi også lære hvordan man kan legge til
              rette for at systemet faktisk blir brukt av kunden.
            </p>
          </Col>
        </Container>
        <Link to={infosysPDF} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "#306844" }}
          >
            Last ned
          </button>
        </Link>
      </div>
      {/*Menneskemaskin-interaskjon*/}
      <div className="compendium-div" style={{ backgroundColor: "#E29470" }}>
        <img
          className="compendium-image"
          src={mmiIMG}
          alt="profile-img"
          width="420"
          height="330"
        />
        <h3 className="compendium-title">Menneskemaskin-interaksjon</h3>
        <h4 className="compendium-time" style={{ color: "#fcbb9d" }}>
          Våren 2019
        </h4>
        <Container>
          <Col className="compendium-desc" sm={12} md={8}>
            <p className="compendium-desc">
              Etter å ha lært en del om generell programmering var det på tide å
              få mer kunnskap i hvordan man skaper gode brukeroppleveler. I
              øvingsopplegget fikk vi i oppgave å lage en lavnivå prototype av
              en mobil applikasjon og gjennomføre brukertesting. Jeg synes det
              var interessant å lære om denne delen av programvareutvikling og
              fint å få et større utløp for min kreativitet.
            </p>
          </Col>
        </Container>
        <Link to={mmiPDF} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "#fcbb9d" }}
          >
            Last ned
          </button>
        </Link>
      </div>
      {/*Operativsystemer*/}
      <div className="compendium-div" style={{ backgroundColor: "#4d2c68" }}>
        <img
          className="compendium-image"
          src={osIMG}
          alt="profile-img"
          width="420"
          height="350"
        />
        <h3 className="compendium-title">Operativsystemer</h3>
        <h4 className="compendium-time" style={{ color: "#784d9b" }}>
          Våren 2020
        </h4>
        <Container>
          <Col className="compendium-desc" sm={12} md={8}>
            <p className="compendium-desc">
              I dette emnet lærte vi om prinsipper innenfor moderne
              operativsystemer, og hvordan ulike teknikker kan brukes for å
              effektivt utnytte systemressursene. I tidligere emner har vi ofte
              hørt om parallell prosessering og fordeler ved dette, så det var
              gøyalt å endelig lære mer om hvordan det kan implementeres.
            </p>
          </Col>
        </Container>
        <Link to={osPDF} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "#6f4a8e" }}
          >
            Last ned
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Compendium;
