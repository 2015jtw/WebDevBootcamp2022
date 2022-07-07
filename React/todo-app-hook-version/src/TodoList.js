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

    // conditional to make sure paper is only rendered if there are todos
    if (props.todos.length)
        return (

            <Paper>
                <List>
                    {/*map over the todos prop to make them into List items  */}
                    {props.todos.map((todo, i) => (
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
                            {/*  */}

                            {/* dont show divider on the final task */}
                            {i < props.todos.length - 1 && <Divider />}

                        </>
                    ))}

                </List>
            </Paper>
        );

    return null;

}
