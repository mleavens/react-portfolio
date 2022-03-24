import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import AboutPage from './components/pages/AboutPage';
import HomePage from "./components/pages/HomePage";
import Users from "./components/User/Users";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/about" element = {<AboutPage />} />
        <Route path = "/users/:id/:name" element = {<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
