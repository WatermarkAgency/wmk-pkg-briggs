import React from "react";
import { Link } from "gatsby";
import { wmkClass } from "../logic";
import {Anchor} from "./Anchor";
import PropTypes from "prop-types";

export const WMKLink = React.forwardRef(
  ({ to, id, children, target, mailto, tel, style, className, speed, animate, label, onClick }, ref) => {
    const _className = wmkClass("gatsby", "link", className);
    const _target = target ? "_" + target.replace("_", "") : null;
    const _to = mailto || tel ? (to !== "/" ? to : children) : to;
    return (_target && _target !== "_internal") ||
      (_target && _target !== "_link") ||
      mailto ||
      tel ? (
      <Anchor
        to={_to}
        mailto={mailto}
        tel={tel}
        target={target}
        className={className}
        id={id}
        ref={ref}
        style={style}
        speed={speed}
        animate={animate}
        label={label}
        onClick={onClick}
      >
        {children}
      </Anchor>
    ) : (
      <Link onClick={onClick} to={to} ref={ref} className={_className} id={id ? id : undefined} style={style} aria-label={label}>
        {children}
      </Link>
    );
  }
);

WMKLink.defaultProps = {
  tel: false,
  mailto: false,
  id: false,
  target: false,
  className: "",
  to: "/",
  animate: false
};

WMKLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  id: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  children: PropTypes.node.isRequired,
  mailto: PropTypes.bool,
  tel: PropTypes.bool,
  animate: PropTypes.bool
};
