import React from "react";

function Card(props) {
  return( <div className='whole'>
    <div className='card'>
      <div className='top'>
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <img
          className="cirlceimg"
          src={props.img} />
      </div>
      <div className='ptag'>
        <p>{props.ph}</p>
        <p>{props.email}</p>
      </div>
    </div>
  </div>
  );
}

export default Card;