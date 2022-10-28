// import { combineReducers, CreateStore, applyMiddleware } from "redux";
import { combineReducers, CreateStore, applyMiddleware } from '@redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import logic, { getMovieApi } from "./Logic";

const reducer = combineReducers({
    logic,
});

const store = CreateStore(
    reducer,
    applyMiddleware(thunk, logger)
);

store.dispatch(getMovieApi());

export default store;