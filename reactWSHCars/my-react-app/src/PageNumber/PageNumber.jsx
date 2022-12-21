import React from "react";
import style from "./PageNumber.module.scss"
import ReactPaginate from "react-paginate";
import {LeftSquareOutlined, RightSquareOutlined} from "@ant-design/icons";


let PageNumber=(props)=>{
    //props.toNextPage()
    //props.toPreviousPage()
    return(
        <div className={style.paginate}>
            <button onClick={()=>props.toPreviousPage()}><LeftSquareOutlined style={{ fontSize: '25px', color: '#08c' }} /></button>
            {/*{Math.ceil(props.state.length/5)}*/}
            {props.currentPage}
            <button onClick={()=>props.toNextPage()}><RightSquareOutlined style={{ fontSize: '25px', color: '#08c' }}/></button>
        </div>
    )


}
export default PageNumber;