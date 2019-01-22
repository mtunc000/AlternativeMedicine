import React from "react";
import classes from "./Clinic.css";

let clinic = props => {
  let message = "please use at least 6 character";

  if (props.inputLength >= 6) {
    message = "long enough";
  }

  return (
    <div
      className={classes.Clinic}
      onChange={props.clicked}
      value={props.value}
    >
      <p>{message}</p>
    </div>
  );
};

export default clinic;
