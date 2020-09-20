import React from 'react';
import Footer from '../blocks/footer/footer';
import Header from '../blocks/header';
import Profile from '../pages/profile';
import './app.css';

const App = () =>
{
    return(
        <div className="app">
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    )
}

export default App;
