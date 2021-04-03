import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Searchbox from './components/Searchbox'
import Carrousel from './components/Carrousel'
import Movies from './components/Movies'
import Footer from './components/Footer'

function App() {
  return (
    <>
   <Navbar></Navbar>
   <Searchbox></Searchbox>
  {/*  <Carrousel></Carrousel>*/}
    <Movies></Movies>
    <Footer></Footer>
   </>
  );
}

export default App;
