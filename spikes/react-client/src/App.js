import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IntakeForm from './IntakeForm/IntakeForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IntakeForm />
      </div>
    );
  }
}

export default App;
