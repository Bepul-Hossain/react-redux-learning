import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Count from "./components/Count";
import Control from "./components/control";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h3>
            Basic: react, react-redux, redux using mapStateToProps,
            mapDispatchToProps
          </h3>
          <Count />
          <Control />
        </div>
      </Provider>
    );
  }
}

export default App;

//1. Store
//      Action
//      Reducers

//2. React Components
//      Child Components

//3. React-Redux Connect
//      Provider Component
//      Store
//      App component

// If we need Data
// mapStateToProps(state) return object

//If we want to dispatch some action
//mapDispatchToProps(dispatch) return object

//connect(mapStateToProps, mapDispatchToProps)(component)
