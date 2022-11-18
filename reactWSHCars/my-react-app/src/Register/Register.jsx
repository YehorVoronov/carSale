import React from "react";
import style from "./Register.module.css"
import Webcam from "react-webcam";
import {NavLink} from "react-router-dom";

let Register=(props)=>{

    const loginRef=React.useRef();
    const passwordRef=React.useRef();
    const phoneRef=React.useRef();

let isDisable=true

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);


    return(<div className={style.allRegister}>


       {/*     <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <button onClick={capture}>Capture photo</button>
            {imgSrc && (
                <img
                    src={imgSrc}
                />
            )}

*/}





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

            <button  type="submit" onClick={()=>{

                fetch("http://localhost:3000/api/register", {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: '{"login":"'+loginRef.current.value+'", ' +
                        '"password":"'+passwordRef.current.value+'", ' +
                        /*'"imgSrc":"'+imgSrc+'", ' +*/
                        '"phone":"'+phoneRef.current.value+'"}'
                }).then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                    })

                alert("zalogowany jesteś")
            }}>register</button>
                <NavLink to="/login">mam konto</NavLink>

            </form>
    </div>

    )
}

export default Register;