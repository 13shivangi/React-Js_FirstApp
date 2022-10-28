import React from "react";
import App from "./App";
import './App.css';
import myStyles from './Sample.module.css';

let fontColor:any = {color: 'blue',backgroundColor:'yellow',
                     fontSize : '20px',
                     padding : '10px',
                     fontWeight: 'bold'};
let ColorComponent= () =>{return(
    <>
    <input type ='text' value='Some value in blue' style={fontColor}/>
    <input type ='text' value='CSS class style without databinding' className ='Sample'/>
    <input type ='text' value='CSS class style with databinding' className={myStyles.boxStyle}/>
    </>
)}

export default ColorComponent