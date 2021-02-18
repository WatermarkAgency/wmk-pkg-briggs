import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { WMKLink } from "wmk-lib";

const PageCTA = ({ to, target, prompt, cta }) => {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col>{prompt}</Col>
          <Col>
            <WMKLink to={to} target={target}>
              {cta}
            </WMKLink>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PageCTA;
