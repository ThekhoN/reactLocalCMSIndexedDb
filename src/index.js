import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import store from './store'

const reduxRender = () => {
  return ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

reduxRender()
store.subscribe(reduxRender)
