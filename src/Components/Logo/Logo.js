import React from "react";

import classes from "./Logo.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img
      src={`assets/images/${props.source}`}
      style={{ height: props.height }}
      alt={props.source}
    />
  </div>
);

export default logo;
