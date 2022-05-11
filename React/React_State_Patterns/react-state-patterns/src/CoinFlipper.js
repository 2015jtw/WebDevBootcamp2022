import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './CoinHelper'

class CoinFlipper extends Component {

    static defaultProps = {
        coins: [
            {
                side: 'head',
                url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'
            },
            {
                side: 'tail',
                url: 'https://www.usmint.gov/wordpress/wp-content/uploads/2022/02/2022-kennedy-half-dollar-uncirculated-reverse-768x768.jpg'
            }
        ]

    }

    // need to keep track of current coin, numFlips, numHeads and numTails
    constructor(props) {
        super(props);
        this.state = {
            numFlips: 0,
            numHeads: 0,
            numTails: 0,
            currentCoin: null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);

        this.setState(st => {
            return {
                currentCoin: newCoin,
                numFlips: st.numFlips + 1,
                numHeads: st.numHeads + (newCoin.side === 'head' ? 1 : 0),
                numTails: st.numTails + (newCoin.side === 'tail' ? 1 : 0)

            }
        })
    }

    handleClick(e) {
        this.flipCoin();
    }


    render() {


        return (
            <div className='CoinFlipper'>
                <h1>Let's Flip a Coin</h1>
                {this.state.currentCoin && <Coin
                    info={this.state.currentCoin}
                />}
                <button onClick={this.handleClick}>Flip Me</button>
                <p>Out of {this.state.numFlips} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails</p>
            </div>
        )
    }
}

export default CoinFlipper;