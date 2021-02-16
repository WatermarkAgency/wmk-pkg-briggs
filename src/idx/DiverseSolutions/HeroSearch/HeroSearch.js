import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { Video } from "wmk-lib";
import styled from "styled-components";
import QuickSearchPlus from "../Search/QuickSearchPlus";
import { colors } from "../../../util/palette";
import HeadingTitle from "../../../typography/HeadingTitle";

const HeroWrap = styled(Container)`
  padding: 0;
  margin: 0;
  position: relative;
  .bg {
    .wmk-media-video {
      height: 45vh;
    }
  }
  .fg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  border-bottom: 4px solid ${colors.hex("primary")};
  .hidden {
    display: none;
  }
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HeroSearch = () => {
  const { options } = useStaticQuery(graphql`
    {
      options: contentfulGlobal(slug: { eq: "main" }) {
        ...NodeGlobalHomeFields
      }
    }
  `);
  const { companyName, hero } = options;
  const { fluid, file } = hero;
  const { url } = file;
  return (
    <HeroWrap fluid>
      <div className="bg">
        {fluid && !url && <Img fluid={fluid} alt={companyName} />}
        {url && <Video url={url} />}
      </div>
      <div className="fg">
        <Row className="flex-column">
          <Col>
            <HeadingTitle title="Discover" center reverse />
          </Col>
          {/* <IDXSearch /> */}
          <QuickSearchPlus />
        </Row>
      </div>
    </HeroWrap>
  );
};

export default HeroSearch;
