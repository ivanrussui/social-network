import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/reduxStore';

let rerenderEntire = (state) => {
  // debugger;
  ReactDOM.render(
    <BrowserRouter>
      <App
           state={state}
           dispatch={store.dispatch.bind(store)}
           store={store}
      />
    </BrowserRouter>, document.getElementById('root'));
}

// функция перерисовки дерева срабатывая у store запрашивет getState
rerenderEntire(store.getState());

// отдаем store в качестве подписчика функцию rerenderEntire
// store.subscribe(rerenderEntire);

// отдаем store в качестве подписчика анонимную функцию, внутри вызываем функцию rerenderEntire
store.subscribe(() => {
  let state = store.getState();
  rerenderEntire(state);
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
