import React, { Component } from 'react';
import Tasks from "../tasks/Tasks";
import AddTask from "../tasks/AddTask";
import Footer from './Footer';
import Header from './Header';

export class TaskListPage extends Component {
    render() {
        return (
        <>
        <Header />
            <div className = 'container'>
                <AddTask />
                <Tasks />
            </div>
        <Footer />
        </>
        );
}
}

export default TaskListPage;
