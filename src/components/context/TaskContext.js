import { useState, createContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({children}) => {
    const [taskList, setTask] = useState([{
        id: 5,
        title: 'This is a task context',
        description: 'This is a test context'
    }])

    return (
    <TaskContext.Provider value = {{taskList}}>
        {children}
    </TaskContext.Provider>
    )
}

export default TaskContext;