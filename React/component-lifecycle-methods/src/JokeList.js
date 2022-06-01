import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import './JokeList.css';

import { v4 as uuidv4 } from 'uuid';


const jokeURL = `https://icanhazdadjoke.com/`;

class JokeList extends Component {

    static defaultProps = {
        numJokesToGet: 10
    }

    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            isLoading: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        console.log(this.seenJokes);
    }

    componentDidMount() {

        if (this.state.jokes.length === 0) {
            this.getJokes();
        }

    }

    async getJokes() {

        try {
            let jokes = [];

            while (jokes.length < this.props.numJokesToGet) {
                let res = await axios.get(jokeURL, {
                    headers: {
                        Accept: 'application/json'
                    }
                });

                let newJoke = res.data.joke;
                if (!this.seenJokes.has(newJoke)) {
                    // make it into an object
                    jokes.push({ id: uuidv4(), text: newJoke, votes: 0 });
                }
                else {
                    console.log(`Found duplicate joke: ${newJoke}`)
                }

            }


            this.setState(st => ({
                isLoading: false,
                jokes: [...st.jokes, ...jokes]
            }),
                () => { window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)) }
            )
            window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        }
        catch (err) {
            alert(`Found error: ${err}`)
        }

    }

    handleVote(id, delta) {
        this.setState(st => ({
            jokes: st.jokes.map(j => j.id === id ? { ...j, votes: j.votes + delta } : j
            )
        }),
            () => { window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)) }
        )
    }

    handleClick() {
        this.setState({ isLoading: true }, this.getJokes);
    }

    render() {
        // const jokes = this.state.jokes.map(j => (
        //     <Joke joke={j.joke} votes={j.votes} />
        // ))

        if (this.state.isLoading) {
            return (
                <div className='JokeList-spinner'>
                    <i className='far fa-8x fa-laugh fa-spin' />
                    <h1 JokeList-title>Loading...</h1>
                </div>
            )
        }

        let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);

        return (
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'><span>DAD</span> JOKES</h1>
                    <img src='https://cdn-icons-png.flaticon.com/512/742/742920.png' />
                    <button onClick={this.handleClick} className='JokeList-getMore'>New Jokes</button>
                </div>

                <div className='JokeList-container'>
                    {jokes.map(j => (
                        <Joke
                            key={j.id} votes={j.votes} text={j.text}
                            upvote={() => this.handleVote(j.id, 1)}
                            downvote={() => this.handleVote(j.id, -1)}
                        />

                    ))}


                </div>

            </div>
        )
    }
}

export default JokeList;


