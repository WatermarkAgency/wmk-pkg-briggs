import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../util/palette";

const HeadingWrap = styled.div`
  h1,
  h2 {
    color: ${colors.hex("primary")};
    text-transform: uppercase;
    font-size: 8vh;
    &.center {
      text-align: center;
    }
    &.larger {
      font-size: 11vh;
    }
  }
`;

const HeadingTitle = ({ title, reverse, center, larger, h2 }) => {
  const classes = ["font-title"];
  if (reverse) {
    classes.push("reverse");
  }
  if (center) {
    classes.push("center");
  }
  if (larger) {
    classes.push("larger");
  }
  const Heading = ({h2, children, classes}) => {
    return !h2 ? <h1 className={classes.join(" ")}>{children}</h1> : <h2 className={classes.join(" ")}>{children}</h2>
  }
  return <HeadingWrap><Heading classes={classes} h2={h2}>{title}</Heading></HeadingWrap>;
};

export default HeadingTitle;

HeadingTitle.propTypes = {
  title: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  center: PropTypes.bool,
  larger: PropTypes.bool,
  h2: PropTypes.bool
};

HeadingTitle.defaultTypes = {
  reverse: true,
  center: false,
  larger: false,
  h2: false
};
