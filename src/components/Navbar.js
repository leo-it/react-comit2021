import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/auth'


function Navbar() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const firebase = useFirebaseApp()
    const user = useUser()
    

    const submitSignin =  (e) => {
        e.preventDefault()
       firebase.auth().createUserWithEmailAndPassword(email,password)
    }
    const submitLogin =  (e) => {
        e.preventDefault()

        firebase.auth().signInWithEmailAndPassword(email, password)
console.log("login");
    }
const logout =  () => {
    console.log("salir");
     firebase.auth().signOut()
   
}
if (user.data){
    console.log(user);

console.log(user.data.email);
}

    return (
        <div> 
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid d-flex flex-row-reverse bd-highlight link-container ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse  navbar-collapse row " id="navbarNav">

           
                <ul className="navbar-nav w-100">
                    <li className="nav-item  col-lg-3"> 
                    <Link to="/home" className="link nav-link active" aria-current="page">
                        PelisPlus
                     </Link>
                    </li>
                    <div className="container"></div>
                    {
                        user.data &&
                    <li className="nav-item dropdown col-lg-2 logged-in">
                        <a className="nav-link dropdown-toggle gender-filter" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Genero
                        </a>
                        <ul className="dropdown-menu ml-auto bg-light " aria-labelledby="navbarDropdown">
                            <li><button className="dropdown-item " href="#accion" id="accion">Accion</button></li>
                            <li><a className="dropdown-item " href="#infantil" id="infantil">Infantiles</a></li>
                            <li><a className="dropdown-item " href="#drama" id="drama">Drama</a></li>
                        </ul>
                    </li>
                        }
                          {
                        user.data &&
                    <li className="nav-item col-lg-2 logged-in">
                        <a className="nav-link" href="http://127.0.0.1:5500/assets/html/foro.html" id="foro">Foro</a>
                    </li>
}
                    {
                        !user.data &&
                    <li className="nav-item col-lg-2 logged-out ">
                        <a className="nav-link " href="#" data-bs-toggle="modal" data-bs-target="#signinModal">Ingresar</a>
                    </li>}
                    {
                        !user.data &&
                    <li className="nav-item col-lg-2 logged-out">
                        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#signupModal">Registrar</a>
                    </li>
                        }
                    <div className="mt-4"></div>
                    <li className="nav-item logged-in ">
                        <p className=" pt-2" id="perfilEmail"></p>
                    </li>
                    <div className="mt-4"></div>
                    <li className="nav-item logged-in "  id="perfilPhoto">
                    </li>
                    <div className="mt-4"></div>
               {
                        user.data &&
                    <li className="nav-item logged-in " >
                        <button className="nav-link" onClick={logout}  >  Salir</button>
                    </li>
                     } 
                </ul>
            </div>
        </div>
    </nav>

{/* /* <!-- Modal REGISTRO--> */ }

    <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Registro {user.email}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form id="signup-form">
                        <div className="form-group  pb-3">
                            <input onChange={ (ev) => setEmail(ev.target.value)} type="email" id="email" className="form-control" autoComplete="off" placeholder="Mail" required />
                        </div>
                        <div className="form-group pb-3">
                            <input onChange={ (ev) => setPassword(ev.target.value)} type="password" id="password" className="form-control" placeholder="Contraseña, al menos 6 caracteres " required />
                            
                        </div>{/* 
                        <div className="form-group  pb-3">
                            <input type="password" id="signup-password2" className="form-control" placeholder="Repita la contraseña " required />
                            <div id="password-registro"></div>
                            <div id="mensaje-error-registro"></div>
                        </div> */}
                        <button onClick={submitSignin} type="" className="btn btn-primary">Registrate</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

{/*     <!-- Modal INGRESO-->*/} 
   <div className="modal fade" id="signinModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ingreso</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form id="login-form">
                        <div className="form-group  pb-3">
                            <input type="email" id="login-email" className="form-control" placeholder="Mail" required />
                        </div>
                        <div className="form-group pb-3">
                            <input type="password" id="login-password" className="form-control" placeholder="Contraseña" required />
                        </div>
                        <div id="mensaje-error-ingreso"></div>
                        <button onClick={submitLogin}  className="btn btn-secondary btn-block">
                             Ingresa
                         </button>
                        <button type="button" className="btn btn-info" id="googleLogin">
                             Ingresa con googlee
                     </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
<div className="pt-5"></div>

        </div>


    )
}


export default Navbar
