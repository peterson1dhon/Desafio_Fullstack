// import { combineReducers, CreateStore, applyMiddleware } from "redux";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import logic, { getMovieApi } from "./Logic";

const reducer = combineReducers({
    logic,
});

const store = createStore(
    reducer, // ['Use Redux'],
    applyMiddleware(thunk, logger)
);

store.dispatch(getMovieApi());

export default store;