import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


const Movies = ({movies}) => {
     const peliculas = movies
  //  console.log(peliculas);
    return(
    <>

<div className="container">
<div className="row row-cols-1 row-cols-md-5 g-4 p-4 pelis2 " id="">

 {   peliculas ?

    peliculas.map((peli, index) => {
       /*  console.log(peli); */
        return (
            <div key={`peli-${index}`}>
                        
        <button type="button "   className="link-container tarj"  id={peli._id} >
                    <div className="col  ">
               <div className="card lg-3 tarjeta ">
        <        Link to={"/trailer/"+peli.title} className="link">
                 <img src={peli.img} className="card-img-top" alt="..."/>
                 </Link>
                 <div className="card-body">
                   <p className="text-dark" >{peli.title}</p>
                   <p  className="card-text" id="genero"> Genero: {peli.gender} </p>
                   <div className="link-container">
        </div>
               </div>
           </div>
           </div>
        </button>

            </div>
        )
        
    })
    : 
    <>
            </>

 }

 </div>
    </div>
    </>
   
   );
}




export default Movies;
