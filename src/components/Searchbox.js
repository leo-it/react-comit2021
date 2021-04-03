import React from 'react'

function Searchbox() {
    return (
        <div>
             <div pt-6>
        <br>
    </div>
    <nav className="navbar  searchbox mt-5 logged-in">
        <div className="container-fluid d-flex justify-content-center">
            <form className="d-flex search_box col-12 col-lg-6">
                <input id="inputSearch" className="form-control card-filter search-input" type="search" placeholder="Buscar" aria-label="Search">
              </form>
        </div>
    </nav>
        </div>
    )
}

export default Searchbox
