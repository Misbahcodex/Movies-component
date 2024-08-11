import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/Movies';

import Customers from './components/customers';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import NavBar from './components/navBar';
import Movieforms from './components/movieForms';
import LoginForm from './components/loginForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <NavBar />
          <main className="container">
            <Switch>
              <Route
                path="/login"
                component={LoginForm}
              />

              <Route
                path="/movies/:id"
                component={Movieforms}
              />
              <Route
                path="/movies"
                component={Movies}
              />
              <Route
                path="/customers"
                component={Customers}
              />
              <Route
                path="/rentals"
                component={Rentals}
              />
              <Route
                path="/notFound"
                component={NotFound}
              />
              <Redirect
                from="/"
                exact
                to="/movies"
              />
              <Redirect to="/notFound" />
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
