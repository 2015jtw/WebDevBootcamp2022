import React, { Component } from 'react';
import axios from 'axios'

class GithubUserInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            img: ''
        }
    }

    async componentDidMount() {
        const user = `https://api.github.com/users/${this.props.username}`;
        let res = await axios.get(user);
        this.setState({
            name: res.data.name,
            img: res.data.avatar_url
        })
    }

    render() {

        return (
            <div>
                <h1>Github User Info</h1>
                <img src={this.state.img}></img>
                <p>{this.state.name}</p>

            </div>
        )
    }
}

export default GithubUserInfo;