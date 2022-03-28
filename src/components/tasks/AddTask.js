import React from 'react';
import Card from "../shared/Card";
import { useState, useContext, useEffect } from "react";
import TaskContext from "../context/TaskContext";



export default function AddTask({ handleAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const { addTask, updateTask, taskEdit } = useContext(TaskContext);

    useEffect(() => {
        if(taskEdit.edit === true){
            setTitle(taskEdit.task.title);
            setDescription(taskEdit.task.description);
        }
    }, [taskEdit]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.length !==0 && description.trim().length > 8){
            const newTask = {
                title,
                description,
            };
        if(taskEdit.edit === true){
            updateTask(taskEdit.task.id, newTask)
        }else{
            addTask(newTask)
        };
            setTitle("");
            setDescription("");
        }
    }

    return (
        <Card>
            <form onSubmit = {handleSubmit} className = "form">
                <h2 className = "add-task-title"> Add a task </h2>
                <div className = "input-box">
                    <input className = "input"
                    onChange = {handleTitleChange} 
                    type = "text" 
                    placeholder = "Task title" 
                    value = {title}/>
                    <input className = "input"
                    onChange = {handleDescriptionChange}
                    type = "text" 
                    placeholder = "Task description" 
                    value = {description}/>
                </div>
                <button className = "btn">Add Task</button>
            </form>
        </Card>
    );
}
