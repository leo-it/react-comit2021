
import { useParams } from 'react-router-dom';
import React, { useEffect, useState} from 'react';

const Trailer = () => {

 const {title}= useParams();
console.log(title);

const [ trailer, setTrailer ] = useState();
useEffect(()=> {
    fetch(`http://localhost:8000/api/movie_title/${title}`,{
        method:'GET',
        header:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(res => {
        if(res){
            setTrailer(res.movie);
            console.log(" esta bien res.trailer");
            console.log(res.movie);
        }else{
            console.log("no esta bien res.trailer");
        }
    });
}, []);    
console.log(trailer);

  return (
    <>

        ---------nombre 
         <h1>{trailer.gender}</h1> 
         <h1>{trailer.description}</h1>
   </>
  );
}

export default Trailer;
