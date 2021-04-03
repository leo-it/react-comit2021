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
        </>
        )
    }
}
export default Prueba;
