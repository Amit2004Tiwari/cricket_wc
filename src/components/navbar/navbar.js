import React from 'react'
import logo from "../footer/mainlogo.jpg"

export default function navbar() {
  return (
    <>
  
    <nav  className="navbar navbar-expand-lg navbar ">
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
    <div className="container-fluid">
      <a className="nav-link mx pogo" href="/">Cricket WC</a>
      
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link mx pogo" aria-current="page" href="/">Home</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  </>
  )
}
