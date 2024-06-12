import React from "react"
import styles from "./styles/CreateTodo.module.css"
import { IoMdCloseCircle } from "react-icons/io";
import { TodoForm } from "./TodoForm.tsx";

export const CreateTodoMenu = ({ onClose }) =>{

    return(
        <div className={styles.CreateTodoMenu}>
            <div className={styles.CreateMenu}>
                <div className={styles.CreateMenuHeader}>
                    <h1>New task</h1>
                    <IoMdCloseCircle className={styles.CreateMenuExit} onClick={onClose}/>
                </div>
                <TodoForm onClose={onClose}/>
            </div>
        </div>
    )
}