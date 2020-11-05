import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../blocks/footer/footer';
import Header from '../blocks/header';
import Profile from '../pages/profile';
import Dialogs from '../pages/dialogs';
import Dialog from '../pages/dialog';
import Dating from '../pages/dating'
import Search from '../pages/search';
import SearchDetail from '../pages/search-detail';
import Autorization from '../blocks/autorization';
import './app.css';

const App = () =>
{
    return(
        <div className="app">
            <Router>
            <Header/>
                <Switch>
                    <Route path="/profile/" component={Profile}/>
                    <Route path="/" component={Profile} exact/>
                    <Route path="/dialogs/:dialog" component={Dialog} />
                    <Route path="/dialogs/" component={Dialogs} exact />
                    <Route path="/dating/" component={Dating} exact />
                    <Route path="/search/" component={Search} exact />
                    <Route path="/search/:id" component={SearchDetail}/>
                </Switch>
            <Autorization show={true} />
            <Footer/>
            </Router>
        </div>
    )
}

export default App;
