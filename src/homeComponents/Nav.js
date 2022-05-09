import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar_homepage">
            <h2>CHU Sidi-Bel-Abbès</h2>
            <ul>
                <Link to="/home" className="navbar-link">
                    <li>Accueil</li>
                </Link>
                <li>à propos</li>
                <Link to="/signup" className="navbar-link">
                    <li>Connexion</li>
                </Link>
                
            </ul>      
        </nav>
    );
}

export default Nav;