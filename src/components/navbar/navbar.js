import React from 'react'
import logo from "../data/e22f9c20556bca1c205422c071d5552a.png"
import './navbar.css'
import img from '../data/mainlogo.jpg'
export default function navbar() {
  return (
    <>
  
    <nav  className="navbar navbar-expand-lg navbar ">
      
      <li className='yo'>
        <a  className='noo' href='https://www.icc-cricket.com/homepage'>
          ICC 
        </a>
        
        
      </li>
      <img src={img}/>
    <div className="container-fluid">      
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link mx pogo" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx pogo" aria-current="page" href="Matches">Matches</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx pogo" aria-current="page" href="/Standings">Standings</a>
          </li>
         
        </ul>
        <a href= 'Login'>
    <button className='bhuo' >login</button>
    </a>
    <a href='register'>
          <button className='bhuo'> register</button>
          </a>
      </div>
    </div>
  </nav>
  
  </>
  )
}
