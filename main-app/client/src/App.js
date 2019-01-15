import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/user/:1/' component={UserProfile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
