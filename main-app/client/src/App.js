import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ParticipantProfile from './components/Participant/Profile';
import './App.css';

class App extends Component {
  render() {
    return (  
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/participants/:id/' component={ParticipantProfile} />
          <Route path='/participants' component={ParticipantProfile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
