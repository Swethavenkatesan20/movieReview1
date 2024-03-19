import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    {/* <Link to={'/'}>Home page</Link> &nbsp;
    <Link to={'/addcolor'}>Add color </Link> &nbsp;
    <Link to={'/addmovie'}>Add movie</Link> &nbsp; */}




    <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
  <div class="container-fluid ">
    <Link class="navbar-brand text-white" to="#">Big show</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/addcolor">add color</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/addmovie">add movie</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}
