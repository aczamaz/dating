import { createStore, combineReducers } from 'redux';

import profile from './reducers/profile';
import dialogs from './reducers/dialogs';
import dating from './reducers/dating';
import search from './reducers/search';

const reducers = {
    profile,
    dialogs,
    dating,
    search
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;
