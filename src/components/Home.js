import React from 'react';

import Navbar  from './Navbar'
 import Searchbox from './Searchbox'
import Carrousel from './Carrousel'
import Movies from './Movies'
import Footer from './Footer'
import { useFirebaseApp, useUser } from 'reactfire';

const Home = () => {
  const user = useUser()

  console.log(user.data);
  if (user.data){
      return (
    <>
   <Navbar></Navbar>
   <Searchbox></Searchbox>
   <Movies></Movies>
   <Footer></Footer>
   
   </>
  );
}else{
  return(
  <Navbar></Navbar>
  )
}
}

export default Home;
