import { createStore, combineReducers } from 'redux';

import profile from './reducers/profile';


const reducers = {
    profile
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;
