import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MonsterRolodex from './components/MonsterRolodex';

class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Monsters Rolodex Project</h1>

        <MonsterRolodex />
      </div>
    );
  }


}

export default App;
