import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import Img from "gatsby-image";
import get from "lodash/get";
import { colors } from "../../../util/palette";
import H1 from "../../../typography/HeadingTitle";
import Theme from "../../../util/ThemeOptions";

const WrapCol = styled(Col)`
  height: 100%;
  color: ${colors.hex("white")};
  padding: 0;
  .content-wrap {
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: rgba(241, 103, 36, 0.8);
    padding: ${Theme.pad("single")};
    transition: opacity 0.25s ease;
    .copy {
      text-align: center;
      font-size: ${Theme.pad("threeQuarters")};
      font-size: 1.5rem;
      text-transform: uppercase;
    }
  }
  :hover {
    .content-wrap {
      opacity: 1;
      transition: opacity 0.25s ease;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 860px) {
    h2 {
      font-size: ${Theme.pad("double")};
    }
  }
  @media only screen and (max-width: 767px) {
    height: 25vh;
  }
`;

const BGWrap = styled.div`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .gatsby-image-wrapper {
    height: 100%;
  }
`;

const RolloverSection = ({ content }) => {
  // console.log("content: ", content)
  return (
    <WrapCol sm={12} md={4} className="rollover">
      <div className="content-wrap">
        <H1 center h2 reverse>
          {get(content, "title")}
        </H1>
        <div className="copy">{get(content, "copy")}</div>
      </div>
      <BGWrap>
        <Img
          fluid={get(content, "image.fluid")}
          alt={get(content, "image.title")}
        />
      </BGWrap>
    </WrapCol>
  );
};

export default RolloverSection;
