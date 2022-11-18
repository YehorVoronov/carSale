import React from "react";
import style from "./Login.module.css"
import Webcam from "react-webcam";
import {NavLink} from "react-router-dom";
import {isLogTrue} from "../redux/homeToolkilReducer";

let Login=(props)=>{

    const loginRef=React.useRef();
    const passwordRef=React.useRef();
    const phoneRef=React.useRef();


    return(<div className={style.loginForm}>
            {props.registerApi.map(e=><div>log:{e.login} password:{e.password} phone:{e.phone}</div>)}
            register
            <form >

            <div>
                login
                <input required type="text"  ref={loginRef}/>
            </div>
            <div>
                password
                <input required type="text"  ref={passwordRef}/>
            </div>
            <div>
                phone number
                <input required type="tel"  ref={phoneRef}/>
            </div>

                <NavLink to="/"> <button  type="submit" onClick={()=>{
props.registerApi.map(e=>{
    if (e.login===loginRef.current.value
        &&e.password===passwordRef.current.value
        &&e.phone===phoneRef.current.value){
props.logToTrue()

       //dispatch( isLogTrue());
    }
})
                }}>wejść</button></NavLink>
                <NavLink to="/register">nie mam konta</NavLink>

            </form>
    </div>

    )
}

export default Login;