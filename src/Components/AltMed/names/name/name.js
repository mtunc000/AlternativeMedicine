import React,{Component} from 'react';

import Logo from "../../../Logo/Logo"


class Name extends Component {

    state={
        images: {
            acupuncture: "acupuncture.jpg",
            bioEnergy:"bioEnergy.jpg",
            chiropractor:"Chiropractor.jpg",
            hijama:"Hijama.jpeg",
            hydroTherapy:"Hydrotherapy.jpg",
            massageTheraphy:"MassageTherapy.jpeg",
            meditation: "meditation.jpg",
            nutrition: "nutrition.jpg",
            thetaHealing: "ThetaHealing.jpg",
            other: "Other"
        }
    }


        render (){

            return (
<div>
<Logo height={100} source={this.state.images} />

<select
  value={this.state.category}
  onChange={event => this.setState({ category: event.target.value })}>

  <option value="acupuncture.jpg">Accupuncture</option>
  <option value="bioEnergy.jpg">Bio-Energy</option>
  <option value="Chiropractor.jpg">Chiropractic</option>
  <option value="Hijama.jpeg">Hijama</option>
  <option value="Hydrotherapy.jpg">HydroTherapy</option>
  <option value="MassageTherapy.jpeg">MassageTheraphy</option>
  <option value="meditation.jpg">Meditation</option>
  <option value="nutrition.jpg">Nutrition</option>
  <option value="ThetaHealing.jpg">Theta-Healing</option>
  <option value="Other">Other</option>
</select>
</div>
            
            )}

    };

export default Name;

