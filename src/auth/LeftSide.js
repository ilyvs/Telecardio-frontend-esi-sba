import React from 'react';
import { Link } from 'react-router-dom';
import leftSidePic from '../images/signin/leftSideSignIn.jpg'

const LeftSide = () => {
    return(
        <div className="leftSide-container">
            <div className="title">
                <p>Bienvenu sur notre plateforme</p>
            </div>
            <div className="leftSide-logo">
                <p className="tc-letter">CHU Sidi-Bel-Abbès</p>
            </div>
            <div className="home-btn">
                <Link to='/home'>
                    <button type="button">Accueil</button>
                </Link>
            </div>
        </div>
    );
};

export default LeftSide;