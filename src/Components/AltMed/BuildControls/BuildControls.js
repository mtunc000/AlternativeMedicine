import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Acupuncture', type: 'acupuncture' },
    { label: 'BioEnergy', type: 'bioEnergy' },
    { label: 'Chiropractor', type: 'chiropractor' },
    { label: 'Hijama', type: 'hijama' },
    { label: 'HydroTherapy', type: 'hydroTherapy' },
    { label: 'MassageTherapy', type: 'massageTherapy' },
    { label: 'Meditation', type: 'meditation' },
    { label: 'Nutrition', type: 'nutrition' },
    { label: 'ThetaHealing', type: 'thetaHealing' },
    { label: 'Other', type: 'other' },
];

const buildControls = ( props ) => (
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed( 2 )}</strong></p>
        {controls.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label} 
                added={() => props.altMedAdded(ctrl.type)}
                removed={() => props.altMedRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                price={props.price}/>
         )) }
         
        <button 
            className="OrderButton"
            disabled={!props.purchasable}>ORDER NOW</button>    
        
        </div>
);


export default buildControls;