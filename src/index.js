import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Object } from 'core-js';
import Auth from './Auth';

let state= {};

window.setState = (changes)=> {
  state = Object.assign({}, state, changes);
  ReactDOM.render(<App {...state}/>, document.getElementById('root'));
}

const auth=new Auth();

/*eslint no-restricted-globals:0*/
let initState = {
  name: "BRK",
  location: location.pathname.replace(/^\/?|\/$/g, ""),
  auth,
};

window.setState(initState);