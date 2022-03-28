import React from "react";
import PropTypes from "prop-types";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Card from "../shared/Card"
import TaskContext from "../context/TaskContext"
import { useContext } from "react";


export default function Task({ id, title, description, checked, task }){
    
    const { deleteTask, checkTask, editTask } = useContext(TaskContext)

    return (
        <Card>
            <input 
            className = "item" 
            type = "checkbox" 
            checked = {checked}
            onChange = {() => checkTask(id)}>
            </input>
            <div style = {checked ? {textDecoration: "line-through"} : null} className = "text-display">{title}</div>
            <div style = {checked ? {textDecoration: "line-through"} : null}>{description}</div>
            <button onClick = {() => editTask(task)} className = "edit">
                <FaEdit />
            </button>
            <button onClick = {() => deleteTask(id)} className = "delete">
                <FaTrashAlt />
            </button>
        </Card>
    )
}


