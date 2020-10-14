import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render( //método render
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // vai no index preocura o root
);
//Componente no react é uma função que retorna html ou jsx

