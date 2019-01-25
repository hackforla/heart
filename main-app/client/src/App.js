import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ParticipantProfile from './components/Participant/Profile';
import ImportFromFile from './components/Import/FromFile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/participants/:id/' component={ParticipantProfile} />
            <Route path='/import/' component={ImportFromFile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
