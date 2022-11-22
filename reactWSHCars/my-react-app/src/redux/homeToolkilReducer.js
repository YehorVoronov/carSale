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
    isLog:false,
    currentPage:2,
    currentId:""
}

export const increment = createAction('INCREMENT')

export const decrement = createAction('DECREMENT')
export const addFirstApi = createAction('ADD_FIRST_API')
export const deleteOneObjFromApi = createAction('DELETE_ONE_OBJECT_FROM_API')
export const addAnotherApi = createAction('ADD_ANOTHER_API')
export const addRegisterApi = createAction('ADD_REGISTER_API')
export const isLogTrue = createAction('IS_LOG_TRUE')
export const isLogFalse = createAction('IS_LOG_FALSE')
export const nextPage=createAction("NEXT_PAGE")
export const previousPage=createAction("PREVIOUS_PAGE")
export const updateOneObjFromApi=createAction("UPDATE_ONE_OBJECT_FROM_API")
export const addNewObjectToApi=createAction("ADD_NEW_OBJECT_TO_API")

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
    [isLogTrue]:function(state,arr){
        state.isLog=true;
        //
        state.currentId=arr.payload[0]
       //
        fetch('http://localhost:3000/api/register/' + arr.payload[0], {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: '{"isLog":"' + true + '"}'
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))

    },
    [isLogFalse]:function(state){
        state.isLog=false;

        fetch('http://localhost:3000/api/register/' + state.currentId, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: '{"isLog":"' + false + '"}'
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))

    },
    [nextPage]:function(state){
        state.currentPage=state.currentPage+1;
    },
    [previousPage]:function(state){
        if (state.currentPage<=1){
            state.currentPage=1
        }else {

            state.currentPage=state.currentPage-1;
        }
    },
    [addNewObjectToApi]:function(state,arr){
        debugger
        fetch("http://localhost:3000/api/cars", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: '{"carName":"'+arr.payload[0]+'", ' +
                '"owner":"'+arr.payload[1]+'", ' +
                '"photoUrl":"'+arr.payload[2]+'",'+
                '"photoUrl2":"'+arr.payload[3]+'",'+
                '"photoUrl3":"'+arr.payload[4]+'",'+
                '"photoUrl4":"'+arr.payload[5]+'",'+
                '"photoUrl5":"'+arr.payload[6]+'",'+
                '"photoUrl6":"'+arr.payload[7]+'",'+
                '"phone":"'+arr.payload[9]+'",'+
                '"description":"'+arr.payload[8]+'"}'
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                /*for (let i = 0; i < data.length; i++) {
                    debugger
                   // dispatch(addFirstApi(data[i]))
                }*/
            })
    },
    [deleteOneObjFromApi]:function (state,arr){
        fetch('http://localhost:3000/api/cars/deleteOne/' + arr.payload[0], {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))

    },
    [updateOneObjFromApi]:function (state,arr){
        fetch('http://localhost:3000/api/cars/' + arr.payload[3], {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: '{"carName":"' + arr.payload[0] + '", ' +
                '"owner":"' + arr.payload[1] + '", ' +
                '"description":"' + arr.payload[2] + '", ' +
                '"phone":"' + arr.payload[4] + '"}'
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
        /*navigate("/");*/
        /* window.location.reload(false)*/
    }

    /*[decrement]: function (state,action){
        state.count = state.count + 1
    }*/
})