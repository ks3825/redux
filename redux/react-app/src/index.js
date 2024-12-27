import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Counter from './labexercise/Counter';
import { Provider, } from 'react-redux';
// import {  configureStore } from '@reduxjs/toolkit';
import Todolist from './labexercise/Todolist'
import store from './crud/store';
import App from './crud/App'







 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <Counter/>
 <Todolist/>
  <App/>
  </Provider>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
