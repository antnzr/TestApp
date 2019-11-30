import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
};

const store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware,
    logMiddleware
));

export default store;
