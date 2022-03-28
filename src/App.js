import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import AboutPage from './components/pages/AboutPage';
import HomePage from "./components/pages/HomePage";
import { TaskProvider } from "./components/context/TaskContext";
import Navbar from "./components/sidebar/Navbar";
import TaskListPage from "./components/pages/TaskListPage";



const App = () => {
  return (
    <TaskProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/about" element = {<AboutPage />} />
        <Route path = "/tasklist" element = {<TaskListPage />} />
      </Routes>
    </BrowserRouter>
    </TaskProvider>
  );
}

export default App; 
