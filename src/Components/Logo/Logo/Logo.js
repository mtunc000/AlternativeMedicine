import React from 'react';

import altMedLogo from '../../assets/images/Logo.jpg';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={altMedLogo} alt="AltMed" />
    </div>
);

export default logo;