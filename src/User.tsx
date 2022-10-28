import React from "react";
import './App.css'

let cssAlignLeft={marginLeft:'5px'}
 export default function User(props:any){
    return(
        <div className="movie">
            <img src={props.dp}/>
            <hr/>
            <strong>Username - {props.userName}</strong>
            <hr/>
            <strong>Password - {props.password}</strong>

        </div>
    )
}