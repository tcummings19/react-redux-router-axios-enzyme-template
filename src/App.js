import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import AppObjectContainer from './containers/AppObjectContainer'
import AppObjectsContainer from './containers/AppObjectsContainer'

class App extends Component {
  render() {

      const appRoutes =
          <Switch>
              <Route
                  path='/appObject'
                  component={AppObjectContainer}
              />
              <Route
                  path='/appObjects'
                  component={AppObjectsContainer}
              />
          </Switch>;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {appRoutes}
      </div>
    );
  }
}

export default withRouter(App);
