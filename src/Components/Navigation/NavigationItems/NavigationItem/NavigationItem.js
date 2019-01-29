import React from "react";
// import { NavLink } from "react-router-dom";

import "./NavigationItem.css";

const navigationItem = props => (
  // <li className={classes.NavigationItem}>
  //   <NavLink
  //     to={props.link}
  //     exact={props.exact}
  //     activeClassName={classes.active}
  //   >
  //     {props.children}
  //   </NavLink>
  // </li>
  <li className="NavigationItem">
  <a 
      href={props.link} 
      className={props.active ? "active" : null}>{props.children}</a>
</li>
);

export default navigationItem;
