import React from 'react';

import Navbar from './Navbar'
 import Searchbox from './Searchbox'
import Carrousel from './Carrousel'
import Movies from './Movies'
import Footer from './Footer'
 
const Home = () => {
      return (
    <>
   <Navbar></Navbar>
   <Searchbox></Searchbox>
   <Movies></Movies>
   
   </>
  );
}

export default Home;
