import {applyMiddleware, combineReducers, createStore} from "redux";
import {dataReducer} from "./streetReducer";
import thankMiddleware from 'redux-thunk';

let rootReducer = combineReducers({rootState: dataReducer})

export const store = createStore(rootReducer, applyMiddleware(thankMiddleware))

window.store = store;