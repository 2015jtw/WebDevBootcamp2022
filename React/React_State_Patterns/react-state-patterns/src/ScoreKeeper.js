import React, { Component } from 'react';

class ScoreKeeper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }

    // func to add +1 to single kill
    singleKill() {
        // not a good way to update state like this if it relies on existing current sate
        this.setState({ score: this.state.score + 1 });
    }

    // better way to do this
    // tripleKill() {
    //     this.setState(state => { return { score: state.score + 1 } });
    //     this.setState(state => { return { score: state.score + 1 } });
    //     this.setState(state => { return { score: state.score + 1 } });
    // }

    incrementScore(oldState) {
        return { score: oldState.score + 1 };
    }

    // even more advanced and DRY way but not neccesary
    tripleKill() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }


    render() {
        return (
            <div>
                <h1>Score is {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.tripleKill}>Triple Kill</button>
            </div>
        )
    }
}

export default ScoreKeeper;