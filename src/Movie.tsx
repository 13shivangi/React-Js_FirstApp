import React from "react";
import './App.css';
import {LikeButton} from './LikeButton';

let cssAlignLeft={marginLeft:'5px'}
 export default function Movie(props:any){
    return(
        <div className="movie">
            <img src={props.dp}/>
            <hr/>
            <strong>{props.movieName}</strong> <LikeButton/>
            <hr/>
            <strong>{props.rating}⍟</strong>

        </div>
    )
}