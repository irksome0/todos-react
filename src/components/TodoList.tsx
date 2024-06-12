import React from "react";
import { useAppDispatch, useAppSelector } from "../storage/hooks.ts"
import { deleteTodo } from "../storage/reducers/todosReducer.ts";
import styles from "./styles/Todo.module.css"
import { AiFillDelete } from "react-icons/ai";

export const TodoList = () => {

    const dispatch = useAppDispatch()

    const todos = useAppSelector((state) => (state.todos.todos));

    const handleDeleteTodo = (e) =>{
        dispatch(deleteTodo(e.currentTarget.id))
    }

    return(
        <div className={styles.List}>
            {todos.length === 0 ? (
                <p className={styles.EmptyList}>Nothing is here yet..</p>
            ):(
                todos.map((todo,index) => (
                <div className={styles.ListItem} key={index}>
                    <div className={styles.ListItemHeader}>
                        <h3>{todo.title}</h3>
                        <AiFillDelete id={todo.id as string} onClick={handleDeleteTodo} className={styles.DeleteButton}/>
                    </div>
                    <p>{todo.data}</p>
                </div>
            ))
            )}
        </div>
    )
}