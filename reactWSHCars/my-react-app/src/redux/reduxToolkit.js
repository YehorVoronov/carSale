import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "./homeToolkilReducer";

const rootReducer=combineReducers({
    toolkit:homeReducer
    }
)

export const store=configureStore({
    reducer:rootReducer
})