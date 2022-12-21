import React from "react";
import style from "./News.module.scss"

let News=(props)=>{
    return(<div className={style.allNews}>
            <div className={style.NewsTitle}>
                Another car API
            </div>
            <div className={style.News}>
                {props.anotherApi.map(e=><div className={style.oneElement}>class:{e.class} cylinders:{e.cylinders} drive:{e.drive}
                    fuel_type:{e.fuel_type} make:{e.make} model:{e.model} year:{e.year}</div>)}


            </div>

    </div>

    )
}

export default News;