import React, { useState } from "react";
import Axios from 'axios';


function App(){

    const [user,setUser] = useState("");
    const [pass,setPassword] = useState("");


    const submitButton = ()=>{
        Axios.post("https://localhost:3001/api",{name1: user, name2: pass});
    }

    return(
        <div>
            <h1>Login</h1>
            <label>Username:</label>
            <input type="text" name="user" onChange={(e)=>{
                setUser(e.target.value);
            }}></input>
            <label>Password:</label>
            <input type="password" name="pass" onChange={(e)=>{
                setPassword(e.target.value);
            }}></input>
            <button onClick={submitButton}>Submit</button>
            {user}
        </div>
    )
}

export default App;