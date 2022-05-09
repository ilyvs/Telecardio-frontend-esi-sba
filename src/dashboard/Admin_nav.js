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
class Admin_nav extends React.Component {

    
   
    render() {
        return (
            <div className="Admin_nav">
                <div className="profile__section">
                    <Profile currentUser = {this.props.currentUser}/>
                </div>
                <div className='navigation__items'>
                    <Link to='/admin/dashboard' className='dashboard_item'>
                        <div className="nav__item">
                            <span>Dashboard</span>
                        </div>
                    </Link>

                    <Link to='/admin/add_medecin' className='add_item'>
                        <div className="nav__item">
                            <span>Ajouter utilisateur</span>
                        </div>
                    </Link>
                
                    <Link to='/admin/view_users' className='dashboard_item'>
                        <div className="nav__item">
                            <a><span>Liste utilisateur</span></a>
                        </div>
                    </Link>
                    <Link to='/admin/statistiques' className='dashboard_item'>
                        <div className="nav__item">
                            <a><span>Statistics</span></a>
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

export default Admin_nav;