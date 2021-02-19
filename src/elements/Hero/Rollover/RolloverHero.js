import React from "react";
import styled from "styled-components";
import RolloverSection from "./RolloverSection";
import { Container, Row } from "react-bootstrap";
import get from "lodash/get";
import Theme from "../../../util/ThemeOptions";
import H2 from "../../../typography/HeadingMain";
import { IDXGrid, IDXWrap } from "../../../idx";

const WrapCont = styled(Container)`
  position: relative;
  height: 40vh;
  // max-height: 40rem;
  padding: 0;
  margin: 0;
  .row {
    height: 100%;
    margin: 0;
  }
  .mtns-wrap {
    position: absolute;
    z-index: 0;
    left: 0;
    bottom: 0px;
    width: 100%;
    .gatsby-image-wrapper {
      width: 100%;
      img {
        object-fit: contain;
      }
    }
  }
  @media screen and (max-width: ${Theme.break.sm}px) {
    height: 188px;
    margin-bottom: 50px !important;
    .row {
      .rollover__wrap {
        .rollover__content {
          opacity: 1;
        }
      }
      & > .rollover__wrap:not(:first-child) {
        display: none;
      }
    }
    .mtns-wrap {
      display: none;
    }
  }
`;

const RolloverHero = ({ block, grid }) => {
  const blockType = get(block, "__typename");
  const isRollover = blockType === "ContentfulBlockRolloverHero";
  const section1 = {
    title: get(block, "section1Title"),
    copy: get(block, "section1Copy"),
    image: get(block, "section1Image"),
  };
  const section2 = {
    title: get(block, "section2Title"),
    copy: get(block, "section2Copy"),
    image: get(block, "section2Image"),
  };
  const section3 = {
    title: get(block, "section3Title"),
    copy: get(block, "section3Copy"),
    image: get(block, "section3Image"),
  };

  return isRollover ? (
    <React.Fragment>
      <WrapCont fluid>
        <Row>
          <RolloverSection content={section1} />
          <RolloverSection content={section2} />
          <RolloverSection content={section3} />
        </Row>
        {/* <div className="mtns-wrap">
          <Img
            fluid={dividerImageData.divider.fluid}
            alt="strip of grass with biplane flying over used to separate the page hero from the page content"
          />
        </div> */}
      </WrapCont>
      {grid ? (
        <>
          <H2 contain>Available Homes</H2>
          <IDXWrap>
            <IDXGrid ssid="87" city="Waxhaw" state="CO" />
          </IDXWrap>
        </>
      ) : null}
    </React.Fragment>
  ) : null;
};

export default RolloverHero;
