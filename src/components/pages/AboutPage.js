import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from '../shared/Card';
import { Link }from 'react-router-dom';

export default function AboutPage() {
    return (
        <>
        <Header />
        <div className = 'container'>
        <Card>
                <h1 className = "about-h1">About this application</h1>
                <p className = "about-link">
                    <Link to= "/"> Back to home</Link>
                </p>
        </Card>
        </div>
        <Footer />
        </>
    );
}
