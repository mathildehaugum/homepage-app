import React from "react";
import { Container, Row, Col } from "react-bootstrap"; //remember import in index.js
import "./index.css";
import { mailIcon, githubIcon, linkedinIcon } from "../images";
import FooterIcon from "./FooterIcon";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col align="center">
            <FooterIcon
              icon={mailIcon}
              name="Mail"
              link="mailto:mathilde_haugum@hotmail.com"
            />
          </Col>
          <Col align="center">
            <FooterIcon
              icon={githubIcon}
              name="Github"
              link="https://github.com/mathildehaugum"
            />
          </Col>
          <Col align="center">
            <FooterIcon
              icon={linkedinIcon}
              name="LinkdIn"
              link="https://www.linkedin.com/in/mathilde-haugum-060935114/"
            />
          </Col>
        </Row>
      </Container>

      <p className="copyright">© {currentYear} Mathilde Haukø Haugum.</p>
    </footer>
  );
}

export default Footer;
