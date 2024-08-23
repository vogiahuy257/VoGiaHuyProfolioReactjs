// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation(); // To get the current route

  return (
    <nav className="sidebar">
      <ul className="menu">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            <span className="material-icons">person</span>
            <p>Home</p>
          </Link>
        </li>
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
      
      <div className="box-bottom">
        <a href="https://www.facebook.com/profile.php?id=100023020324055">
          <img width="35px" src="./img/1facebook.png" alt="facebook icon" />
        </a>
        <a href="https://github.com/vogiahuy257/VoGiaHuyProfolio">
          <img width="35px" src="./img/github.png" alt="github icon" />
        </a>
      </div>
    </nav>
  );
}

export default Sidebar;
