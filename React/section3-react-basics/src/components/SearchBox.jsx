import React, { Component } from 'react';

class SearchBox extends Component {

    render() {

        return (
            <div>
                <input
                    className={this.props.className}
                    onChange={this.props.handleChange}
                    placeholder={this.props.placeholder}
                    type='search'
                />
            </div>
        )
    }
}

export default SearchBox;