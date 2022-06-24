import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter}from 'react-router-dom';
import {configureStore as createStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mainReducer from './reducers/mainReducers';




const reduxStore =createStore({reducer:mainReducer})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);


