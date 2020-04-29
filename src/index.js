import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header';
import NavLeft from './js/leftNav';
import CDNScripts from './js/CDNScripts';
import MainContent from './js/mainContent';

ReactDOM.render(
  <div>
  <React.StrictMode>
    <CDNScripts />
    <Header />
    <NavLeft />
    <MainContent />
  </React.StrictMode>
  </div>,
  document.getElementById('root')
);
