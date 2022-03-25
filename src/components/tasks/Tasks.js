import React from "react";
import { useState, useContext } from "react";
import TaskContext from "../context/TaskContext"
import Task from "../tasks/Task";


export default function Tasks({ taskList, handleDelete, handleCheck }){
    // const { taskList } = useContext(TaskContext);

    if(!taskList || taskList.length === 0){
        return <p>No tasks today!</p>;
    };

    return (
        <span>

            {taskList.map((task) => (
                <Task 
                    key={task.id}
                    id = {task.id}
                    title={task.title}
                    description = {task.description}
                    handleDelete = {handleDelete}
                    checked = {task.checked}
                    handleCheck = {handleCheck} />
            ))}
            <br></br>
        </span>
    );
}
