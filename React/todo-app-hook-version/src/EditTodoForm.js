import React, { Component } from 'react';

import TextField from '@mui/material/TextField';
import UseInputState from './hooks/UseInputState';


export default function EditTodoForm(props) {

    const [value, handleChange, reset] = UseInputState(props.task)

    return (
        <form style={{ marginLeft: "1rem", width: "100%" }} onSubmit={e => {
            e.preventDefault();
            props.editTodo(props.id, value);
            reset();
            props.toggleEditing();
        }}>
            <TextField margin='normal' value={value} onChange={handleChange} fullWidth autoFocus />
        </form>
    )
}