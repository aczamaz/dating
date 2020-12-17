import { createStore, combineReducers } from 'redux';

import profile from './reducers/profile';
import dialogs from './reducers/dialogs';

const reducers = {
    profile,
    dialogs
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;
