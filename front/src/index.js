import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';
import { BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';
import { AuthServiceProvider, UserServiceProvider, DialogsServiceProvider, DatingServiceProvider,SearchServiceProvider } from './components/hoc/services-context';
import AuthService from './services/auth-service';
import UserService from './services/user-service';
import DialogsService from './services/dialogs-service';
import DatingService from './services/dating-service';
import SearchService from './services/search-service';
import store from './store';

const authService = new AuthService();
const userService = new UserService();
const dialogsService = new DialogsService();
const datingService = new DatingService();
const searchService = new SearchService();

ReactDOM.render(
    <Provider store={store}>
        <SearchServiceProvider value={searchService}>
            <DatingServiceProvider value={datingService}>
                <DialogsServiceProvider value={dialogsService}>
                    <UserServiceProvider value={userService}>
                        <AuthServiceProvider value={authService}>
                            <Router>
                                <App />
                            </Router>
                        </AuthServiceProvider>
                    </UserServiceProvider>
                </DialogsServiceProvider>
            </DatingServiceProvider>
        </SearchServiceProvider>
    </Provider>,
  document.getElementById('root')
);
