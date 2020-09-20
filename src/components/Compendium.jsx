import React from "react";
import CvPdf from "../assets/cv.pdf";
import { drawing } from "../images";
import { Link } from "react-router-dom";

function Compendium() {
  return (
    <div>
      <div className="compendium-header">
        <h2>Kompendium</h2>
        <p>
          I løpet av mine år på NTNU har jeg skrevet flere kompendier innenfor
          ulike emner. Grunnen til at jeg har skrevet disse er at jeg synes det
          er en svært god ressurs å ha når man kommer ut i arbeidslivet. Disse
          kompendiene inneholder mine egne forklaringer på utfordrende konseper,
          noe som gjør det at det blir enklere å sette seg inn i disse senere.
          Følgende er et utvalg av mine kompendier.
        </p>
      </div>
      {/*Algoritmer og datastrukturer*/}
      <div className="compendium-div" style={{ backgroundColor: "#31355b" }}>
        <img
          className="compendium-image"
          src={drawing}
          alt="profile-img"
          width="420"
          height="400"
        />
        <h3 className="compendium-title">Algoritmer og Datastrukturer</h3>
        <h4 className="compendium-time" style={{ color: "#535b9e" }}>
          Høsten 2019
        </h4>
        <p className="compendium-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to={CvPdf} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "#535b9e" }}
          >
            Last ned
          </button>
        </Link>
      </div>
      {/*Programvaresikkerhet*/}
      <div className="compendium-div" style={{ backgroundColor: "#f76160" }}>
        <img
          className="compendium-image"
          src={drawing}
          alt="profile-img"
          width="420"
          height="400"
        />
        <h3 className="compendium-title">Programvaresikkerhet</h3>
        <h4 className="compendium-time" style={{ color: "#f59292" }}>
          Høsten 2019
        </h4>
        <p className="compendium-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to={CvPdf} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "#f59292" }}
          >
            Last ned
          </button>
        </Link>
      </div>
      {/*Introduksjon AI*/}
      <div className="compendium-div" style={{ backgroundColor: "#679895" }}>
        <img
          className="compendium-image"
          src={drawing}
          alt="profile-img"
          width="420"
          height="400"
        />
        <h3 className="compendium-title">Intro AI</h3>
        <h4 className="compendium-time" style={{ color: "rgb(168, 221, 218)" }}>
          Høsten 2019
        </h4>
        <p className="compendium-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to={CvPdf} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "rgb(168, 221, 218)" }}
          >
            Last ned
          </button>
        </Link>
      </div>
      {/*Informasjonssystemer*/}
      <div className="compendium-div" style={{ backgroundColor: "#f8c687" }}>
        <img
          className="compendium-image"
          src={drawing}
          alt="profile-img"
          width="420"
          height="400"
        />
        <h3 className="compendium-title">Informasjonssystemer</h3>
        <h4 className="compendium-time" style={{ color: "#ffdeb6" }}>
          Våren 2019
        </h4>
        <p className="compendium-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to={CvPdf} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "#ffdeb6" }}
          >
            Last ned
          </button>
        </Link>
      </div>
      {/*Database*/}
      <div className="compendium-div" style={{ backgroundColor: "#21364b" }}>
        <img
          className="compendium-image"
          src={drawing}
          alt="profile-img"
          width="420"
          height="400"
        />
        <h3 className="compendium-title">
          Datamodellering og databasesystemer
        </h3>
        <h4 className="compendium-time" style={{ color: "#436485" }}>
          Høsten 2019
        </h4>
        <p className="compendium-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to={CvPdf} target="_blank" download>
          <button
            className="compendium-btn"
            style={{ backgroundColor: "#436485" }}
          >
            Last ned
          </button>
        </Link>
      </div>
      {/*Menneskemaskin-interaskjon*/}
      <div className="compendium-div" style={{ backgroundColor: "#E29470" }}>
        <img
          className="compendium-image"
          src={drawing}
          alt="profile-img"
          width="420"
          height="400"
        />
        <h3 className="compendium-title">Menneskemaskin-interaksjon</h3>
        <h4 className="compendium-time" style={{ color: "#fcbb9d" }}>
          Høsten 2019
        </h4>
        <p className="compendium-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to={CvPdf} target="_blank" download>
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
          src={drawing}
          alt="profile-img"
          width="420"
          height="400"
        />
        <h3 className="compendium-title">Operativsystemer</h3>
        <h4 className="compendium-time" style={{ color: "#784d9b" }}>
          Høsten 2019
        </h4>
        <p className="compendium-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to={CvPdf} target="_blank" download>
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
