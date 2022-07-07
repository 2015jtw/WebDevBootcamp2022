import React, { useEffect } from 'react';
import App from './App';

// import MUI components
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';



// import components
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import UseTodoState from './hooks/UseTodoState';
import UseLocalStorageState from './hooks/UseLocalStorageState';



export default function TodoApp() {

    const initialTodos = [{ id: 1, task: "Do your hw", completed: false }];

    // use the UseTodoState hook to access the function to add/ delete, toggle and edit the todos
    const { todos, addTodo, deleteTodo, toggleTodo, editTodo } = UseTodoState(initialTodos)


    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}>
            <AppBar color="primary" position="static" style={{ height: "64px" }} >
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        editTodo={editTodo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        todos={todos}
                    />
                </Grid>
            </Grid>

        </Paper>
    )
}



// the structure for the todo app
// - Todo App (manage state) --> manage id, todo task, todo isCompleted
//     - Todo Form
//     - Todo List
//        - Todo Item 