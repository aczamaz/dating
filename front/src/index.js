import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';
import { BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';
import { AuthServiceProvider } from './components/hoc/services-context';
import { UserServiceProvider } from './components/hoc/services-context';
import AuthService from './services/auth-service';
import UserService from './services/user-service';
import store from './store';

const authService = new AuthService();
const userService = new UserService();

ReactDOM.render(
    <Provider store={store}>
        <UserServiceProvider value={userService}>
            <AuthServiceProvider value={authService}>
                <Router>
                    <App />
                </Router>
            </AuthServiceProvider>
        </UserServiceProvider>
    </Provider>,
  document.getElementById('root')
);
