
import './App.css';
import Head from "./Head/Head";
import PageWithOneObject from "./Body/pageWithOneObject/pageWithOneObject";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import React, {forwardRef, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addAnotherApi,
    addFirstApi,
    addNewsApi,
    addRegisterApi,
    decrement,
    increment, isLogFalse,
    isLogTrue
} from "./redux/homeToolkilReducer";
import HeadContainer from "./Head/HeadContainer";
import FootContainer from "./Foot/FootContainer";
import ObjectForm from "./Body/ObjectForm/ObjectForm";
import AddNewObject from "./Body/AddNewObject/AddNewObject";
import News from "./News/News";
import Register from "./Register/Register";
import Login from "./Login/Login";



function App() {


    const dispatch=useDispatch();
 const state=useSelector((state) => state.toolkit.count)
 const stateApi=useSelector((state) => state.toolkit.myApi)
 const anotherApi=useSelector((state) => state.toolkit.anotherApi)
 const registerApi=useSelector((state) => state.toolkit.registerApi)
const isLog=useSelector((state)=>state.toolkit.isLog)


    useEffect(() => {
        fetch('http://localhost:3000/api/allInformation')
            .then((response) => response.json())
            .then((data) =>{
                dispatch(addFirstApi(data))

            })
        fetch('http://localhost:3000/anotherAPI')
            .then((response) => response.json())
            .then((data) =>{
                    dispatch(addAnotherApi(data))
            })
        fetch('http://localhost:3000/api/register')
            .then((response) => response.json())
            .then((data) =>{
                dispatch(addRegisterApi(data))
            })


    },[]);

const logToTrue=()=>{
    dispatch(isLogTrue())
}

  return (
    <div className="App">
        <HeadContainer />
        {/*<button onClick={()=>dispatch(isLogTrue())}>islog</button>*/}
        {isLog?<button onClick={()=>dispatch(isLogFalse())}>wyjść</button>:<div></div>}
      <header className="App-header">
<div className="MainPage" >
    <div>
            <Routes>
                {/*<Route exact path="/">
                    {isLog ? <Route index element={<ObjectForm  state={stateApi} />} /> : <Register />}
                </Route>*/}
                <Route index element={isLog===true?<ObjectForm  state={stateApi} />:<Login logToTrue={logToTrue} registerApi={registerApi}/>} />
                <Route exact path="/register" element={<Register registerApi={registerApi}/>} />
                <Route exact path="/login" element={<Login logToTrue={logToTrue} registerApi={registerApi}/>} />
                {stateApi.map(e=><Route exact path={"/pageWithOneObject"+e.id} element={isLog===true?<PageWithOneObject state={e} photo={[
                        "https://images.drive.com.au/driveau/image/upload/c_fill,h_1125,w_2000/q_auto:eco/f_auto/v1/cms/uploads/R4WpNWq9Rl2KgHz9CJW1"]} />:
                    <Login logToTrue={logToTrue} registerApi={registerApi}/>} />)}
                <Route path="addNewObject" element={isLog?<AddNewObject/>:<Login registerApi={registerApi}/>}/>
                {/* <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />*/}
            </Routes>
    </div>
    <div>
        <News anotherApi={anotherApi} author="" title="" description="" url="" urlToImage="" publishedAt="" content="" />
    </div>
</div>
      </header>

        <FootContainer/>
    </div>
  );
}

export default App;
