import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = (props)=>{
    return(
        <div className="mainContainer">
        <div className="outerContainer">
            <div className="textInfo">
            <h1 className="about-heading">{props.heading}</h1>
            <div className="about-text"> {props.text} </div>
            </div>
            <div className="imageInfo">
              <img src={props.url}></img>
            </div>
        </div>
        </div>
    )
} 