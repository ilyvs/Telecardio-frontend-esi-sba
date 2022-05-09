import React from 'react';
import Header from './Header';
//admin
import Admin_nav from './Admin_nav.js';
import Admin_dashboard from './Admin/dashboard/Admin_dashboard';
import Add_medecin from './Admin/add_medecin/Add_medecin';
import View_users from './Admin/View_users/View_users';
import Consulte_user from './Admin/View_users/Consulte_user';
import AdminStat from './Admin/admin_stat/AdminStat';


//medecin 
// import Medecin_nav from './Medecin_nav'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import './Home_user.css';

class Home_user extends React.Component {

    render() {
        console.log('rani hna')
        var currentUser_information=null;
        if (localStorage.getItem('currentUser') != null ) {
            currentUser_information= JSON.parse(localStorage.getItem('currentUser'))
            if (currentUser_information.roles[0] != 'ROLE_Admin') {
                console.log(currentUser_information.roles[0]);
                return (<Redirect  to={{
                    pathname: "/home"
                }}/>)
            }

        }
        return (
            <div className="Home_user">
                <Header />
                <div className="sections">
                    <div className="userLeft_section">
                        <Admin_nav currentUser = {currentUser_information}/>
                    </div>
                    <div className="userRight_section">
                            <Switch>
                                <Route path='/admin/dashboard'> <Admin_dashboard /></Route>
                                <Route path='/admin/add_medecin'> <Add_medecin /> </Route>
                                <Route path='/admin/view_users'><View_users /></Route>
                                <Route path='/admin/consulte_user'><Consulte_user /></Route>
                                <Route path='/admin/statistiques'>  <AdminStat/>  </Route>
                            </Switch>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home_user;