import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import classes from "./App.css";
// import Clinic from "./Components/Clinic/Clinic";
import Individual from "./Containers/Individual/Individual";
// import Aux from "./hoc/Aux";
import Layout from "./Components/Layout/Layout";
// import NavigationItems from "./Components/Navigation/NavigationItems/NavigationItems";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Individual />
        </Layout>
      </div>
    );
  }
}

// <Aux className={classes.App}>
//   <h1> Project 3 Starting </h1>
//   <NavigationItems />
//   <Clinic />
//   <Individual />
// </Aux>

export default App;
