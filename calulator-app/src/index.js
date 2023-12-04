import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { add, Sub, Mult, Div } from "./calc";
import * as calcu from "./calc";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ul>
  // <li>{add(2, 3)}</li>
  // <li>{Sub(10, 4)}</li>
  // <li>{Mult(2, 3)}</li>
  // <li>{Div(16, 4)}</li>
  // </ul>

  <ul>
    <li>{calcu.add(2, 3)}</li>
    <li>{calcu.Sub(10, 4)}</li>
    <li>{calcu.Mult(2, 3)}</li>
    <li>{calcu.Div(16, 4)}</li>
  </ul>
);

