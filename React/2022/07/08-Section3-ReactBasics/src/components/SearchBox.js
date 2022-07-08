import React, { Component } from 'react';

class SearchBox extends Component {

    render() {

        return (
            <div>
                <input onChange={this.props.handleChange} placeholder='Search Monsters' type='search' />
            </div>
        )
    }
}

export default SearchBox;