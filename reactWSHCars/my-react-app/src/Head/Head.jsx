import React from "react";
import style from "./Head.module.scss"
import {NavLink} from "react-router-dom";

export default class Head extends React.Component {
    render() {

        return <NavLink to="/"><div className={style.headMenu}>

              <div className={style.logo}>
                <img src="https://3dexport.com/items/2005/05/06/1656/416176/bugatti_w16_mistral_2024_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4287459.jpg"/>
            </div>
            <div className={style.menuBtn}>
                <NavLink to="/addNewObject"><button  >go to add new car</button></NavLink>


                <button disabled="disabled" onClick={()=> {
                    fetch('http://localhost:3000/api/cars/deleteAll', {
                        method: 'DELETE',
                    })
                        .then(res => res.text()) // or res.json()
                        .then(res => console.log(res))
                    /*deleteAllMysql()*/
                }}> delete ALL fetch request first api</button>
            </div>


        </div> </NavLink>;
    }
}