import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';

import Wallet from './pages/Wallet';

import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
          <Route path="/*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default App;
