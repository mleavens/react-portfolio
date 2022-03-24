import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from '../shared/Card';
import { Link }from 'react-router-dom';

export default function AboutPage() {
    return (
        <>
        <Header />
        <Card>
            <h1>About this application</h1>
            <p>
                <Link to= "/"> Back to home</Link>
            </p>
        </Card>
        <Footer />
        </>
    );
}
