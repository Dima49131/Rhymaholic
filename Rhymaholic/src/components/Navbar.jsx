import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const toggleNavbar = () => { setIsNavbarOpen(!isNavbarOpen); };
    const closeNavbar = () => { setIsNavbarOpen(false); };

  return (
    <nav>
      <div className={isNavbarOpen ? "navbar open" : "navbar"}>
        <Link to="/"><button className="navbarbrand">Rhymaholic</button></Link>


        <ul className="nav-links" onClick={closeNavbar}>
            <li><Link to="/highlighter">Rhyme Highlighter</Link></li>
            <li><Link to="/rhymeTracker">Freestyle Word Generator</Link></li>
            <li><Link to="/phonetictool">English To Phonetics</Link></li>
            <li><Link to="/rhymingtool">Rhyme Grid</Link></li>
            <li><Link to="/rhymingtoolsimplified">Rhyme Grid v2</Link></li>
        </ul>

        <div className="navbar-icons">
          <a href="https://github.com/Dima49131/Rhymaholic" target="_blank" className="icon" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://buymeacoffee.com/dima8ander5" target="_blank" className="icon" aria-label="Buy Me A Coffee">
            <i className="fas fa-coffee"></i>
          </a>
        </div>

        <button className="hamburger" onClick={toggleNavbar}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
