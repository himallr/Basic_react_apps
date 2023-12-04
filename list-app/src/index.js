import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Heading from "./Heading.jsx";
import List from "./list.jsx";

// function heading(){
//   return <h1>Hello</h1>;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Heading />
    {/* <ul>
      <li>hi</li>
      <li>Foods</li>
    </ul> */}
    <List />
  </div>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
