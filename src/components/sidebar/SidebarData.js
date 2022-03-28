import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaInfo />,
        cName: 'nav-text'
    },
    {
        title: 'Task List',
        path: '/tasklist',
        icon: <FaIcons.FaTasks />,
        cName: 'nav-text'
    },

]