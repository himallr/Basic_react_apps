import React from "react";

function Footer(){
    const date=new Date();
    const year=date.getFullYear();
    return <footer>
        <h1>Copyrights {year}</h1>
        </footer>
}

export default Footer;