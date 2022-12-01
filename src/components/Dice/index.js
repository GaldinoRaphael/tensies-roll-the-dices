import React from "react";
import './style.css'

export default function Dice(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#fff" 
    }
    return (
        <div className="dice" style={styles} onClick={event => props.hold(event, props.id)}  >
            <h1 className="dice-number">{props.number}</h1>
        </div>
    )
}