import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar/navbar';
import ParticipantProfile from './components/Participant/Profile';
import LoginPage from './components/Authorization/loginPage';
import IntakeForm from './components/IntakeForm/IntakeForm';

// Higher Order Component (HOC) to prevent the user from accessing a route if he's not logged in
import PrivateRoute from '../src/routes/privateRoute';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header />
            <NavBar/>
          <main>
            <Switch>
              <Route exact={true} path="/login/" component={LoginPage} />
              <PrivateRoute exact={true} path='/participants/:id/' component={ParticipantProfile} />
              <Route exact={true} path='/form' component={IntakeForm} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
