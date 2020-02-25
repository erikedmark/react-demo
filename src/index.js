import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
//
// Use the render method to mount the application in the DOM.
// This file will be kept small.
// Routing can occur here if the whole page is swapped.
//
ReactDOM.render(
  <App />,
  document.getElementById('root')
);