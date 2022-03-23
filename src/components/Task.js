import React from "react";
import PropTypes from "prop-types";
import { FaTrashAlt } from 'react-icons/fa';


export default function Task({ id, title, description, checked, handleDelete, handleCheck }){
    
    return (
        <div className = "card">
            <input 
            className = "item" 
            type = "checkbox" 
            checked = {checked}
            onChange = {() => handleCheck(id)}>
            </input>
            <div className = "text-display">{title}</div>
            <div>{description}</div>
            <button onClick = {() => handleDelete(id)} className = "delete">
                <FaTrashAlt />
            </button>
        </div>
    )
}

