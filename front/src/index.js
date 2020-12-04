import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';
import { BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';
import { AuthServiceProvider } from './components/hoc/services-context';
import AuthService from './services/auth-service';
import store from './store';

const authService = new AuthService();
ReactDOM.render(
    <Provider store={store}>
        <AuthServiceProvider value={authService}>
            <Router>
                <App />
            </Router>
        </AuthServiceProvider>
    </Provider>,
  document.getElementById('root')
);
