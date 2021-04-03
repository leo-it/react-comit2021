import React, {useState} from 'react'


function Navbar() {
    return (
        <div> 
  <nav classNameName="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div classNameName="container-fluid d-flex flex-row-reverse bd-highlight  ">
            <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span classNameName="navbar-toggler-icon"></span>
            </button>
            <div classNameName="collapse navbar-collapse row " id="navbarNav">
                <ul classNameName="navbar-nav w-100">
                    <li classNameName="nav-item  col-lg-3">
                        <a classNameName="nav-link active" aria-current="page" href=""> PelisPlus</a>
                    </li>
                    <div classNameName="container"></div>
                    <li classNameName="nav-item dropdown col-lg-2 logged-in">
                        <a classNameName="nav-link dropdown-toggle gender-filter" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Genero
                        </a>
                        <ul classNameName="dropdown-menu ml-auto bg-light " aria-labelledby="navbarDropdown">
                            <li><button classNameName="dropdown-item " href="#accion" id="accion">Accion</button></li>
                            <li><a classNameName="dropdown-item " href="#infantil" id="infantil">Infantiles</a></li>
                            <li><a classNameName="dropdown-item " href="#drama" id="drama">Drama</a></li>
                        </ul>
                    </li>

                    <li classNameName="nav-item col-lg-2 logged-in">
                        <a classNameName="nav-link" href="http://127.0.0.1:5500/assets/html/foro.html" id="foro">Foro</a>
                    </li>
                    <li classNameName="nav-item col-lg-2 logged-out ">
                        <a classNameName="nav-link " href="#" data-bs-toggle="modal" data-bs-target="#signinModal">Ingresar</a>
                    </li>
                    <li classNameName="nav-item col-lg-2 logged-out">
                        <a classNameName="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#signupModal">Registrar</a>
                    </li>
                    <div classNameName="mt-4"></div>
                    <li classNameName="nav-item logged-in ">
                        <p classNameName=" pt-2" id="perfilEmail"></p>
                    </li>
                    <div classNameName="mt-4"></div>
                    <li classNameName="nav-item logged-in "  id="perfilPhoto">
                    </li>
                    <div classNameName="mt-4"></div>
                    <li classNameName="nav-item logged-in " >
                        <a classNameName="nav-link" href="#" id="logout">  Salir</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

{/* /* <!-- Modal REGISTRO--> */ }
    <div classNameName="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div classNameName="modal-dialog">
            <div classNameName="modal-content">
                <div classNameName="modal-header">
                    <h5 classNameName="modal-title" id="exampleModalLabel">Registro</h5>
                    <button type="button" classNameName="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div classNameName="modal-body">
                    <form id="signup-form">
                        <div classNameName="form-group  pb-3">
                            <input type="email" id="signup-email" classNameName="form-control" placeholder="Mail" required />
                        </div>
                        <div classNameName="form-group pb-3">
                            <input type="password" id="signup-password1" classNameName="form-control" placeholder="Contraseña, al menos 6 caracteres " required />
                            
                        </div>
                        <div classNameName="form-group  pb-3">
                            <input type="password" id="signup-password2" classNameName="form-control" placeholder="Repita la contraseña " required />
                            <div id="password-registro"></div>
                            <div id="mensaje-error-registro"></div>
                        </div>
                        <button type="submit" classNameName="btn btn-primary">Registrate</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

{/*     <!-- Modal INGRESO-->*/} 
   <div className="modal fade" id="signinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <button type="submit" className="btn btn-secondary btn-block">
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










        </div>
    )
}


export default Navbar
