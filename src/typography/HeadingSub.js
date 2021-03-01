import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SubWrap = styled.h3`
  text-transform: uppercase;
  padding: 0 0.5rem;
  &.centered {
    text-align: center;
  }
`;

const HeadingSub = ({ sub, centered, children }) => {
  return <SubWrap className={centered ? "centered" : ""}>{sub || children}</SubWrap>;
};

export default HeadingSub;

HeadingSub.propTypes = {
  sub: PropTypes.string,
  centered: PropTypes.bool
};

HeadingSub.defaultProps = {
  centered: false
};
