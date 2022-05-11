import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxContainer.css'


class ColorBoxContainer extends Component {

    static defaultProps = {
        numBoxes: 20,
        allColors: [
            'purple', 'magenta', 'green', 'pink', 'red', 'blue', 'yellow', 'orange'
        ]
    }

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(
            () => <ColorBox color={this.props.allColors} />
        )

        return (
            <div className='ColorBoxContainer'>
                {boxes}

            </div>
        )

    }
}


export default ColorBoxContainer;