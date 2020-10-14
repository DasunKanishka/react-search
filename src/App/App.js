import React from 'react';
import logo from '../images/logo.svg';
import './App.css';

import { LoginPage } from '../LoginPage/';
import { SearchPage } from '../SearchPage/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* <LoginPage /> */}
      <SearchPage />
    </div>
  );
}

export { App };
