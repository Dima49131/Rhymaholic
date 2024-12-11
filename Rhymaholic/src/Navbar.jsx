import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    useEffect(() => {
        
        const hamburger = document.querySelector('.hamburger');
        const navbar = document.querySelector('.navbar');
        
        const toggleNavbar = () => {
            navbar.classList.toggle('open');
        };

        if (hamburger) {
            hamburger.addEventListener('click', toggleNavbar);
        }

        return () => {
            if (hamburger) {hamburger.removeEventListener('click', toggleNavbar);}
        };  

    }, []);

  return (
    <nav>
      <div className="navbar">
      <Link to="/"><button className="navbarbrand">Rhymaholic</button></Link>
        <ul className="nav-links">
            <li><Link to="/phonetictool">English to Phonetics Tool</Link></li>
            <li><a href="#">Rhyming Tool</a></li>
            <li><a href="#">More coming soon!</a></li>
        </ul>
        <div className="navbar-icons">
          <a href="https://www.linkedin.com/in/dimitri-anderson-b75869298/" target="_blank" className="icon" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Dima49131" target="_blank" className="icon" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://buymeacoffee.com/dima8ander5" target="_blank" className="icon" aria-label="Buy Me A Coffee">
            <i className="fas fa-coffee"></i>
          </a>
        </div>
        <button className="hamburger" aria-label="Toggle Navigation Menu">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
