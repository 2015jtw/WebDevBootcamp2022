import React, { Component } from 'react';

// import MUI components
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

// import components
import UseInputState from './hooks/UseInputState';

export default function TodoForm(props) {

    const [value, handleChange, reset] = UseInputState("");

    return (
        <div>
            <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
                <form onSubmit={e => {
                    e.preventDefault()
                    props.addTodo(value);
                    reset();
                }}>
                    <TextField onChange={handleChange} value={value} label="Add New Todo" margin='normal' fullWidth></TextField>
                </form>
            </Paper>
        </div>
    )
}