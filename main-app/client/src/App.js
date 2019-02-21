import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ParticipantProfile from './components/Participant/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route path='/participants/:id/' component={ParticipantProfile} />
            <Route path='/participants' component={ParticipantProfile} />
          </Switch>
      </div>
    );
  }
}

export default App;
