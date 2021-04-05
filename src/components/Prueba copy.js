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
