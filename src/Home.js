import React from 'react';
import HomePage from './homeComponents/HomePage';
import SignUp from './auth/SignUp';
import SignIn from './auth/Signin';
import Verify from './auth/Verify';
import Home_user from './dashboard/Home_user';
import Home_user_medecin from './dashboard/Home_user_medecin';
import Home_user_patient from './dashboard/Home_user_patient';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => {

    return(
<Router>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/verify" component={Verify} />    
                    <Route path="/admin" component={Home_user}/>
                    <Route path='/medecin' component={Home_user_medecin} />
                    <Route path='/patient' component={Home_user_patient} />
                </Switch>
            </Router>
    );
};

export default Home;
