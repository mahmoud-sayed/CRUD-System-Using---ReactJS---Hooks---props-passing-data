import { combineReducers } from "redux";
import categoryReducer from './categories';
import moviesReducer from './movie';

export default combineReducers({ categoryReducer, moviesReducer });