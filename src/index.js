import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.sass';
import Main from './js/components/Main';
import { Provider } from 'react-redux'
import store from './js/reducers'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Main />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

