import { createStore, combineReducers } from 'redux';

import profile from './reducers/profile';


const reducers = {
    profile
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

console.log(store.getState());
export default store;
