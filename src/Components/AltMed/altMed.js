import React, { Component } from "react";
import Names from "./names/names";
import NamesTwo from './names/name/NamesTwo'
import "./altMed.css";


export default class altMed extends Component {
  state={
    image: ''
  }

  imageMap = {
    Acupuncture: "acupuncture.jpg",
    BioEnergy:"bioEnergy.jpg",
    Chiropractor:"Chiropractor.jpg",
    Hijama:"Hijama.jpeg",
    HydroTherapy:"Hydrotherapy.jpg",
    MassageTheraphy:"MassageTherapy.jpeg",
    Meditation: "meditation.jpg",
    Nutrition: "nutrition.jpg",
    ThetaHealing: "ThetaHealing.jpg"
}
//convert this component to a stateful component 
   handleClick = name => {
     this.setState({
       image: this.imageMap[name]
     })
    //take the name, look for the image you want, and load it
    //set state for image
  }

  makeNames = names => {
  let transformedNames = Object.keys( names )
      .map( nameKey => {
      return [...Array( names[nameKey] )].map( ( _, i ) => {
          return <NamesTwo key={nameKey + i} type={nameKey} handleClick={this.handleClick} />;
      } );
      } )
  .reduce((arr, el) => {
    return arr.concat(el)
}, []);

if (transformedNames.length === 0) {
  return <p>Which alt medicine would you like to try?</p>;
} else {
  return transformedNames
}
  }


render() {
  const { image } = this.state
  const { names } = this.props
  return (
    <div className="AltMed">
    <Names />
    {/* <NamesTwo /> */}
    {this.makeNames(names)}
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
      {image ? <img src={`./assets/images/${image}`} width='100px' alt={image} /> : null}
    </div>
  );
}

}
