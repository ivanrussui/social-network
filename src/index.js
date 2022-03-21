import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state, {subscribe} from './redux/state';
// import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/state';

// debugger;

let rerenderEntire = (state) => {
  // debugger;
  ReactDOM.render(
    <BrowserRouter>
      <App
           state={state}
           addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
           addMessage={store.addMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </BrowserRouter>, document.getElementById('root'));
}


rerenderEntire(store.getState());

store.subscribe(rerenderEntire);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
