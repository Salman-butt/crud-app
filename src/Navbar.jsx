import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = ()=> {
    return (
        <>
        <div className ="container-fluid nav_bg">
        <div className ="row">
          <div className = "col-10 mx-auto">
          

<nav className="navbar navbar-expand-lg navbar-light bg-info">
<NavLink activeClassName='menu_active' exact className="navbar-brand"  to="/home" >Shopping</NavLink>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ml-auto">
    <li className="nav-item active">
      <NavLink activeClassName='menu_active' exact className="nav-link" to="/Home">Home </NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName='menu_active' exact className="nav-link" to="/Service">Services</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName='menu_active' exact className="nav-link" to="/About">About</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName='menu_active' exact className="nav-link" to="/Contact">Contact</NavLink>
    </li>
   
   
  </ul>
 
      <NavLink className="btn btn-outline-light" exact to="/CRUD/AddUser">Add User</NavLink>
      </div>  
      </nav>
     </div>
    </div>
   </div>       
   </>

    );
};
 //   <form className="form-inline my-2 my-lg-0 ">
  //   <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
  //   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  // </form>