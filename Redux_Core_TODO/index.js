//{type:" ", payload:" "}
//dispatch({type:"ADD",payload:1}) here we are hardcoded everytime we want to disptach or update the type its difficult that's why we are using constants for payload also we are using actionCreater file 

import { addTodoActionCreator, addUserActionCreator, removeTodoActionCreator } from './actionCreator.js';
import store from './store.js';

console.log(store.getState());  // it will give the inital state 
 store.dispatch(addTodoActionCreator('Buy Milk'));
 console.log(store.getState().todoState);
 store.dispatch(addTodoActionCreator('Buy Eggs'));
 console.log(store.getState().todoState);

 store.dispatch(addUserActionCreator('John Doe'));
 console.log(store.getState().userState);