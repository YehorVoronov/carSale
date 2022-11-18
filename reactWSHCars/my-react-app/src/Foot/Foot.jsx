import React from "react";
import style from "./Foot.module.css"
import {InstagramOutlined} from "@ant-design/icons";

export default class Foot extends React.Component {
    render() {
        return <div className={style.AllFoot}>

            <div className={style.menuBtn}>
                <InstagramOutlined />
                <a href="https://www.instagram.com/egor_voronov/">creator</a>
            </div>
        </div>;
    }
}