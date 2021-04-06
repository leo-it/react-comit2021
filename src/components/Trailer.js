
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Footer from './Footer'
import Navbar from './Navbar'


const Trailer = () => {

    const { title } = useParams();
    console.log(title);

    const [trailer, setTrailer] = useState();

    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`http://localhost:8000/api/movie_title/${title}`)
            const peli = await data.json()
            setTrailer(peli.movie)
        }
        obtenerDatos()
    }, [title])
    console.log(trailer);
if(trailer){
    return (
        <>
<Navbar></Navbar>
<div className="container pt-5"/>
<div className="container pt-5"/>
<div className="container pt-5"/>

       <div className="container text-center">
            <div className="" id="" tabIndex="-1" >

                <h5 className="">{trailer.title} </h5>

                 <iframe width="1120" height="630" src={trailer.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
 
            </div>
            <p className="card-text  col-lg-12" id="genero">Genero: {trailer.gender} </p>
            <p className="card-text col-lg-12">Descripcion: {trailer.description}</p>
            </div>
            <Footer></Footer>
        </>
    );
}else{
    return (
    <>...........cargando</>
    )
}
}

export default Trailer;
