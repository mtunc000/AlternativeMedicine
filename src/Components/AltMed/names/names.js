import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./names.css";

class Names extends Component {
  render() {
    let name = null;

    switch (this.props.type) {
      case "acupuncture":
        name = <div className={classes.Acupuncture}>Acupuncture</div>;
        break;
      case "bioEnergy":
        name = <div className={classes.BioEnergy}>BioEnergy</div>;
        break;
      case "chiropractor":
        name = <div className={classes.Chiropractor}>Chiropractor</div>;
        break;
      case "hijama":
        name = <div className={classes.Hijama}>Hijama</div>;
        break;
      case "hydtoTherapy":
        name = <div className={classes.HydtoTherapy}>HydtoTherapy</div>;
        break;
      case "massageTherapy":
        name = <div className={classes.MassageTherapy}>MassageTherapy</div>;
        break;
      case "nutrition":
        name = <div className={classes.Nutrition}>Nutrition</div>;
        break;
      case "other":
        name = <div className={classes.Other}>Other</div>;
        break;
      default:
        name = null;
    }
    return name;
  }
}

Names.propTypes = {
  type: PropTypes.string.isRequired
};

export default Names;
