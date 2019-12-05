import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Object } from 'core-js';

let state= {};

window.setState = (changes)=> {
  state = Object.assign({}, state, changes);
  ReactDOM.render(<App {...state}/>, document.getElementById('root'));
}

let initState = {
  name: "BRK"
};

window.setState(initState);