import React, { Component } from "react";
import PropTypes from "prop-types";

import "./names.css";

class Names extends Component {
  render() {
    let name = null;

    switch (this.props.type) {
      case "acupuncture":
        name = <div className="Acupuncture">Acupuncture</div>;
        break;
      case "bioEnergy":
        name = <div className="BioEnergy">BioEnergy</div>;
        break;
      case "chiropractor":
        name = <div className="Chiropractor">Chiropractor</div>;
        break;
      case "hijama":
        name = <div className="Hijama">Hijama</div>;
        break;
      case "hydroTherapy":
        name = <div className="HydroTherapy">HydroTherapy</div>;
        break;
      case "massageTherapy":
        name = <div className="MassageTherapy">MassageTherapy</div>;
        break;
        case "meditation":
        name = <div className="Meditation">Meditation</div>;
        break;
      case "nutrition":
        name = <div className="Nutrition">Nutrition</div>;
        break;
      case "other":
        name = <div className="Other">Other</div>;
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
