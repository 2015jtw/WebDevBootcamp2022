import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

const Monster_API = 'https://jsonplaceholder.typicode.com/users';



class MonsterRolodex extends Component {

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

        console.log("render from main file")

        return (
            <div>
                <SearchBox
                    onChangeHandler={this.handleChange}
                />

                <CardList monsters={filteredMonsters} />

            </div>
        )
    }
}

export default MonsterRolodex;