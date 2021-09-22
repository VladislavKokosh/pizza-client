import React, {Suspense} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { AppStyled } from "./app.styled";
import { GlobalStyle } from './global-style';

import Header from "./components/Header";
import Routes from "./Routes";
import Footer from "./components/Footer";
import Loader from "./components/Loader";


function App() {
  return (
    <Router>
      <AppStyled>
        <GlobalStyle/>
        <Suspense fallback={<Loader/>}>
          <Header/>
          <Routes/>
          <Footer/>
        </Suspense>
      </AppStyled>
    </Router>
  );
}

export default App;
