import React from 'react'
import '../Static/CSS/Header.css';
import { Link } from "react-router-dom";
export default function Header(props) {


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom navbar-inverse">
        <div className="container-fluid">
          <Link className="navbar-brand py-0" to="/"><p className='fs-3 mb-0 text-primary-emphasis'><b>{props.title}</b></p></Link>
          <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs" >Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}
