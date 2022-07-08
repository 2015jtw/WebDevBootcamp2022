import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

// import components
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

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
    fetch(Monster_API)
      .then((res) => (res.json()))
      .then(users => this.setState(() => {
        return { monsters: users }
      }))
  }

  handleChange = (evt) => {
    const searchField = evt.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div>
        <h1>Monsters Rolodex Project</h1>

        <SearchBox
          onChangeHandler={this.handleChange}
          placeholder='search monsters'
          className='search-box'
        />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  }


}

export default App;
