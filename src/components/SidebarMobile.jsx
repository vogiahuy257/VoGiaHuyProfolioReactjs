// src/components/SidebarMobile.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SidebarMobile() {
  const location = useLocation(); // To get the current route

  return (
    <nav className="sidebar-mobile">
      <ul className="menu">
        <li className={location.pathname === '/work' ? 'active' : ''}>
          <Link to="/work">
            <span className="material-icons">work</span>
            <p>Work</p>
          </Link>
        </li>
        <li className={location.pathname === '/skills' ? 'active' : ''}>
          <Link to="/skills">
            <span className="material-icons">code</span>
            <p>Skills</p>
          </Link>
        </li>
        <li className={location.pathname === '/home' ? 'active' : ''}>
          <Link to="/home">
            <span className="material-icons">person</span>
            <p>Home</p>
          </Link>
        </li>
        <li className={location.pathname === '/certs' ? 'active' : ''}>
          <Link to="/certs">
            <span className="material-icons">verified</span>
            <p>Certs</p>
          </Link>
        </li>
        <li className={location.pathname === '/reviews' ? 'active' : ''}>
          <Link to="/reviews">
            <span className="material-icons">rate_review</span>
            <p>Reviews</p>
          </Link>
        </li>
        <div className="box-active"></div>
      </ul>
    </nav>
  );
}

export default SidebarMobile;
