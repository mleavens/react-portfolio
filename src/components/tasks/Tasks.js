import React from "react";
import Task from "../tasks/Task";


export default function Tasks({ taskList, handleDelete, handleCheck }){

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
