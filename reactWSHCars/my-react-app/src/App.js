
import './App.scss';
import Head from "./Head/Head";
import PageWithOneObject from "./Body/pageWithOneObject/pageWithOneObject";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import React, {forwardRef, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addAnotherApi,
    addFirstApi,
    addNewsApi,
    nextPage,
    addRegisterApi,
    decrement,
    increment, isLogFalse,
    isLogTrue, previousPage, deleteOneObjFromApi, updateOneObjFromApi, addNewObjectToApi
} from "./redux/homeToolkilReducer";
import HeadContainer from "./Head/HeadContainer";
import FootContainer from "./Foot/FootContainer";
import ObjectForm from "./Body/ObjectForm/ObjectForm";
import AddNewObject from "./Body/AddNewObject/AddNewObject";
import News from "./News/News";
import Register from "./Register/Register";
import Login from "./Login/Login";
import foneVideo from "./video/Porsche 992 GT3 Touring _ Night Vibes 4K.mp4";


function App() {


    const dispatch=useDispatch();
 const state=useSelector((state) => state.toolkit.count)
 const stateApi=useSelector((state) => state.toolkit.myApi)
 const anotherApi=useSelector((state) => state.toolkit.anotherApi)
 const registerApi=useSelector((state) => state.toolkit.registerApi)
const isLog=useSelector((state)=>state.toolkit.isLog)
const currentPage=useSelector((state)=>state.toolkit.currentPage)

    useEffect(() => {
        /*fetch('http://localhost:3000/api/allInformation')
            .then((response) => response.json())
            .then((data) =>{
                dispatch(addFirstApi(data))

            })*/
        fetch('http://localhost:3000/anotherAPI')
            .then((response) => response.json())
            .then((data) =>{
                    dispatch(addAnotherApi(data))
                console.log("fetsh1")
            })
        fetch('http://localhost:3000/api/register')
            .then((response) => response.json())
            .then((data) =>{
                dispatch(addRegisterApi(data))
                console.log("fetsh2")
            })
    },[/*currentPage*/]);

 useEffect(()=>{
     fetch('http://localhost:3000/api/allInformation/pageNumber/'+currentPage)
         .then((response) => response.json())
         .then((data) =>{
             dispatch(addFirstApi(data))

         })
 },[currentPage,updateOneObjFromApi(),deleteOneObjFromApi(),addNewObjectToApi()])


const logToTrue=()=>{
    dispatch(isLogTrue())
}

const toNextPage=()=>{
    dispatch(nextPage())
}


const toPreviousPage=()=>{
    dispatch(previousPage())
}
const dispatchDeleteOneObjFromApi=(props)=>{
     dispatch(deleteOneObjFromApi(props))
}
const dispatchUpdateOneObjFromApi=(props)=>{
     dispatch(updateOneObjFromApi(props))
}
const dispatchAddNewObjectToApi=(props)=>{
     dispatch(addNewObjectToApi(props))
}
const dispatchIsLogTrue=(props)=>{
     dispatch(isLogTrue(props))
    debugger
}
const dispatchIsLogFalse=(props)=>{
     debugger
     dispatch(isLogFalse(props))
}
  return (
    <div className="App">

        <HeadContainer />


<div className="AllBackgroundColor">
    <div className="backVideo">
        <video src={foneVideo} autoPlay loop muted/>

            <div className="LogOutButton">
                {isLog?<button onClick={()=>dispatch(isLogFalse())}>wyjść</button>:<div></div>}
             </div>
<div className="MainPage" >
    <div className="GridDisplay">
            <div>
                <Routes>
                  {/*<Route exact path="/">
                        {isLog ? <Route index element={<ObjectForm  state={stateApi} />} /> : <Register />}
                  </Route>*/}
                 <Route index element={isLog===true?<ObjectForm currentPage={currentPage} toNextPage={toNextPage} toPreviousPage={toPreviousPage} state={stateApi} />:<Login dispatchIsLogTrue={dispatchIsLogTrue}  logToTrue={logToTrue} registerApi={registerApi}/>} />
                 <Route exact path="/register" element={<Register registerApi={registerApi}/>} />
                 <Route exact path="/login" element={<Login dispatchIsLogTrue={dispatchIsLogTrue}  logToTrue={logToTrue} registerApi={registerApi}/>} />
                 {stateApi.map(e=><Route exact path={"/pageWithOneObject"+e.id} element={isLog===true?<PageWithOneObject dispatchUpdateOneObjFromApi={dispatchUpdateOneObjFromApi}
                                                                                                                         dispatchDeleteOneObjFromApi={dispatchDeleteOneObjFromApi}
                                                                                                                         state={e} photo={[
                         "https://images.drive.com.au/driveau/image/upload/c_fill,h_1125,w_2000/q_auto:eco/f_auto/v1/cms/uploads/R4WpNWq9Rl2KgHz9CJW1"]} />:
                     <Login dispatchIsLogTrue={dispatchIsLogTrue} logToTrue={logToTrue} registerApi={registerApi}/>} />)}
                 <Route path="addNewObject" element={isLog?<AddNewObject dispatchAddNewObjectToApi={dispatchAddNewObjectToApi}/>:<Login registerApi={registerApi}/>}/>
                </Routes>
            </div>
        <div>
         <News anotherApi={anotherApi} author="" title="" description="" url="" urlToImage="" publishedAt="" content="" />
        </div>
    </div>
    </div>
</div>

</div>      {/*</header>*/}
        <FootContainer/>


</div>

  );
}

export default App;
