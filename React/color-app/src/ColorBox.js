import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css'

class ColorBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    // func to change copied to true and back to false after 1.5s
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }

    render() {
        // destructure props and state
        const { name, background } = this.props;
        const { copied } = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className='ColorBox'>
                    {/* if this.state.copied is true, add className of show to do the overlay */}
                    <div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
                    <div className={`copy-message ${copied && "show"}`}>
                        <h1>Copied</h1>
                        <p>{background}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    <span className='see-more'>MORE</span>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;

