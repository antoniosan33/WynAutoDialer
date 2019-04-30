import React, {Component} from 'react'
import {Link} from 'react-router-dom';

function Header_dialer() {
  return(
    <nav className="navbar sticky-top shadow navbar-expand-sm navbar-drak pnav">
      <a href="/" className="navbar-brand pheader-color-text">
        Wyn AutoDialer</a>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item mr-4">
            <Link to="/dialer/lead_lists" className="nav-link pheader-color-text link">
              <i className="fas fa-list-ul fa-md"> </i> Lead Lists
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link to="/dialer/leads_store" className="nav-link pheader-color-text">
            <i className="fas fa-store fa-md"></i>  Leads Store
            </Link>
          </li>
          <li className="nav-item mr-4">
          <Link to="/home" className="nav-link pheader-color-text">
          <i className="fas fa-home fa-md"></i>
          </Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}

  export default Header_dialer;
