import React from "react";
import { useAppSelector } from "../storage/hooks.ts"
import styles from "./styles/Todo.module.css"
import { TodoItem } from "./TodoItem.tsx";

export const TodoList = () => {

    const todos = useAppSelector((state) => (state.todos.todos));

    return(
        <div className={styles.List}>
            {todos.length === 0 ? (
                <p className={styles.EmptyList}>Nothing is here yet..</p>
            ):(
                todos.map((todo,index) => (
                <TodoItem key={index} title={todo.title as string} data={todo.data as string} id={todo.id as string}/>
            ))
            )}
        </div>
    )
}