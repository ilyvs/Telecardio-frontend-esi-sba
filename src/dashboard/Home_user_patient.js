import React from 'react';
import Header from './Header';
//admin


//medecin 
import Patient_nav from './Patient_nav';
import AddRdv from './Patient/AddRdv';
import EditRdv from './Patient/EditRdv';
import Liste_rdvNA from './Patient/Liste_rdvNA'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import './Home_user.css';

class Home_user extends React.Component {


    render() {
        console.log('rani hna')
        const currentUser_information= JSON.parse(localStorage.getItem('currentUser'))
        return (
            <div className="Home_user">
                <Header />
                <div className="sections">
                    <div className="userLeft_section">
                        <Patient_nav currentUser = {currentUser_information}/>
                    </div>
                    <div className="userRight_section">
                            <Switch>
                                <Route path='/patient/addRdv'> <AddRdv /></Route>
                                <Route path='/patient/afficher_rdv'> <Liste_rdvNA /></Route>
                                <Route path='/patient/editer_rdv'> <EditRdv /></Route>
                            </Switch>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home_user;