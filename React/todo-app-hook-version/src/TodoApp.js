import React, { useState } from 'react';
import App from './App';

// import MUI components
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

// import components
import TodoList from './TodoList';



export default function TodoApp() {

    // manage state and effects with hooks
    const initialTodos = [
        { id: 1, task: 'clean car', completed: false },
        { id: 2, task: 'wash dog', completed: false },
        { id: 3, task: 'do homework', completed: false },
    ]
    const [todos, setTodos] = useState(initialTodos);

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

            <TodoList todos={todos} />
        </Paper>
    )
}



// the structure for the todo app
// - Todo App (manage state) --> manage todo id, todo task, todo isCompleted
//     - Todo Form
//         - Todo List
//             - Todo Item 