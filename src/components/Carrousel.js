import React from 'react'

function Carrousel() {
    return (
        <div>
            <div className="container-fluid carrouselIn  logged-in ">
                <div id="carouselExampleCaptions2" className="carousel slide " data-bs-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                  <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://i.ytimg.com/vi/bAp5iVBwm_E/maxresdefault.jpg" className="d-block w-100 " alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5></h5>
                      <p></p>
                    
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://alacontra.es/wp-content/uploads/2018/12/Mejores-pel%C3%ADculas.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5></h5>
                      <p></p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.blogs.es/d0423d/espinof-las-peores-peliculas-de-2017-montaje-jlcaviaro/1366_2000.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5></h5>
                      <p></p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>`
    </div>
   
        </div>
    )
}

export default Carrousel
