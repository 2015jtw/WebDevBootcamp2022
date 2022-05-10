import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button onClick={function () { alert("clicked") }}>You Clicked Me</button>
        )
    }
}

export default Button;