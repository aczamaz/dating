import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../blocks/footer/footer';
import Header from '../blocks/header';
import Profile from '../pages/profile';
import Dialogs from '../pages/dialogs';
import Dialog from '../pages/dialog';
import './app.css';

const App = () =>
{
    return(
        <div className="app">
            <Header/>
            <Router>
                <Switch>
                    <Route path="/profile/" component={Profile}/>
                    <Route path="/" component={Profile} exact/>
                    <Route path="/dialogs/:dialog" component={Dialog} />
                    <Route path="/dialogs/" component={Dialogs} exact />
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;
