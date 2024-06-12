import React, { useState } from "react"
import {createPortal} from "react-dom"
import styles from "./styles/CreateTodo.module.css"
import { CreateTodoMenu } from "./CreateTodoMenu.tsx";

export const CreateTodoButton = () => {
    const [menuShow, setMenuShow] = useState(false);

    const handleShowMenu = () =>{
        setMenuShow(prev => !prev)
    }

    return (
        <div style={{width:"50%"}}>
            <button onClick={handleShowMenu} className={styles.CreateTodoButton}>
                Create a new todo
            </button>
            {menuShow && createPortal(
                    <CreateTodoMenu onClose={() => setMenuShow(false)}></CreateTodoMenu>,
                    document.body
                )}
        </div>
    )
}