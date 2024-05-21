// React & Core
import React, { useState } from 'react'
import { isMobile } from 'react-device-detect';
import { supaBase } from '@core';

// Styling
import logo from 'assets/logo-no-background.png';

function NavigationBar() {
  const [loggedIn, setLoggedIn] = useState(false)
  const chkUsr = async (e) => {
    const { data, error } = await supaBase.auth.getSession();
    if (error) {
      alert(error.message)
    } else if(data.session) {
      setLoggedIn(true)
    }
  };

  chkUsr();

  const handleLogout = async (e) => {
    e.preventDefault()

    const { error } = await supaBase.auth.signOut()

    if (error) {
      alert(error.message)
    }
    else {
      window.location.href ='/';
    }
  }

  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-blue-custom p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#"><img src={logo} className={(isMobile ? 'logo-mobile' : 'logo')} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            {/* <li className="nav-item dropdown">
                <a className="nav-link mx-2 dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Jobs
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/#">Hire Workers</a></li>
                  <li><a className="dropdown-item" href="/#">Find Jobs</a></li>
                  <li><a className="dropdown-item" href="/#">Contact us</a></li>
                </ul>
              </li> */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link mx-2 dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/resources">Resources</a></li>
                <li><a className="dropdown-item" href="/terms">Terms</a></li>
                <li><a className="dropdown-item" href="/privacy-policy">Privacy Policy</a></li>
                <li><a className="dropdown-item" href="/contact-us">Contact us</a></li>
              </ul>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link mx-2 dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Examples
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/404">404</a></li>
                <li><a className="dropdown-item" href="/500">500</a></li>
                <li><a className="dropdown-item" href="/notifications">Notifications</a></li>
                <li><a className="dropdown-item" href="/invoice">Invoice</a></li>
                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                <li><a className="dropdown-item" href="/profile/trips">Trips</a></li>
                <li><a className="dropdown-item" href="/profile/favorites">Favorites</a></li>
                <li><a className="dropdown-item" href="/account">Account</a></li>
                <li><a className="dropdown-item" href="/account/billing">Billing</a></li>
                <li><a className="dropdown-item" href="/account/notifications">Notifications</a></li>
                <li><a className="dropdown-item" href="/account/security">Security</a></li>
              </ul>
            </li> */}
            {!loggedIn ?
              <>
                <li className="nav-item">
                  <a className="nav-link mx-2" href='/login'>Login & Register</a>
                </li>
              </> : 
              <>
                <li className="nav-item">
                  <a className="nav-link mx-2" href='/profile/upcoming-trips'>Upcoming Trips</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link mx-2 dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/profile">Search & Alerts</a></li>
                    <li><a className="dropdown-item" href="/profile/favorites">Favorite Trips</a></li>
                    <li><a className="dropdown-item" href="/profile/trips">Trip History</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link mx-2 dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Account
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/account">Settings</a></li>
                    <li><a className="dropdown-item" href="/account/security">Security</a></li>
                    {/* <li><a className="dropdown-item" href="/account/notifications">Notifications</a></li> */}
                    {/* <li><a className="dropdown-item" href="/account/billing">Billing</a></li> */}
                    <li><a className="dropdown-item" href="/#" onClick={handleLogout}>Sign Out</a></li>
                  </ul>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default NavigationBar;

