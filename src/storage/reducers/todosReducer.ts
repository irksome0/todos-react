import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {uid} from 'uid'

interface TodoItemState {
    id: String,
    title: String;
    data: String;     
}

interface TodoState {
    todos: Array<TodoItemState>;
}

const initialState : TodoState = {
    todos: [],
}

const todosSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const id = uid();
            if(action.payload.title !== "" || action.payload.data !== ""){
                const newTodo: TodoItemState = {
                    id: id,
                    title: action.payload.title,
                    data: action.payload.data,
                }
                state.todos = [newTodo, ...state.todos];
            }
        },
        deleteTodo: (state,action) => {
            const index = state.todos.findIndex(({id}) => id === action.payload);
            state.todos.splice(index,1); 
        },
        updateTodo: (state,action) => {
            const index = state.todos.findIndex(({id}) => id === action.payload.id);
            const updatedTodo: TodoItemState = {
                id: action.payload.id,
                title: action.payload.title,
                data: action.payload.data
            };
            state.todos[index] = updatedTodo; 
        }
    }
})

export const { addTodo, deleteTodo, updateTodo} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;
export default todosSlice.reducer