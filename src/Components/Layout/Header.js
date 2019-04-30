import React, {Component} from 'react'
import {Link} from 'react-router-dom';


function Header(test) {
  return(

      <nav className="navbar sticky-top navbar-expand-md pnav">
        <a href="/home" className="navbar-brand pheader-color-text">
          <strong classname="logo_wyn">Wyn</strong> AutoDialer</a>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <i class="fas fa-grip-horizontal"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
              <Link to="/home" className="nav-link pheader-color-text link">
                <i className="fas fa-home fa-md"> </i> Home
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link to="/home/faq" className="nav-link pheader-color-text">
              <i className="fas fa-question fa-md"></i>  FAQ
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link to="/home/prices" className="nav-link pheader-color-text">
                  <i className="fas fa-hand-holding-usd"></i>  Prices
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link to="/home/login" className="nav-link pheader-color-text">
                <i className="fas fa-sign-in-alt"></i>  Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Header;
