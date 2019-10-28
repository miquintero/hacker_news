import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "./App.scss";

class App extends Component{
  
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <React.Fragment>
            <Route exact path='/' />
          </React.Fragment>
        </Switch>
      </BrowserRouter> 
    );
  }
}

export default hot(module)(App);