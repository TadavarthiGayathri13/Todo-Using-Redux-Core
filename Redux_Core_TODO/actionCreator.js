//it just return the action object 
// the function returns the action object called as actionCreators

import { ADD_TODO, ADD_USER, REMOVE_TODO, TOGGLE_TODO } from "./constants.js";

export function addTodoActionCreator(todo) {
    return{
        type: ADD_TODO,
        payload: todo
   }
}

export function removeTodoActionCreator(todoId) {
    return{
        type:REMOVE_TODO,
        payload: todoId
    }
}

export function ToggleTodoActionCreator(todoId) {
    return {
        type: TOGGLE_TODO,
        payload: todoId
    }
}
export function addUserActionCreator(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}