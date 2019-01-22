import React from "react";
import Names from "./names/names";

import classes from "./altMed.css";


const altMed = props => {
  return (
    <div className={classes.AltMed}>
      <Names type="acupuncture" />
      <Names type="bioEnergy" />
      <Names type="chiropractor" />
      <Names type="hijama" />
    </div>
  );
};

export default altMed;
