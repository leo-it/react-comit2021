import React, { useEffect, useState} from 'react';

const Prueba = () => {
    const [ comentarios, setComentarios ] = useState();
    useEffect(()=> {
        fetch(`http://localhost:8000/api/coment`,{
            method:'GET',
            header:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(res => {
            if(res){
                setComentarios(res.coment);
                console.log("todook setComentarios");
            }else{
                console.log("no esta bien");
            }
        });
    }, []);    
    console.log(comentarios);
    return(
    <>
 {   comentarios ?

    comentarios.map(comentario => {
        console.log(comentario);
        return (
            <>
            <h1>{comentario.name}</h1>
            </>
        )
    })
    : 
    <>
            </>

 }
    </>
   
   );
}




export default Prueba;
