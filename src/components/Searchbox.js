import React from 'react'

function Searchbox() {
    return (
        <div>
             <div pt-6>
        <br/>
    </div>
    <nav class="navbar  searchbox mt-5 logged-in">
        <div class="container-fluid d-flex justify-content-center">
            <form class="d-flex search_box col-12 col-lg-6">
                <input id="inputSearch" class="form-control card-filter search-input" type="search" placeholder="Buscar" aria-label="Search" />
              </form>
        </div>
    </nav>
        </div>
    )
}

export default Searchbox
