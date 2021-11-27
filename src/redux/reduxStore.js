import {combineReducers, createStore} from 'redux';
import appReducer from './appReducer';

const reducers = combineReducers({
    appReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;