import React from 'react';
import Footer from '../blocks/footer/footer';
import Header from '../blocks/header';
import Profile from '../pages/profile';
import Dialogs from '../pages/dialogs';
import './app.css';

const App = () =>
{
    return(
        <div className="app">
            <Header/>
            <Dialogs/>
            <Footer/>
        </div>
    )
}

export default App;
