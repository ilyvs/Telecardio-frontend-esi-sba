import './Admin_nav.css';
import React from 'react';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';


const deconnection = (event)=>{
        
    console.log('deconnexion process')
    localStorage.removeItem('currentUser');
    return (
        <Redirect to={{
            pathname: '/home'
        }}/>
    ) 


}

class Medecin_nav extends React.Component {
    render() {
        return (
            <div className="Admin_nav">
                <div className="profile__section">
                    <Profile currentUser = {this.props.currentUser}/>
                </div>
                <div className='navigation__items'>
                    <Link to='/patient/addRdv' className='dashboard_item'>
                        <div className="nav__item">
                            <span>prendre rendez-vous</span>
                        </div>
                    </Link>
                    <Link to='/patient/afficher_rdv' className='dashboard_item'>
                        <div className="nav__item">
                            <span>afficher rdv</span>
                        </div>
                    </Link>
                    <Link to='/patient/afficher_dossier_medical' className='dashboard_item'>
                        <div className="nav__item">
                            <span>afficher mon dossier M</span>
                        </div>
                    </Link>
                    <hr/>
                    <Link to='/home' className='add_item'>
                        <div className="nav__item"  onClick={deconnection}>
                            <span>Déconnexion</span>
                        </div>
                        </Link>
                </div>
            </div>
        );
    };
};

export default Medecin_nav;