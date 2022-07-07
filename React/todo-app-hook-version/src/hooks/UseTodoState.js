import React from 'react';
import UseLocalStorageState from './UseLocalStorageState';

// import UUID
import { v4 as uuidv4 } from 'uuid';

export default function UseTodoState(initialTodos) {

    // manage state and effects with hooks

    // use the UseLocalStorage hook to get and set the todos to local storage asap
    const [todos, setTodos] = UseLocalStorageState("todos", initialTodos);

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

    return {
        todos,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        toggleTodo: toggleTodo,
        editTodo: editTodo
    }
}



