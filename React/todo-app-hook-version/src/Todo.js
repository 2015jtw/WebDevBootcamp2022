import React, { Component } from 'react';

// import MUI components
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Edit from '@mui/icons-material/Edit';

// import hooks + components
import UseToggleState from './hooks/UseToggleState';
import EditTodoForm from './EditTodoForm';


export default function Todo(props) {

    const [isEditing, toggleEditing] = UseToggleState();

    return (
        <ListItem>

            {/* check if task needs to be edited */}
            {isEditing ? <EditTodoForm task={props.task} id={props.id} editTodo={props.editTodo} toggleEditing={toggleEditing} /> :

                <>
                    {/* check if completed button */}
                    < Checkbox tabIndex={-1} checked={props.completed} onClick={() => props.toggleTodo(props.id)} />

                    {/* text of task */}
                    <ListItemText style={{ textDecoration: props.completed ? "Line-through" : 'none' }}>
                        {props.task}
                    </ListItemText>


                    <ListItemSecondaryAction>
                        {/* edit button */}
                        <IconButton onClick={toggleEditing}>
                            <EditIcon aria-label="edit" />
                        </IconButton>

                        {/* delete button */}
                        <IconButton onClick={() => props.deleteTodo(props.id)}>
                            <DeleteIcon aria-label="delete" />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}
