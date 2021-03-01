import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Row, Col, Container } from "react-bootstrap";
import { colors } from "../util/palette";

const HeadingWrap = styled.h2`
  text-transform: uppercase;
  color: ${colors.hex("primary")};
  margin: 0;
  padding-bottom: 2vh;
  &.reverse {
    color: ${colors.hex("white")};
  }
  &.centered {
    text-align: center;
  }
`;

const HeadingMain = ({ community, reverse, centered, children, contain, main }) => {
  const classes = [community ? "font-title" : "font-head"];
  classes.push(reverse ? "reverse" : "");
  classes.push(centered ? "centered" : "");
  return contain ? (
    <Container>
      <Row>
        <Col style={{ padding: "3vh 1.5rem 0 1.5rem" }}>
          <HeadingWrap className={classes.join(" ")}>{main || children}</HeadingWrap>
        </Col>
      </Row>
    </Container>
  ) : (
    <HeadingWrap className={classes.join(" ")}>{main || children}</HeadingWrap>
  );
};

export default HeadingMain;

HeadingMain.propTypes = {
  main: PropTypes.string,
  community: PropTypes.bool,
  reverse: PropTypes.bool,
};

HeadingMain.deafultProps = {
  community: false,
  reverse: false,
  centered: false,
};
