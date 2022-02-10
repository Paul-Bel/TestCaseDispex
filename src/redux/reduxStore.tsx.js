import {applyMiddleware, combineReducers, createStore} from "redux";
import thankMiddleware from 'redux-thunk';
import {houseReducer} from "./houseReducer";
import {streetReducer} from "./streetReducer";
import {flatReducer} from "./flatReducer";

let rootReducer = combineReducers({
    streetState: streetReducer,
    houseState: houseReducer,
    flatState: flatReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thankMiddleware))

window.store = store;