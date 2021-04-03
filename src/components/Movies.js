import React, { useEffect, useState} from 'react';

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
                console.log("todook setPeliculas");
            }else{
                console.log("no esta bien");
            }
        });
    }, []);    
    return(
    <>

<div className="container">
                        <div className="row row-cols-1 row-cols-md-5 g-4 p-4 pelis2 " id="">


 {   peliculas ?

    peliculas.map(peli => {
       /*  console.log(peli); */
        return (
            <>
            
            
        <button type="button "  className=" tarj" data-bs-toggle="modal" data-bs-target="#modalPeli{peli._id}" >
                    <div className="col  ">
               <div className="card lg-3 tarjeta ">
                 <img src={peli.img} className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <p className="text-dark" >{peli.title}</p>
                   <p  className="card-text" id="genero"> Genero: {peli.gender} </p>

               </div>
           </div>
           </div>
        </button>
{/*         <!-- Modal --> */}     
               <div className="modal fade" id="modalPeli${peli._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">${peli.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body ratio ratio-16x9" id="">
              
                              <iframe width="560" height="315" src="${peli.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
         
                              </div>
                          <div className="modal-footer">
                          <p  className="card-text  col-lg-12" id="genero">Genero: ${peli.gender} </p>
                   <p className="card-text col-lg-12">Descripcion: ${peli.description}</p>    
                          </div>
                        </div>
                      </div>
                    </div>
               
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
