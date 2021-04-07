import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


const Movies = () => {
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
  //  console.log(peliculas);
    return(
    <>

<div className="container">
<div className="row row-cols-1 row-cols-md-5 g-4 p-4 pelis2 " id="">

 {   peliculas ?

    peliculas.map(peli => {
       /*  console.log(peli); */
        return (
            <>
            
            
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

            </>
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
