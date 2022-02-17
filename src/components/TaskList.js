import React from 'react'

function TaskList({tasks, setTasks}) {
    return (
        <div>
            {tasks.map((task) => (
                <li className = 'task-list' key ={task.id}>
                    <input
                    type ="text"
                    value = {task.title} 
                    className = 'list' 
                    onChange = {(event) => event.preventDefault()}
                />
                </li>
            ))}
        </div>
    )
}

export default TaskList
