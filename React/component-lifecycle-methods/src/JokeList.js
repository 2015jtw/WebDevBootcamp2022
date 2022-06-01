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
            jokes: [],

        }
    }

    async componentDidMount() {
        let jokes = [];

        while (jokes.length < this.props.numJokesToGet) {
            let res = await axios.get(jokeURL, {
                headers: {
                    Accept: 'application/json'
                }
            });
            // make it into an object
            jokes.push({ id: uuidv4(), text: res.data.joke, votes: 0 });
        }
        this.setState({
            jokes: jokes
        })
        console.log(jokes);
    }

    handleVote(id, delta) {
        this.setState(st => ({
            jokes: st.jokes.map(j => j.id === id ? { ...j, votes: j.votes + delta } : j
            )
        }))
    }

    render() {

        // const jokes = this.state.jokes.map(j => (
        //     <Joke joke={j.joke} votes={j.votes} />
        // ))

        return (
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'><span>DAD</span> JOKES</h1>
                    <img src='https://cdn-icons-png.flaticon.com/512/742/742920.png' />
                    <button className='JokeList-getMore'>New Jokes</button>
                </div>

                <div className='JokeList-container'>
                    {this.state.jokes.map(j => (
                        <Joke key={j.id} votes={j.votes} text={j.text}
                            upvote={() => this.handleVote(j.id, 1)} downvote={() => this.handleVote(j.id, -1)}
                        />

                    ))}


                </div>

            </div>
        )
    }
}

export default JokeList;