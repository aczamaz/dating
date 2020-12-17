import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';
import { BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';
import { AuthServiceProvider, UserServiceProvider, DialogsServiceProvider } from './components/hoc/services-context';
import AuthService from './services/auth-service';
import UserService from './services/user-service';
import DialogsService from './services/dialogs-service';
import store from './store';

const authService = new AuthService();
const userService = new UserService();
const dialogsService = new DialogsService();

ReactDOM.render(
    <Provider store={store}>
        <DialogsServiceProvider value={dialogsService}>
            <UserServiceProvider value={userService}>
                <AuthServiceProvider value={authService}>
                    <Router>
                        <App />
                    </Router>
                </AuthServiceProvider>
            </UserServiceProvider>
        </DialogsServiceProvider>
    </Provider>,
  document.getElementById('root')
);
