import React, { SyntheticEvent, useEffect, useRef, useState } from "react"
import styles from "./styles/Todo.module.css"
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useAppDispatch } from "../storage/hooks.ts";
import { deleteTodo, updateTodo } from "../storage/reducers/todosReducer.ts";

interface TodoState{
    title: string;
    data: string;
    id: string;
}

export const TodoItem = (props: TodoState) => {

    const dispatch = useAppDispatch();

    const titleRef = useRef<any>();
    const dataRef = useRef<any>();

    useEffect(()=>{
        const textArea = document.getElementById(`${props.id}area`) as HTMLTextAreaElement;
        
        textArea.style.height = textArea.scrollHeight + "px"
    },[props.id])

    const [isEditing, setIsEditing] = useState(false);

    const handleDeleteTodo = (e) =>{
        dispatch(deleteTodo(e.currentTarget.id))
    }

    const handleEditing = () => {
        setIsEditing((prev) => !prev);

        if(!isEditing){
            const titleValue = titleRef.current.value ?? "";
            const dataValue = titleRef.current.value ?? "";

            dispatch(updateTodo({id:props.id, title: titleValue, data:dataValue}))
        }
    }
    const handleEdit = (e: Event | SyntheticEvent) => {
        e.preventDefault();

        handleEditing();
    }
    

    return(
        <form onSubmit={handleEdit} className={styles.ListItem}>
                    <div className={styles.ListItemHeader}>
                        <input disabled={!isEditing} ref={titleRef} defaultValue={props.title}/>
                        <div>
                            <button className={styles.UpdateButton} type="submit">
                                <FaEdit id={props.id}/>
                            </button>
                            <AiFillDelete id={props.id} onClick={handleDeleteTodo} className={styles.DeleteButton}/>
                        </div>
                    </div>
                    <textarea id={`${props.id}area`} disabled={!isEditing} ref={dataRef} defaultValue={props.data}/>
        </form>
    )
}