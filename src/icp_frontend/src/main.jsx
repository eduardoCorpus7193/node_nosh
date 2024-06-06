import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Products from './products';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Products />
  </React.StrictMode>,
);
