import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntire = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState={state}
           addPost={addPost} updateNewPostText={updateNewPostText}
           addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
    </BrowserRouter>, document.getElementById('root'));
}


rerenderEntire(state);

subscribe(rerenderEntire);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
