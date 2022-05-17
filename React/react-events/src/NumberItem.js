import React, { Component } from 'react';


class NumberItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(evt) {
        this.props.remove(this.props.value)
    }
    render() {
        return (
            <div>
                <li>{this.props.value}</li>
                <button onClick={this.handleRemove}>X</button>
            </div>
        )
    }
}

export default NumberItem;