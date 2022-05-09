import './Header.css'

import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import {Link, Redirect} from 'react-router-dom';

const Header = () => {
    const deconnection = (event)=>{
        
            console.log('deconnexion process')
            localStorage.removeItem('currentUser');
            return (
                <Redirect to={{
                    pathname: '/home'
                }}/>
            ) 
        
       
    }
    return (
        <div className="header">
            <Link to='/home'>
                <div className="header__logo">
                    <p className="logo"> CHU Sidi Bel Abbès</p>
                </div>
            </Link>
            
        </div>
    );
};

export default Header;