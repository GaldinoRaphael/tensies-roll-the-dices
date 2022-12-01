import React from "react";
import './style.css'

export default function Dice(props){
    return (
        <div className="dice selected-dice">
            <h1 className="dice-number">{props.number}</h1>
        </div>
    )
}