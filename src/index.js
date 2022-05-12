import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/reduxStore';
import {Provider} from "react-redux";
// import StoreContext, {Provider} from './StoreContext';

//todo <App state={state} /> тут state тк в навбар идут данные

let rerenderEntire = (state) => {
  // debugger;
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App state={state} />
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
};

//todo как было сначала
// let rerenderEntire = (state) => {
//     // debugger;
//     ReactDOM.render(
//         <BrowserRouter>
//             <StoreContext.Provider value={store}>
//                 <App state={state} />
//             </StoreContext.Provider>
//         </BrowserRouter>, document.getElementById('root'));
// };




// функция перерисовки дерева срабатывая у store запрашивает getState
rerenderEntire(store.getState());

// отдаем store в качестве подписчика функцию rerenderEntire
// store.subscribe(rerenderEntire);

// отдаем store в качестве подписчика анонимную функцию, внутри вызываем функцию rerenderEntire
store.subscribe(() => {
  let state = store.getState();
  rerenderEntire(state);
});


//todo когда App "подчистишь" от state={state}
// rerenderEntire();
//
// store.subscribe(() => {
//    rerenderEntire();
// });
//todo state уже не надо будет передавать


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
