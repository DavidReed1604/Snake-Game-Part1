import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Duck from './Duck'
import Quacker from './Quacker'
import display from './display';

let redDuckQuacker = new Quacker(1);
let blueDuckQuacker = new Quacker(2);
let coolDuck = new Quacker(3);
let redDuck = new Duck("red", redDuckQuacker);
let blueDuck = new Duck("blue", blueDuckQuacker);
redDuck.Quack(4);
blueDuck.Quack(10);
display("Changing Quackers.. ");
redDuck.Quacker = coolDuck;
blueDuck.Quacker = redDuckQuacker;
redDuck.Quack(4);
blueDuck.Quack(10);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
