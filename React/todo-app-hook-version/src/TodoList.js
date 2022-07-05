import React, { Component } from 'react';


// import MUI components
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

// import components
import Todo from './Todo';



export default function TodoList(props) {

    return (
        <Paper>
            <List>
                {/*map over the todos prop to make them into List items  */}
                {props.todos.map((todo) => (
                    <>
                        <Todo
                            editTodo={props.editTodo}
                            toggleTodo={props.toggleTodo}
                            deleteTodo={props.deleteTodo}
                            task={todo.task}
                            id={todo.id}
                            key={todo.id}
                            completed={todo.completed}
                        />
                        <Divider />
                    </>
                ))}

            </List>
        </Paper>
    )

}
