import React from "react";

export default function InputLabel(props){
    return (

        <label>
                {props.name}
                <input type={props.type} />
        </label>
    )
}