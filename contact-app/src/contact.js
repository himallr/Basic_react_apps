import React from "react";

export function Card(props) {
    return <div>
        <h2>{props.name}</h2>
        <img src={props.img}></img>
        <p>{props.phnum}</p>
        <p>{props.email}</p>
    </div>
}

export default Card;