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
                    <Link to='/medecin/dashboard' className='dashboard_item'>
                        <div className="nav__item">
                            <span>Dashboard</span>
                        </div>
                    </Link>

                    <Link to='/medecin/consulte_patient' className='add_item'>
                        <div className="nav__item">
                            <span>Consulter patient</span>
                        </div>
                    </Link>

                     {/* <Link to='/medecin/examen_clinique' className='dashboard_item'>
                        <div className="nav__item">
                            <span>Examen clinique</span>
                        </div>
                    </Link> */}
                    
                    <Link to='/medecin/afficher_rdvs' className='add_item'>
                        <div className="nav__item">
                            <span>Rendez-Vous</span>
                        </div>
                    </Link>
                          <br/><br/>

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