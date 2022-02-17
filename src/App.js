import React from 'react'
import TaskForm from './components/TaskForm'
import {useState} from 'react'
import TaskList from './components/TaskList'

const App = () => {

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);


  return (
    <div className = 'container'>
      <div className = 'app-wrapper'>
        <div>
          <TaskForm 
          input = {input}
          setInput = {setInput}
          tasks = {tasks}
          setTasks = {setTasks}
          />
        </div>
    </div>
      <TaskList tasks = {tasks} setTasks = {setTasks} />
  </div>
  )
}

export default App
