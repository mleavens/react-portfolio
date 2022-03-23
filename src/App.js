import React from 'react'
import {useState} from 'react'
import TaskData from './components/TaskData';
import Tasks from "./components/Tasks";
import Card from "./components/shared/Card";
import AddTask from "./components/AddTask";
import {v4 as uuidv4 } from "uuid"

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
  };
  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTaskList([newTask, ...taskList]);
  }

  return (
    <div className = 'container'>
        <h1>Welcome to Task Manager</h1>
        <AddTask handleAdd = {addTask}/>
      <Tasks
      taskList = {taskList}
      handleDelete = {deleteTask}
      handleCheck = {checkTask} 
      />
  </div>
  )
}

export default App;
