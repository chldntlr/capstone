import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Attendance System</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/facerecognition">Face Recognition</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
