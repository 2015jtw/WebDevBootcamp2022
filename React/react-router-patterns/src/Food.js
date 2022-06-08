import React, { Component } from 'react';


class Food extends Component {
    render() {
        return (
            <div>
                <h3>I love to eat {this.props.name}</h3>
                <img src={this.props.name} alt={this.props.name}></img>
            </div>
        )
    }
}

export default Food;