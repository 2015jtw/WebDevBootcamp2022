import React, { Component } from 'react'


class MultipleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        alert(`You typed: ${this.state.username}`);
        this.setState({ username: "" })
    }

    render() {

        return (
            <div>
                <h1>Multiple Input Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.username}
                        name="username"
                        onChange={this.handleChange}
                        placeholder='username'
                    />
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        placeholder='email'
                    />
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                        placeholder='password'
                    />
                </form>
            </div>
        )
    }
}

export default MultipleForm;