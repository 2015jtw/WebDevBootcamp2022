import React, { Component } from 'react';

// import react-router-dom
import { Link } from 'react-router-dom';

// rc slider package
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'

// import material ui components
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';



class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            open: false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);

    }

    handleFormatChange(evt) {
        this.setState({
            format: evt.target.value,
            open: true
        })
        this.handleFormatChange(evt.target.value);
    }

    closeSnackbar(ev, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    }

    render() {
        const { level, changeLevel, handleFormatChange } = this.props;
        const { format } = this.state;

        return (
            <header className='Navbar'>

                <div className='Logo'>
                    <Link to={`/`}>React Color Picker</Link>

                </div>

                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                            trackStyle={[{ backgroundColor: "transparent" }]}
                            handleStyle={[
                                {
                                    backgroundColor: "green",
                                    outline: "none",
                                    border: "2px solid green",
                                    boxShadow: "none",
                                    width: "13px",
                                    height: "13px",
                                    marginLeft: "-7px",
                                    marginTop: "-4px",
                                },
                            ]}
                            railStyle={{ height: "8" }}
                        />
                    </div>
                </div>

                <div className='select-container'>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RBGA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>

                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id='message-id'>Format Changed To: {format.toUpperCase()}</span>}
                    ContentProps={{ "aria-describedby": "message-id" }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color='inherit' key="close">
                            <CloseIcon />
                        </IconButton>
                    ]}
                />


            </header>
        )
    }
}


export default Navbar;