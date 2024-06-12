
import React, { SyntheticEvent, useRef } from "react"
import styles from "./styles/CreateTodo.module.css"

import {useAppDispatch} from "../storage/hooks.ts"
import { addTodo } from "../storage/reducers/todosReducer.ts"

export const TodoForm = ({ onClose }) =>{
    const dispatch = useAppDispatch();

    const titleRef = useRef<any>();
    const dataRef = useRef<any>();

    const handleSubmit = (e: Event|SyntheticEvent) => {
        e.preventDefault();

        const titleData = titleRef.current.value ?? "Nothing";
        const dataData = dataRef.current.value ?? "Nothin";

        dispatch(addTodo({title: titleData, data: dataData}));
        onClose();
    }

    return(
        <div className={styles.TodoFormWrapper}>
            <form onSubmit={handleSubmit} className={styles.TodoForm}>
                <label htmlFor="title">Title</label>
                <input ref={titleRef} type="text" id="title" name="title" placeholder="What`s task about"/>
                <label htmlFor="data">About</label>
                <textarea ref={dataRef} id="data" name="data" placeholder="Provide more detailed information about task..."/>
                <button className={styles.CreateTodoButton} type="submit">Create!</button>
            </form>
        </div>
    )
}