import {applyMiddleware, combineReducers, createStore} from "redux";
import thankMiddleware from 'redux-thunk';
import {houseReducer} from "./houseReducer";
import {streetReducer} from "./streetReducer";
import {flatReducer} from "./flatReducer";
import {userReducer} from "./usersReducer";

let rootReducer = combineReducers({
    streetState: streetReducer,
    houseState: houseReducer,
    flatState: flatReducer,
    userState: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thankMiddleware))

window.store = store;