import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyle } from './global-style';

import Header from "./components/Header";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle/>
        <Header/>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
