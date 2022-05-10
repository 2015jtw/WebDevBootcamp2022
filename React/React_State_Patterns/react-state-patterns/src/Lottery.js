import React, { Component } from 'react';

import LottoBall from './LottoBall';

class Lottery extends Component {

    static defaultProps = {
        title: 'Lottery',
        numBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.maxBalls }) }
    }

    generate() {

    }

    handleClick() {
        this.generate();
    }


    render() {

        return (
            <div className='Lottery'>

                <h1>{this.props.title}</h1>

                <div>
                    {this.state.nums.map(n => (<LottoBall num={n} />))}
                </div>

                <button onClick={this.handleClick}>Generate</button>

            </div>
        )
    }
}


export default Lottery;