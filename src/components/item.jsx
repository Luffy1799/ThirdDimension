import React from "react";
import { Link } from "react-router-dom";


export default function Item(props) {
    var go = "/3d-viewer/" + props.id;
    var imgname = props.name;
    var imgG = `/public/images/previews/${imgname.toLowerCase()}.png`

 return(
            <Link className="item textLink" to= {go}>
                <img src={`/public/images/previews/${props.name}.png`} alt="" />
                <div className="itemInfo" id={props.path} >
                    <p>{props.name}</p>
                    <img src="/public/images/rightarrow-light.png" alt="" />
                </div>
            </Link>
        )
            
    }
    

        
