import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import DefaultTheme from "../util/ThemeOptions";
import PropTypes from "prop-types";

const Wrap = styled.div`
  ${({ block }) =>
    block
      ? `margin-top: 2rem;
  position: relative;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  margin-bottom: 2vw;
  .gatsby-image-wrapper {
    width: 100%;
    img {
      object-fit: contain;
    }
  }`
      : `    position: absolute;
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
  @media screen and (max-width: ${DefaultTheme.break.sm}px) {
    bottom: -30px;
  }
  `}
`;

const Decoration = ({ fluid, block, alt }) => {
  return fluid ? (
    <Wrap block={block}>
      <Img fluid={fluid} alt={alt} />
    </Wrap>
  ) : null;
};

export default Decoration;

Decoration.propTyps = {
  fluid: PropTypes.object.isRequired,
  block: PropTypes.bool,
  alt: PropTypes.string,
};

Decoration.defaultProps = {
  block: false,
  alt: "",
};
