import React, {useState, useEffect} from 'react'
import Movies from './Movies'
import { Link } from 'react-router-dom';

 const API= "http://localhost:8000/api/movie_title/"

class Searchbox extends React.Component {

    constructor() {
        super();
        this.state= {
            data:[],
            searchTerm: '',
            error: ''
        }
    }

    async handleSubmit(e){
        e.preventDefault();
        if(!this.state.searchTerm){
            return this.setState({error: "Por favor escribe un texto valido"})
        }
        
        const res = await fetch(`${API}${this.state.searchTerm}`)
        const data =await res.json();
        console.log(data.movie)
        this.setState({data: data.movie})

        if(this.state.searchTerm){
            return this.setState({error: data.movie.description})
        }
    };


    /* idea hacer un link a otra ruta con las pelis que busco
    o que se cree una card con la peli buscada debajo del buscador
    ------------------------------------------------------------ */
 render(){
    
    return (
        <div>
             <div >
        <br/>
    </div>
    <nav className="navbar  searchbox mt-5 logged-in">
        <div className="container-fluid d-flex justify-content-center">
            <form onSubmit={(e)=> this.handleSubmit(e)} className="d-flex search_box col-12 col-lg-6">
                <input id="inputSearch" className="form-control card-filter search-input" 
                type="text" placeholder="Buscar" aria-label="Search"
                onChange={e => this.setState({searchTerm: e.target.value})}
                autoFocus
                />
              </form>
              <p>{this.state.error ? this.state.error: ''}</p>
        </div>
    </nav>
<h1></h1>
        </div>
    ) 
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    if(data){
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
    }else{
        return(
        <p1>cargando data</p1>
        )
    } 


}





} 

export default Searchbox
