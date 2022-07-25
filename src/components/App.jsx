import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";
import Avatar from "./Avatar.jsx";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://i.ibb.co/54ZRzLx/Sss.png" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
