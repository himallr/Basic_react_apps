import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <h1>My Contacts</h1>
  <Card 
  name="Messi"
  img="https://img.a.transfermarkt.technology/portrait/header/28003-1631171950.jpg?lm=1"
  phnum="+91 9344449002"
  email="messi@gmail.com" 
  />
  <Card 
  name="Ronaldo"
  img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/330px-Cristiano_Ronaldo_2018.jpg"
  phnum="+91 9344449001"
  email="ronaldo@gmail.com" 
  />
  <Card 
  name="Neymar"
  img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bra-Cos_%281%29_%28cropped%29.jpg/330px-Bra-Cos_%281%29_%28cropped%29.jpg"
  phnum="+91 9344449000"
  email="neymar@gmail.com" 
  />
  </div>
);
