import React from "react";
import Card from "./card";
import contacts from "./contacts";

function Createcontacts(contact1){
    return <Card 
    id={contact1.id}
    name={contact1.name}
    img={contact1.img}
    ph={contact1.ph}
    email={contact1.email}
    />
}

function App() {
    return (
        <div>
            <h1>My Contacts</h1>
            {contacts.map(Createcontacts)}

            {/* <Card
                name={contacts[0].name}
                img={contacts[0].img}
                ph={contacts[0].ph}
                email={contacts[0].email}
            />
            <Card
                name={contacts[1].name}
                img={contacts[1].img}
                ph={contacts[1].ph}
                email={contacts[1].email}
            />
            <Card
                name={contacts[2].name}
                img={contacts[2].img}
                ph={contacts[2].ph}
                email={contacts[2].email}
            /> */}
        </div>
    );
}

export default App;