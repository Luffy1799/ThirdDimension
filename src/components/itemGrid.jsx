import React from "react";
import { Link } from "react-router-dom";


export default function GridItem(props) {
    var go = "/3d-viewer/" + props.id;
    return(
        <Link className="item textLink" to= {go}>
            <div className="itemInfo" id={props.path} >
                <p>{props.name}</p>
                <img src="/public/images/rightarrow-light.png" alt="" />
            </div>
        </Link>
        )   
}