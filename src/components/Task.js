import React from "react";
import PropTypes from "prop-types";
import { FaTrashAlt } from 'react-icons/fa';
import Card from "./shared/Card"


export default function Task({ id, title, description, checked, handleDelete, handleCheck }){
    
    return (
        <Card>
            <input 
            className = "item" 
            type = "checkbox" 
            checked = {checked}
            onChange = {() => handleCheck(id)}>
            </input>
            <div style = {checked ? {textDecoration: "line-through"} : null} className = "text-display">{title}</div>
            <div style = {checked ? {textDecoration: "line-through"} : null}>{description}</div>
            <button onClick = {() => handleDelete(id)} className = "delete">
                <FaTrashAlt />
            </button>
        </Card>
    )
}

Task.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
}
