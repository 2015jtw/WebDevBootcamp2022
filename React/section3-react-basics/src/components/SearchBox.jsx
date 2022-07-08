import React, { Component } from 'react';
import '../SearchBox.css'

class SearchBox extends Component {

    render() {

        return (
            <div>
                <input
                    className={`search-box ${this.props.className}`}
                    onChange={this.props.handleChange}
                    placeholder={this.props.placeholder}
                    type='search'
                />
            </div>
        )
    }
}

export default SearchBox;