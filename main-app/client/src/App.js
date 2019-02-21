import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ParticipantProfile from './components/Participant/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/participants/:id/' component={ParticipantProfile} />
            <Route path='/participants' component={ParticipantProfile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
