import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import NumInc from './number';

// var num = 1;

// function numInc() {
//   num++;
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <div>
//       <p>{num}</p>
//       <button onClick={numInc}>+</button>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
); 
