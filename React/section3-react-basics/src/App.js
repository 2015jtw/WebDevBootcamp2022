import React, { Component } from 'react';

// import components
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';

const Monster_API = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // here we are fetching the data from the monsters API
    fetch(Monster_API)
      // taking the response and turning it into JSON
      .then((res) => (res.json()))
      // setting the monsters state array with the data from monsters API
      .then(users => this.setState(() => {
        return { monsters: users }
      }))
  }

  // function to grab the value of the user's input in the search box - input field
  handleChange = (evt) => {
    const searchField = evt.target.value.toLocaleLowerCase();
    // set the user's value to the state of searchField
    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className='App'>
        <h1>Monsters Rolodex Project</h1>

        <SearchBox
          onChangeHandler={this.handleChange}
          placeholder='search monsters'
          className='monsters-search-box'
        />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  }


}

export default App;
