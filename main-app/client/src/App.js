import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ParticipantProfile from './components/Participant/Profile';
import IntakeForm from './components/IntakeForm/IntakeForm';
import ImportFromFile from './components/Import/FromFile';
import './App.css';

class App extends Component {
  render() {
    return (  
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/participants/:id/' component={ParticipantProfile} />
          <Route exact={true} path='/form' component={IntakeForm} />
          <Route exact={true} path='/import/' component={ImportFromFile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
