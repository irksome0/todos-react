import React from "react"
import styles from "./styles/ApplicationWindow.module.css"
import { CreateTodoButton } from "./CreateTodoButton.tsx"
import { TodoList } from "./TodoList.tsx"

export const ApplicationWindow = () => {

    return(
        <div className={styles.Window}>
            <h1 className={styles.WindowTitle}>Todos</h1>
            <CreateTodoButton/>
            <TodoList/>
        </div>
    )
}