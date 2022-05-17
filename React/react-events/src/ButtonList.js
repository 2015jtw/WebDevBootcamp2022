import React, { Component } from 'react'
import "./ButtonList.css";


class ButtonList extends Component {

    static defaultProps = {
        colors: ['red', 'green', 'orange', 'purple']
    }

    constructor(props) {
        super(props);
        this.state = {
            color: "cyan"
        }
    }

    changeColor(newColor) {
        console.log(newColor)
        this.setState({ color: newColor })
    }

    render() {


        return (
            <div className='ButtonList' style={{ backgroundColor: this.state.color }}>
                {
                    this.props.colors.map(c => {
                        const colorObj = { backgroundColor: c };
                        return <button onClick={this.changeColor.bind(this, c)} style={colorObj}>Click on Me!</button>
                    })
                }
            </div >
        )
    }
}

export default ButtonList