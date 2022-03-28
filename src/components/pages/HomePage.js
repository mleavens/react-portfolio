import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Card from '../shared/Card';
import { Link }from 'react-router-dom';

export default function HomePage() {
    return (
        <>
        <Header />
        <div className = 'container'>
        <Card>
                <h1 className = 'home-h1'>Task Manager</h1>
                <p className = 'home-para-1'>Enjoy managing your tasks!</p>
                <p className = "home-para-2">
                    Learn more  
                    <Link to= "/about"> here</Link>
                </p>
        </Card>
        
        </div>
    <Footer />
    </>
    )
}
