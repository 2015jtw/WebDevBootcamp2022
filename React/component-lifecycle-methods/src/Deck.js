import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css'

const API_url = 'https://deckofcardsapi.com/api/deck/new/shuffle/';


class Deck extends Component {



    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            drawnCards: []
        }
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        const deck = await axios.get(API_url);
        this.setState({
            deck: deck.data
        })

    }

    async getCard() {

        let card_id = this.state.deck.deck_id;
        try {
            let cardUrl = `https://deckofcardsapi.com/api/deck/${card_id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            console.log(cardRes.data);
            if (!cardRes.data.success) {
                throw new Error("No cards remaining");
            }
            let card = cardRes.data.cards[0];
            this.setState(st => ({
                drawnCards: [
                    ...st.drawnCards,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]

            }))
        }
        catch (err) {
            alert(err)
        }





    }

    render() {
        const cards = this.state.drawnCards.map(c => (
            <Card key={c.id} name={c.name} image={c.image} />
        ))


        return (
            <div>
                <div>
                    <h1>Welcome to the Card Dealer Game</h1>
                    <button onClick={this.getCard}>Draw Card</button>
                </div>

                <div className='Deck-area'>
                    {cards}
                </div>


            </div>

        )
    }
}


export default Deck;