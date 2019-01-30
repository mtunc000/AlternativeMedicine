import React, { Component } from "react";
import "./Individual.css";
 import Logo from "../../Components/Logo/Logo";
import Aux from "../../hoc/Aux";
import AltMed from "../../Components/AltMed/altMed";
import BuildControls from "../../Components/AltMed/BuildControls/BuildControls"
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/AltMed/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';
import axios from '../../axiosFirebase';


const SERVICE_PRICES = {
  acupuncture: 150,
  bioEnergy: 120,
  chiropractor: 40,
  hijama : 60,
  hydroTherapy : 120,
  massageTherapy : 80,
  meditation : 50,
  nutrition : 120,
  thetaHealing : 120,
  other : 80


};


class Individual extends Component {
  state = {
    names: {
      acupuncture: 0,
      bioEnergy :0,
      chiropractor:0,
      hijama:0,
      hydroTherapy:0,
      massageTherapy:0,
      meditation:0,
      nutrition:0,
      thetaHealing:0,
      other:0   

    },
    totalPrice:  0,
    purchasable: false,
    purchasing: false,
    loading: false,
    
    category: "",
    specialty: "",
    personal: "",
    street: "",
    city: "",
    state: "",
    zip: ""
  }
  updatePurchaseState (names) {
    const sum = Object.keys( names )
        .map( nKey => {
            return names[nKey];
        } )
        .reduce( ( sum, el ) => {
            return sum + el;
        }, 0 );
    this.setState( { purchasable: sum > 0 } );
}

  addAltMedicineHandler= (type) => {
    const oldCount = this.state.names[type];
    const newCount = oldCount +1;
    const updatedNames = {
      ...this.state.names
    };
    updatedNames[type]= newCount;
    const priceAddition = SERVICE_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState ({totalPrice: newPrice,  names : updatedNames} );
    this.updatePurchaseState(updatedNames);

  }

  removeAltMedicineHandler = (type) => {
    const oldCount = this.state.names[type];
    if ( oldCount <= 0 ) {
      return;
  }
    const newCount = oldCount - 1;
    const updatedNames = {
      ...this.state.names
    };
    updatedNames[type]= newCount;
    const priceSubtraction = SERVICE_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;
    this.setState({totalPrice: newPrice,  names : updatedNames});
    this.updatePurchaseState(updatedNames);
   
  };

  purchaseHandler = () => {
    this.setState( { purchasing: true } );
}

purchaseCancelHandler = () => {
    this.setState( { purchasing: false } );
}

purchaseContinueHandler = () => {
    // alert('You continue!');
    // this.setState( { loading: true } );
    const altMedicines = {
        names: this.state.names,
        price: this.state.totalPrice,
       
    }
    axios.post( 'https://alternative-medicine-29c43.firebaseio.com/altMedicines.json',altMedicines)
         .then( response => console.log(response))
        //     this.setState({ loading: false, purchasing: false });
        // } )
         .catch( error => console.log(error));
        //     this.setState({ loading: false, purchasing: false });
        // } );
}



  render() {

    const disabledInfo = {
      ...this.state.names
  };
  for ( let key in disabledInfo ) {
      disabledInfo[key] = disabledInfo[key] <= 0
  }
   
  let orderSummary = <OrderSummary
  ingredients={this.state.ingredients}
  price={this.state.totalPrice}
  purchaseCancelled={this.purchaseCancelHandler}
  purchaseContinued={this.purchaseContinueHandler} />;
if ( this.state.loading ) {
  orderSummary = <Spinner />;
}

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
        <AltMed names= {this.state.names} />
        <BuildControls 
        altMedAdded = {this.addAltMedicineHandler}
        altMedRemoved = {this.removeAltMedicineHandler}
        disabled = {disabledInfo}
        purchasable={this.state.purchasable}
        price={this.state.totalPrice}
        />
         <div className="Individual">
          <h1>Choose a Category</h1>
          <Logo height={100} source={this.state.category} />
          <select
            value={this.state.category}
            onChange={event => this.setState({ category: event.target.value })}
          >
            <option value="acupuncture.jpg">Accupuncture</option>
            <option value="bioEnergy.jpg">Bio-Energy</option>
            <option value="Chiropractor.jpg">Chiropractic</option>
            <option value="Hijama.jpeg">Hijama</option>
            <option value="Hydrotherapy.jpg">HydroTherapy</option>
            <option value="Massage Therapy.jpeg">MassageTheraphy</option>
            <option value="meditation.jpg">Meditation</option>
            <option value="nutrition.jpg">Nutrition</option>
            <option value="ThetaHealing.jpg">Theta-Healing</option>
            <option value="Other">Other</option>
          </select>
          

           <label>Add a Description</label>
          <textarea
            rows="4"
            value={this.state.specialty}
            onChange={event => this.setState({ specialty: event.target.value })}
          />

          <label>Personal</label>
          <input
            type="text"
            value={this.state.personal}
            onChange={event => this.setState({ personal: event.target.value })}
          />
        </div>
        <br /> <br />
        <div className="Individual">
          <h1>Add your Location</h1>
          <label>Add your street</label>
          <input
            type="text"
            value={this.state.street}
            onChange={event => this.setState({ street: event.target.value })}
          />

          <label>Add your city</label>
          <input
            type="text"
            value={this.state.city}
            onChange={event => this.setState({ city: event.target.value })}
          />
          <label>Add your State</label>
          <input
            type="text"
            value={this.state.state}
            onChange={event => this.setState({ state: event.target.value })}
          />
          <label>Add your ZipCode</label>
          <input
            type="text"
            value={this.state.zip}
            onChange={event => this.setState({ zip: event.target.value })}
          />

          <button>Add Post</button>
        </div> 
      </Aux>
    );
  }
}

export default Individual;
