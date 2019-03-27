import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './LandingPage';
import MainView from './MainView';
import TopPlaces from './TopPlaces';
import Currency from './Currency';
import Flights from './Flights';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/main-view"
            component={MainView} />
          <Route exact path="/main-view/top-places" component={TopPlaces} />
          <Route exact path="/main-view/currency" component={Currency} />
          <Route exact path="/main-view/flight-info" component={Flights} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;