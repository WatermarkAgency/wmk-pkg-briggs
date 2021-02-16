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

const HeadingSub = ({ sub, centered }) => {
  return <SubWrap className={centered ? "centered" : ""}>{sub}</SubWrap>;
};

export default HeadingSub;

HeadingSub.propTypes = {
  sub: PropTypes.string.isRequired,
  centered: PropTypes.bool
};

HeadingSub.defaultProps = {
  centered: false
};
