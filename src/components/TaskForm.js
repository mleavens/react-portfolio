import React from 'react'
import {v4 as uuidv4} from 'uuid';

const TaskForm =( {input, setInput, tasks, setTasks}) => {

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, {id: uuidv4(), title: input, completed: false}])
        setInput(''); 
    };

    return (
        <form onSubmit = {onFormSubmit}>
            <input 
            type ='text' 
            placeholder = "Enter a task..." 
            className = 'task-input'
            value = {input} 
            required
            onChange={onInputChange}
            />
            <button classname = "button-add" type = "submit">
                Add
            </button>
        </form>

    )
}

export default TaskForm;
