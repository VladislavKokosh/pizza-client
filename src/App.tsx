import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyle } from './global-style';

import Header from "./components/Header";
import Routes from "./Routes";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle/>
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
