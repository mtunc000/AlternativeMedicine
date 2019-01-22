import React from "react";
import Names from "./names/names";

import "./altMed.css";


const altMed = props => {
  return (
    <div className="AltMed">
      <Names type="acupuncture" />
      <Names type="bioEnergy" />
      <Names type="chiropractor" />
      <Names type="hijama" />
      <Names type="hydroTherapy" />
      <Names type="massageTherapy" />
      <Names type="meditation" />
      <Names type="nutrition" />
      <Names type="thetaHealing" />
      <Names type="other" />
    </div>
  );
};

export default altMed;
