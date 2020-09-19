import React from "react";
import "./index.css";
import { Row, Image, Col } from "react-bootstrap"; //remember import in index.js

export default function FooterIcon(props) {
  return (
    <div style={{ width: 100 }}>
      <Row style={{ paddingBottom: 10 }}>
        <Col>
          <Image src={props.icon} className="icon-footer" />
        </Col>
      </Row>
      <Row>
        <Col align="center">
          <a className="footer-link" href={props.link}>
            {props.name}
          </a>
        </Col>
      </Row>
    </div>
  );
}
