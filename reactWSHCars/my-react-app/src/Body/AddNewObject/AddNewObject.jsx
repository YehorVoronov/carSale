import React from "react";
import style from "./AddNewObject.module.scss"
import {addFirstApi} from "../../redux/homeToolkilReducer";
import {NavLink,useNavigate} from "react-router-dom";

let AddNewObject=(props)=>{

    let navigate = useNavigate();

    const carNameRef=React.useRef()
    const ownerRef=React.useRef()
    const descriptionRef=React.useRef()
    const phoneRef=React.useRef()

    let PhotoUrlOneRef=React.useRef();
    let PhotoUrlTwoRef=React.useRef();
    let PhotoUrlThreeRef=React.useRef();
    let PhotoUrlFourRef=React.useRef();
    let PhotoUrlFiveRef=React.useRef();
    let PhotoUrlSixRef=React.useRef();

    let UrlIsNull=(url)=>{
        if (url.length<5){
            return ;
        }else {
            return url;
        }

    }

    return(
     <div className={style.allArea}>
         <h1>Add new object page</h1>
<div>
    tutaj możesz przesłać zdjęcie i uzyskać link: https://imgur.com/
</div>
         {/*<input type={"file"} multiple/>*/}

         <div><h3>id:random</h3></div>
         <div><h3>carName:</h3></div><input type="text"  ref={carNameRef}/>
         <div><h3>owner:</h3></div><input type="text"  ref={ownerRef}/>
         <div><h3>phone:</h3></div><input type="text"  ref={phoneRef}/>
         <div><h3>description:</h3></div><input type="text"  ref={descriptionRef}/>
         <div><h3>PhotoUrl-1:</h3></div><input type="text"  ref={PhotoUrlOneRef}/>
         <div><h3>PhotoUrl-2:</h3></div><input type="text"  ref={PhotoUrlTwoRef}/>
         <div><h3>PhotoUrl-3:</h3></div><input type="text"  ref={PhotoUrlThreeRef}/>
         <div><h3>PhotoUrl-4:</h3></div><input type="text"  ref={PhotoUrlFourRef}/>
         <div><h3>PhotoUrl-5:</h3></div><input type="text"  ref={PhotoUrlFiveRef}/>
         <div><h3>PhotoUrl-6:</h3></div><input type="text"  ref={PhotoUrlSixRef}/>
         <div>reg_date:its static</div>

         <NavLink to="/">
         <button onClick={()=> {
             props.dispatchAddNewObjectToApi([carNameRef.current.value,ownerRef.current.value,PhotoUrlOneRef.current.value,PhotoUrlTwoRef.current.value,
                 PhotoUrlThreeRef.current.value,PhotoUrlFourRef.current.value,PhotoUrlFiveRef.current.value,PhotoUrlSixRef.current.value,descriptionRef.current.value,phoneRef.current.value])
             /*fetch("http://localhost:3000/api/cars", {
                 method: "POST",
                 headers: {'Content-Type': 'application/json'},
                 body: '{"carName":"'+carNameRef.current.value+'", ' +
                     '"owner":"'+ownerRef.current.value+'", ' +
                     '"photoUrl":"'+PhotoUrlOneRef.current.value+'",'+
                     '"photoUrl2":"'+PhotoUrlTwoRef.current.value+'",'+
                     '"photoUrl3":"'+PhotoUrlThreeRef.current.value+'",'+
                     '"photoUrl4":"'+PhotoUrlFourRef.current.value+'",'+
                     '"photoUrl5":"'+PhotoUrlFiveRef.current.value+'",'+
                     '"photoUrl6":"'+PhotoUrlSixRef.current.value+'",'+
                     '"description":"'+descriptionRef.current.value+'"}'
             }).then((res) => res.json())
                 .then((data) => {
                     console.log(data)
                     /!*for (let i = 0; i < data.length; i++) {
                         debugger
                        // dispatch(addFirstApi(data[i]))
                     }*!/
                 })
             navigate("/");
             window.location.reload(false)
             debugger
             console.log(PhotoUrlOneRef.current.value)
*/

         }}>add new object to api</button>
         </NavLink>
     </div>
    )
}

export default AddNewObject;