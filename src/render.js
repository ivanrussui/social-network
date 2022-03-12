import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import state from './redux/state';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

// addPost('React');

export let rerenderEntire = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState={state}
           addPost={addPost} updateNewPostText={updateNewPostText}
           addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
    </BrowserRouter>, document.getElementById('root'));
}

// rerenderEntire();


