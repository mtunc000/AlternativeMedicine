import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  
  <ul className="NavigationItems">
        <NavigationItem link="/" >User</NavigationItem>
        <NavigationItem link="/">Provider</NavigationItem>
    </ul>
);

export default navigationItems;
