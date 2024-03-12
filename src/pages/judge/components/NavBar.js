import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'; 
import logo from './logo_inc.png'; 

const NavBar = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" style={{ height: '50px', width: '50px' }} />
          <h1 style={{ fontSize: '28px' }}>Judge Dashboard</h1>
        </div>
        <ul>
          <li>
            <Link to="/judge/profile" className={location.pathname === "/profile" ? "active" : ""} style={{ fontSize: '22px' }}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/judge/allocation-details" className={location.pathname === "/allocation-details" ? "active" : ""} style={{ fontSize: '22px', color: location.pathname === "/allocation-details" ? '#FFD700' : '', borderBottom: location.pathname === "/allocation-details" ? '2px solid #FFD700' : 'none' }}>
              Allocation Details & Marks Entry*
            </Link>
          </li>
          <li>
            <Link to="/logout" className={location.pathname === "/logout" ? "active" : ""} style={{ fontSize: '22px' }}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
