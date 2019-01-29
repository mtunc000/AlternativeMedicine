import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  // <ul className={classes.NavigationItems}>
  //   <NavigationItem link="/" exact>
  //     Clinic
  //   </NavigationItem>

  //   {props.isAuthenticated ? (
  //     <NavigationItem link="/individual">Individiual</NavigationItem>
  //   ) : null}

  //   {props.isAuthenticated ? (
  //     <NavigationItem link="/clinic">Clinic</NavigationItem>
  //   ) : null}

  //   {!props.isAuthenticated ? (
  //     <NavigationItem link="/auth">Authenticate</NavigationItem>
  //   ) : (
  //     <NavigationItem link="/logout">Logout</NavigationItem>
  //   )}
  // </ul>

  <ul className="NavigationItems">
        <NavigationItem link="/" active>User</NavigationItem>
        <NavigationItem link="/">Provider</NavigationItem>
    </ul>
);

export default navigationItems;
