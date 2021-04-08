import React, {useState, useEffect} from 'react';

import Navbar  from './Navbar'
 import Searchbox from './Searchbox'
import Carrousel from './Carrousel'
import Movies from './Movies'
import Footer from './Footer'
import { useFirebaseApp, useUser } from 'reactfire';

const Home = () => {
  const user = useUser()

    const [ peliculas, setPeliculas ] = useState();
    useEffect(()=> {
        fetch(`http://localhost:8000/api/movie`,{
            method:'GET',
            header:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(res => {
            if(res){
                setPeliculas(res.movie);
            }else{
                console.log("no esta bien res.movie");
            }
        });
    }, []);  



  console.log(user.data);
  if (user.data){
      return (
    <>
   <Navbar></Navbar>
   <Searchbox onSearch={setPeliculas}></Searchbox>
   <Movies movies={peliculas}> </Movies>
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
