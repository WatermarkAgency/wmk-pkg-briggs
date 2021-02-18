import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { colors } from "../../util/palette";
import H1 from "../../typography/HeadingTitle";
import Decoration from "../Decoration";
import get from "lodash/get";
import Theme from "../../util/ThemeOptions";

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 35vh;
  //margin-bottom: 3vh;
  @media screen and (max-width: ${Theme.break.md}px) {
    height: 45vh;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.hex("white")};
  .bg-image-wrap {
    position: absolute;
    z-index: -5;
    width: 100%;
    height: 100%;
    filter: brightness(0.85);
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }
  .mtns-wrap {
    position: absolute;
    z-index: 0;
    left: 0;
    bottom: -10px;
    width: 100%;
    .gatsby-image-wrapper {
      width: 100%;
      img {
        object-fit: contain;
      }
    }
  }
`;

const PageHero = ({ bgImage, title, decoration, hideTitle }) => {
  const bg = get(bgImage, "fluid");
  const decor = get(decoration, "fluid");
  const alt = get(decoration, "alt");
  return (
    <Wrap>
      {bg && (
        <div className="bg-image-wrap">
          <Img fluid={bg} alt={get(bgImage, "title", "")} />
        </div>
      )}
      {title && !hideTitle ? (
        <H1 reverse center>
          {title}
        </H1>
      ) : null}
      <Decoration fluid={decor} alt={alt} />
    </Wrap>
  );
};

export default PageHero;

PageHero.propTypes = {
  bgImage: PropTypes.object.isRequired,
  title: PropTypes.string,
  mountains: PropTypes.bool,
  hideTitle: PropTypes.bool,
};

PageHero.defaultProps = {
  mountains: false,
  hideTitle: false,
  title: "",
};
