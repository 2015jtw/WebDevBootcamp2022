import React, { useState } from 'react';
import App from './App';

// import MUI components
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

// import UUID
import { v4 as uuidv4 } from 'uuid';

// import components
import TodoList from './TodoList';
import TodoForm from './TodoForm';



export default function TodoApp() {

    // manage state and effects with hooks
    const initialTodos = [
        { id: uuidv4(), task: 'clean car', completed: true },
        { id: uuidv4(), task: 'wash dog', completed: false },
        { id: uuidv4(), task: 'do homework', completed: false },
    ]
    const [todos, setTodos] = useState(initialTodos);

    // method to create new todo and pass it down as a prop
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    }

    // method to delete a todo and pass it down as a prop
    const deleteTodo = todoId => {
        // filter out removed todo
        const updatedTodos = todos.filter((todo) => (
            todo.id !== todoId
        ))
        // call setTodos with new todos array
        setTodos(updatedTodos)
    }

    // method to update a todo and pass it down as a prop
    const toggleTodo = todoId => {
        // map 
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
        setTodos(updatedTodos);
    }

    // method to edit a task
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo)
        setTodos(updatedTodos);
    }

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