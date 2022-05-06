import React, { Component } from 'react'
import Pokedex from './Pokedex';

class Pokegame extends Component {

    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]

    }

    render() {
        let handOne = [];
        let handTwo = [...this.props.pokemon];

        while (handTwo.length > handOne.length) {
            let rand = Math.floor(Math.random() * handTwo.length);
            let randPokemon = handTwo.splice(rand, 1)[0];
            handOne.push(randPokemon);
        }

        // sum up all handOne and handTwos exp from their pokemons
        let handOneScore = handOne.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let handTwoScore = handTwo.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

        // console.log(handOne);
        // console.log(handTwo);
        return (
            <div>
                <Pokedex
                    pokemon={handOne}
                    exp={handOneScore}
                    isWinner={handOneScore > handTwoScore}
                />

                <Pokedex
                    pokemon={handTwo}
                    exp={handTwoScore}
                    isWinner={handTwoScore > handOneScore}
                />
            </div>
        )
    }
}

export default Pokegame;