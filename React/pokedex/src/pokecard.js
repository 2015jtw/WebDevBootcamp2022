import React, { Component } from "react";
import './Pokecard.css'

// const pokemon_img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const fancy_pokemon_img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

// function for adding 3 digits to every pokemon id
let padToThree = (number) => {
    if (number <= 999) {
        return `00${number}`.slice(-3);
    }
    else {
        return number;
    }
}


class Pokecard extends Component {
    render() {
        let imgSrc = `${fancy_pokemon_img}${padToThree(this.props.id)}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={this.props.name} />
                </div>

                <div className="Pokecard-data"> Type: {this.props.type}</div>
                <div className="Pokecard-data"> EXP: {this.props.exp}</div>

            </div>
        )
    }


}

export default Pokecard;