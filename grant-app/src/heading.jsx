import React from "react";

function Heading(){

    let greeting ;
    const date= new Date();
    const time=date.getHours();
    if(time<12)
    {
        greeting= "Good Morning";
    }
    else if(time>12 && time<18)
    {
        greeting = "Good evening";
    }
    else
    {
        greeting = "Good night";
    }

    return <h1>{greeting}</h1>
}

export default Heading;