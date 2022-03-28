import React from 'react'
import Tasks from "../tasks/Tasks";
import AddTask from "../tasks/AddTask";
import Footer from './Footer';
import Header from './Header';

export default function HomePage() {
    return (
        <>
        <Header />
        <div className = 'container'>
        <AddTask />
        <Tasks />
    </div>
    <Footer />
    </>
    )
}
