import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import './styles/reset.css';
import './styles/normalize.css';
import { createStore } from 'redux';
import allReducers from './reducers/reducers.js'
import { Provider } from 'react-redux';

const store = createStore( 
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

