import React from 'react';
import LeftSide from './LeftSide';
import avataImage from '../images/signin/profileImage.png';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './css/auth.css';

class Signin extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.initState;

        
    }

    data = '';

    initState = {
        username: '', 
        password: '',
        token:'',
        data:{},
        enabled: false,
        redirect: false,
    }

    onSubmitSignInForm = (event) => {
        event.preventDefault();

        // now let's get the signin informations
        const signInPatientInfos = {
            username: this.state.username,
            password: this.state.password
        }
        // and now let's post this informations to the server
        axios.post("http://localhost:8083/api/auth/signin", signInPatientInfos)
            .then(response => {
               
                console.log(response);
                // get our token from the response
                this.data = response.data;
                const accessToken = response.data.accessToken;
                
                if (response.data.enabled === 0) {
                    alert("veuillez verifier votre email.")
                }
                else {
                    alert("Redirection vers votre profile")
                    this.setState({
                        enabled: true,
                        redirect: true,
                        token: accessToken,
                        data: this.data
                    })
                }
               
            })
            .catch(err => {
                alert("username ou mot de passe incorrect.");
                this.setState(this.initState);
            });
    }

    onChangeFormSignin = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

   
    componentDidMount() {
        
        // let's verify if a user is already connected
        const token = localStorage.getItem('session');
        console.log({token : token});
        if(token) {
            this.setState({
                redirect: true,
                token: token,
                data: this.data
            })
        }
    }

    render() {
      
            const {redirect, token, data, enabled } = this.state;
            localStorage.setItem('currentUser', JSON.stringify(data))
            if(enabled == true) {
                if(redirect && data.roles[0]==="ROLE_Admin") {
                    return(
                        <Redirect to={{
                            pathname: "/admin/dashboard",
                        }}/>
                    );
                }
                if(redirect && data.roles[0]==="ROLE_Medecin") {
                    return(
                        <Redirect to={{
                            pathname: "/medecin/dashboard",
                        }}/>
                    );
                }
    
                if(redirect && data.roles[0]==="ROLE_Patient") {
                    return(
                        <Redirect to={{
                            pathname: "/patient/addRdv",
                        }}/>
                    );
                }
    
            }
            
        
        
        return(
            <div className="signIn-container">
                 <div className="leftSide-section">
                    <LeftSide />
                </div>
                <div className="rightSide-section">
                    <div className="title">
                        <p>Authentification patient</p>
                    </div>
                    <div className="avatar-auth">
                        <img src={avataImage} />
                    </div>
                    <form onSubmit={this.onSubmitSignInForm}>
                        <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChangeFormSignin} required/><br/>
                        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChangeFormSignin} required/><br/>
                        <button type="submit" className="btn btn-primary">valider</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default Signin;