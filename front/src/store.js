import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import profile from './reducers/profile';

const reducers = {
    profile,
    form: formReducer
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

console.log(store.getState());
export default store;
