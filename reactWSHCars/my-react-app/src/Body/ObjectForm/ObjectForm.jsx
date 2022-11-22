import React from "react";
import style from "./ObjectForm.module.css"
import {NavLink} from "react-router-dom";
import PageNumber from "../../PageNumber/PageNumber";

function ObjectForm(props) {
    const [searchChar, setSearchChar] = React.useState("");

    return (<div className={style.AllObjectForm}>
            <div className={style.Search} >
                <input placeholder="spróbuj znależć" value={searchChar} type="text" onChange={event => setSearchChar(event.target.value)}/>
            </div>
            {props.state.filter(el => el.carName.includes(searchChar)).map(e=>
                <NavLink style={{ textDecoration: 'none' }} to={"pageWithOneObject"+e.id}>
                    <div className={style.ObjectForm}>
                            <div className={style.CarTitle} ><h1>{e.carName}</h1></div>

                        <dl className={style.carInformation}>
                            <dt>owner</dt>
                            <dd>{e.owner}</dd>
                            <dt>owner phone</dt>
                            <dd>{e.phone}</dd>
                            <dt>description</dt>
                            <dd>{e.description}</dd>
                            <dt>reg_date</dt>
                            <dd>{e.reg_date}</dd>
                        </dl>

                        <img src={e.photoUrl}/>

                        <div>
                            some menu
                        </div>
                    </div>
                </NavLink>
            )}

            <div>
               <PageNumber currentPage={props.currentPage} toNextPage={props.toNextPage} toPreviousPage={props.toPreviousPage} state={props.stateApi}/>
            </div>

    </div>

    );
}

export default ObjectForm;
