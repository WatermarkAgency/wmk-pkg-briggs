import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import Theme from "../../util/ThemeOptions";

const DivSolEmbed = React.forwardRef(({ id, type, className, args }, ref) => {
  const embRef = useRef();
  const classes = [className];
  classes.push("idx-wrap");
  const empty = (tar) => {
    while (tar.firstChild) tar.removeChild(tar.firstChild);
    return tar;
  };

  const argStr = Object.keys(args)
    .map((key, i) => {
      return { key, val: args[key], i };
    })
    .reduce((a, v) => {
      return a + "&" + v.key + "=" + v.val;
    }, "");

  useEffect(() => {
    const tar = embRef.current;
    const idxScript = document.createElement("script");
    const divId = type === "widgetTLM" ? "curDivID" : "divId";

    idxScript.setAttribute(
      "src",
      Theme.paths.divSol + type + `.js?${divId}=` + id + argStr
    );
    idxScript.setAttribute("charset", "UTF-8");
    idxScript.setAttribute("type", "text/javascript");
    idxScript.setAttribute("id", id);
    idxScript.setAttribute("async", true);

    empty(tar);

    tar.appendChild(idxScript);

    return () => empty(tar);
  }, [type, id, argStr]);

  return (
    <Row className="flex-column" ref={ref}>
      <Col id={"col-" + id} className={classes.join(" ")} ref={embRef} />
    </Row>
  );
});

export default DivSolEmbed;

DivSolEmbed.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  args: PropTypes.object,
};

DivSolEmbed.defaultProps = {
  className: "",
  args: {},
  type: "widgetIframe",
};
