import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import array from './message';

function Card(props) {
      return <div className='first'>
        😊
        <dt>
          <span>{props.title}</span>
        </dt>
        <dd>{props.msg}</dd>
      </div>
}
ReactDOM.render(
  <div className='total'>
  <h1>Emojipedia</h1><br></br>
  <dl className='dic'>
      <Card
        title={array[0].title}
        msg={array[0].msg}
      />
      <Card
        title={array[1].title}
        msg={array[1].msg}
      />
      <Card
        title={array[2].title}
        msg={array[2].msg}
      />
      </dl>
      </div>,document.getElementById("root")
);
