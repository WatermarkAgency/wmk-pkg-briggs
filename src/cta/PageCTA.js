import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { WMKLink } from "wmk-lib";
import styled from "styled-components";
import { colors } from "../util/palette";

const CTAWrap = styled(Container)`
  background: rgb(241, 103, 36);
  background: linear-gradient(
    -180180deg,
    rgba(241, 103, 36, 1) 0%,
    rgba(254, 70, 70, 1) 100%
  );
  padding: 4vh 0;
  :hover {
    background: linear-gradient(
      -180180deg,
      rgba(241, 103, 36, 1) 0%,
      rgba(254, 70, 70, 1) 100%
    );
  }
`;

const Prompt = styled(Col)`
  font-size: 3.5vh;
  font-weight: bold;
  color: ${colors.hex("white")};
`;

const CTA = styled(Col)`
  text-align: right;
  padding-right: 2rem;
  }
`;

const CTAButton = styled(WMKLink)`
  position: relative;
  top: 0.5vh;
  color: ${colors.hex("white")};
  background: ${colors.hex("black")};
  box-shadow: 0px 3px 6px ${colors.rgba("black", 0.25)};
  padding: 2vh 4vh;
  border-radius: 0.75vh;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 3vh;
  :hover {
    background: ${colors.hex("white")};
    color: ${colors.hex("black")};
    transition: all 0.3s ease;
    text-decoration: none;
  }
`;

const PageCTA = ({ to, target, prompt, cta }) => {
  return (
    <CTAWrap fluid>
      <Container>
        <Row>
          <Prompt>
            <div className="animate__animated animate__backInLeft">
              {prompt}
            </div>
          </Prompt>
          <CTA>
            <div className="animate__animated animate__backInRight">
              <CTAButton to={to} target={target}>
                {cta}
              </CTAButton>
            </div>
          </CTA>
        </Row>
      </Container>
    </CTAWrap>
  );
};

export default PageCTA;
