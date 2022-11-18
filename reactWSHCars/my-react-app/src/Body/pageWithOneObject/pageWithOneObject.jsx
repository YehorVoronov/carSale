import React, {useState} from "react";
import style from "./pageWithOneObject.module.css"
import {NavLink,useNavigate} from "react-router-dom";

function PageWithOneObject(props) {

    const [count, setCount] = useState(0);
    let navigate = useNavigate();
   // const navigate = useNavigate();
const carNameRef=React.useRef()
const ownerRef=React.useRef()
const descriptionRef=React.useRef()

    /*if (count-1>props.photo.length){
setCount(0)
    }*/

    //
    let photoUrl=[];

photoUrl[0]=props.state.photoUrl;
 photoUrl[1]=props.state.photoUrl2;
 photoUrl[2]=props.state.photoUrl3;
 photoUrl[3]=props.state.photoUrl4;
 photoUrl[4]=props.state.photoUrl5;
 photoUrl[5]=props.state.photoUrl6;

        console.log(props.photo.length)
    return (<div className={style.ObjectForm}>

            {/*{props.photo.map(e=><img src={e.toString()} />)}
            {count}*/}
            {count}
            <img src={photoUrl[count]} />
            <button onClick={() =>{
                if ((count+1)>=photoUrl.length){
                    setCount(0)
                }else {
                    setCount(count +1)
                }

            }}>
                Click me +
            </button>
            <button onClick={() => {
                setCount(count -1)
                if (count<=0){
                    setCount(photoUrl.length-1)

                }
            }}>
                Click me -
            </button>
            <div>id:{props.state.id}</div>
            <div>carName:{props.state.carName}</div><input type="text"  ref={carNameRef}/>
            <div>owner:{props.state.owner}</div><input type="text"  ref={ownerRef}/>
            <div>description:{props.state.description}</div><input type="text"  ref={descriptionRef}/>
            <div>reg_date:{props.state.reg_date}</div>
<div>
            <button onClick={()=> {
                fetch('http://localhost:3000/api/cars/' + props.state.id, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: '{"carName":"' + carNameRef.current.value + '", ' +
                        '"owner":"' + ownerRef.current.value + '", ' +
                        '"description":"' + descriptionRef.current.value + '"}'
                })
                    .then(res => res.text()) // or res.json()
                    .then(res => console.log(res))

                navigate("/");
                window.location.reload(false)

            }}> change information about my ad in dataBase</button>
</div>

                information about car
                information about car
                information about car
                information about car
                <div>
                    some menu
                    more photo(conveer)
                </div>
                <div>
                    another information
                    phone number
                </div>
            <div>

<NavLink to="/">
                <button onClick={()=> {
                    fetch('http://localhost:3000/api/cars/deleteOne/' + props.state.id, {
                        method: 'DELETE',
                    })
                        .then(res => res.text()) // or res.json()
                        .then(res => console.log(res))

                    setTimeout(()=>{
                        navigate("/");
                        window.location.reload(false)
                    },3000)

                }}>delete this advertisement</button>
</NavLink>
            </div>
            </div>

    );
}

export default PageWithOneObject;
