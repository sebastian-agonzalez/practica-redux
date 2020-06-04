import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//importo el container que tiene la conneccion entre el component Counter y Redux 
import CounterContainer  from './containers/Counter';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import { counterApp } from './reducers/index';


//creacion del store con el counterApp del index.js que contiene el reducer
const store = createStore(counterApp);


ReactDOM.render(
  <Provider store={store}>
     <CounterContainer />
  </Provider>
 ,
  document.getElementById('root')
);

