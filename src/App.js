import React from 'react'
import {useState} from 'react'
import TaskData from './components/TaskData';
import Tasks from "./components/Tasks";

const App = () => {

  const [taskList, setTaskList] = useState(TaskData);

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  const checkTask = (id) => {
    setTaskList(
      taskList.map((task) => 
        task.id === id ? { ...task, checked: !task.checked} : task
      )
    );
  }

  return (
    <div className = 'container'>
        <h1>Welcome to Task Manager</h1>
      <Tasks taskList = {taskList}
      handleDelete = {deleteTask}
      handleCheck = {checkTask} />
  </div>
  )
}

export default App;
