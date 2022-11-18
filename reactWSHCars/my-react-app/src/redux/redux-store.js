import {combineReducers, createStore} from "redux";
import headReducer from "./head-reducer";


let reducers= combineReducers({
    headPages:headReducer,
})

let store =createStore(reducers);

export default store;