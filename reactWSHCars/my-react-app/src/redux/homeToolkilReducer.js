import {createAction, createReducer} from "@reduxjs/toolkit";

/*
let arr=[]
debugger
    let response = await fetch('http://localhost:3000/api/contacts')

        response.then((response) => response.json())
        .then((data) =>{
            for (let i of data) {
                arr.push(i);
            }
            console.log(data)
        }
);

console.log(arr[1])

*/
async function fetchMovies() {
    const response = await fetch('http://localhost:3000/api/contacts');
    // waits until the request completes...
    console.log(response);
}

const initialState ={
    count:0,
    todos:[],
    myApi:[],
    anotherApi:[],
    registerApi:[],
    isLog:false
}

export const increment = createAction('INCREMENT')

export const decrement = createAction('DECREMENT')
export const addFirstApi = createAction('ADD_FIRST_API')
export const deleteObjFromApi = createAction('DELETE_OBJECT_FROM_API')
export const addAnotherApi = createAction('ADD_ANOTHER_API')
export const addRegisterApi = createAction('ADD_REGISTER_API')
export const isLogTrue = createAction('IS_LOG_TRUE')
export const isLogFalse = createAction('IS_LOG_FALSE')

export default createReducer(initialState,{
    [increment]: function (state){
        state.count = state.count - 1
    },
    [decrement]: function (state){
        state.count = state.count + 1
    },
    [addAnotherApi]:function (state,arr){
        state.anotherApi=arr.payload
    },
    [addFirstApi]:function (state,arr){
        state.myApi=arr.payload
    },
    [addRegisterApi]:function(state,arr){
        state.registerApi=arr.payload
    },
    [isLogTrue]:function(state){
        state.isLog=true;
        console.log(state.isLog)
    },
    [isLogFalse]:function(state){
        state.isLog=false;
    },

    [deleteObjFromApi]:function (state){

    }

    /*[decrement]: function (state,action){
        state.count = state.count + 1
    }*/
})