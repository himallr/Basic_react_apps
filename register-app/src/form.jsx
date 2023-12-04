import React from "react";

function Form(props){
    return <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="Confirm password" />
        <button type="submit">{props.isRegistered  ? "Login" : "Register" }</button>
    </form>
}

export default Form;