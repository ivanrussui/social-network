import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hello world!', count: 10},
  {id: 2, message: 'Hello friend!', count: 15}
];

let dialogs = [
  {id: 1, name: 'Ivan'},
  {id: 2, name: 'Anna'},
  {id: 3, name: 'Melissa'},
  {id: 4, name: 'Kristina'},
  {id: 5, name: 'Vladimir'},
  {id: 6, name: 'Alexandra'}
];

let messages = [
  {id: 1, message: 'Hi!'},
  {id: 2, message: 'My name is Ivan'},
  {id: 3, message: 'And you'}
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
