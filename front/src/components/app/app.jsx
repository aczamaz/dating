import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../blocks/footer/footer';
import Header from '../blocks/header';
import Profile from '../pages/profile';
import Dialogs from '../pages/dialogs';
import Dialog from '../pages/dialog';
import Dating from '../pages/dating'
import Search from '../pages/search';
import SearchDetail from '../pages/search-detail';
import Main from '../pages/main';
import Registration from '../blocks/registration'
import './app.css';

const App = () =>
{
    return(
        <div className="app">
            <Header/>
                <Switch>
                    <Route path="/profile/" component={Profile}/>
                    <Route path="/" component={Main} exact/>
                    <Route path="/dialogs/:dialog" component={Dialog} />
                    <Route path="/dialogs/" component={Dialogs} exact />
                    <Route path="/dating/" component={Dating} exact />
                    <Route path="/search/" component={Search} exact />
                    <Route path="/search/:id" component={SearchDetail}/>
                </Switch>
            <Footer/>
            <Registration />
        </div>
    )
}

export default App;
