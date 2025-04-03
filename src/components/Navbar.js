import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCogs, FaComments } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setNav(!nav);
  };

  // Close mobile menu when window resizes above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && nav) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [nav]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Me :)</Link>
      </div>
      
      <div className={`burger ${nav ? 'toggle' : ''}`} onClick={handleClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <ul className={`nav-links ${nav ? 'nav-active' : ''}`}>
        <li>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={handleClick}
          >
            <FaHome className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link 
            to="/skills" 
            className={location.pathname === '/skills' ? 'active' : ''}
            onClick={handleClick}
          >
            <FaCogs className="nav-icon" /> Skills
          </Link>
        </li>
        <li>
          <Link 
            to="/chat" 
            className={location.pathname === '/chat' ? 'active' : ''}
            onClick={handleClick}
          >
            <FaComments className="nav-icon" /> Chat
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
