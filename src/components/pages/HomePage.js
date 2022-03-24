import React from 'react'
import {useState} from 'react'
import TaskData from '../tasks/TaskData';
import Tasks from "../tasks/Tasks";
import Card from "../shared/Card";
import AddTask from "../tasks/AddTask";
import {v4 as uuidv4 } from "uuid"
import SearchTask from '../tasks/SearchTask';
import Footer from './Footer';
import Header from './Header';

export default function HomePage() {
    const [taskList, setTaskList] = useState(TaskData);
    const [search, setSearch] = useState('');

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
        <>
        <Header />
        <div className = 'container'>
        <AddTask handleAdd = {addTask}/>
        <SearchTask search = {search} setSearch = {setSearch}/>
    <Tasks
        taskList = {taskList.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))}
        handleDelete = {deleteTask}
        handleCheck = {checkTask} 
    />
    </div>
    <Footer />
    </>
    )
}
