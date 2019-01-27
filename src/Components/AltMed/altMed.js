import React from "react";
import Names from "./names/names";

import "./altMed.css";


const altMed = props => {

  let transformedNames = Object.keys( props.names )
  .map( nameKey => {
      return [...Array( props.names[nameKey] )].map( ( _, i ) => {
          return <Names key={nameKey + i} type={nameKey} />;
      } );
  } )
  .reduce((arr, el) => {
    return arr.concat(el)
}, []);

if (transformedNames.length === 0) {
  transformedNames = <p>Please start choosing alt medicine!</p>;
}
  return (
    <div className="AltMed">

    <Names />
    {transformedNames}
      {/* <Names type="acupuncture" />
      <Names type="bioEnergy" />
      <Names type="chiropractor" />
      <Names type="hijama" />
      <Names type="hydroTherapy" />
      <Names type="massageTherapy" />
      <Names type="meditation" />
      <Names type="nutrition" />
      <Names type="thetaHealing" />
      <Names type="other" /> */}
    </div>
  );
};

export default altMed;
