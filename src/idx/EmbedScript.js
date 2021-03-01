import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import DefaultTheme from "../util/ThemeOptions";

const IDXEmbedScript = React.forwardRef(
  ({ id, type, className, Theme }, ref) => {
    const elId = "idx-jsx-" + type + "-" + id;
    const embRef = useRef();
    const classes = [className];
    classes.push("idx-wrap");

    const empty = (tar) => {
      while (tar.firstChild) tar.removeChild(tar.firstChild);
      return tar;
    };

    useEffect(() => {
      const tar = embRef.current;
      const idxScript = document.createElement("script");

      idxScript.setAttribute(
        "src",
        Theme.paths.idx + type + ".php?widgetid=" + id
      );
      idxScript.setAttribute("charset", "UTF-8");
      idxScript.setAttribute("type", "text/javascript");
      idxScript.setAttribute("id", "idxwidgetsrc-" + id);
      idxScript.setAttribute("async", true);

      empty(tar);

      tar.appendChild(idxScript);

      return () => empty(tar);
    }, [type, id]);

    return (
      <Row className="flex-column" ref={ref}>
        <Col id={elId} className={classes.join(" ")} ref={embRef} />
      </Row>
    );
  }
);

export default IDXEmbedScript;

IDXEmbedScript.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  Theme: PropTypes.object,
};

IDXEmbedScript.defaultProps = {
  className: "",
  Theme: DefaultTheme,
};
