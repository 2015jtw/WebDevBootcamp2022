import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(newLevel) {
        this.setState({
            level: newLevel
        })
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;

        const colorBoxes = colors[level].map((color) => {
            return <ColorBox background={color.hex} name={color.name} />
        })

        return (
            <div className='Palette'>
                {/* navbar goes here */}
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                />


                <div className='Palette-colors'>
                    {/* put a bunch of color boxes here */}
                    {colorBoxes}
                </div>

                {/* footer eventually */}
            </div>
        )
    }
}

export default Palette;