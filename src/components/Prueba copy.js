import React, { Component} from 'react';
import axios from 'axios';

class Prueba extends Component {
    state={
        data:[]
    }
 
    peticionGet = async () => {
           axios.get("http://localhost:8000/api/coment").then(response => {
               this.setState({data: response.data})
               console.log(response.data);
           })
        }

   async componentDidMount(){
        await this.peticionGet();
    }

    render(){
        
        return(           
        <>
        {/* {this.state.data.map(coment => {
            return(
                <div>
                <p1>{coment.name}</p1>
                </div>
            )
        
            }
        )
        } */}
        {/*   ---------nombre 
         <h1>{trailer.gender}</h1> 
         <h1>{trailer.description}</h1>
         <h1>{trailer.gender}</h1> 
         <h1>{trailer.description}</h1>
         <div className="" id="" tabindex="-1" >
                
                            <h5 className="">{trailer.title} </h5>
              
                              <iframe width="560" height="315" src={peli.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
         
                              </div>
                          <p  className="card-text  col-lg-12" id="genero">Genero: {peli.gender} </p>
                   <p className="card-text col-lg-12">Descripcion: ${peli.description}</p>    */}
        </>
        )
    }
}
export default Prueba;

/* 

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
 *//* 

 ------------------------------search
  if(data){

render(){
    return (
        <div>
       
 
       <button type="button "   className="link-container tarj"  id={data._id} >
                    <div className="col  ">
               <div className="card lg-3 tarjeta ">
        <        Link to={"/trailer/"+data.title} className="link">
                 <img src={data.img} className="card-img-top" alt="..."/>
                 </Link>
                 <div className="card-body">
                   <p className="text-dark" >{data.title}</p>
                   <p  className="card-text" id="genero"> Genero: {data.gender} </p>
                   <div className="link-container">
        </div>
               </div>
           </div>
           </div>
        </button>

        </div>
    )
}
    }else{
        <p1>cargando data</p1>
    }
     */