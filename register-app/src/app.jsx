import React from "react";
import Form from "./form";

var userISRegistered = true;

function App() {
    return <div>
        <Form isRegistered={userISRegistered} />
    </div>
}

export default App; 