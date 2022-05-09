import { render } from '@testing-library/react';
import React from 'react';
import LeftSide from './LeftSide';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/auth.css';



class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.initialState;

        this.patientChange= this.patientChange.bind(this);
        this.submitPatientInformations = this.submitPatientInformations.bind(this);
    }


    initialState = {
        username:'',
        nom:'',
        prenom:'',
        dateNaissance: '',
        lieuNaissance:'',
        email:'', 
        sex:null,       
        numTelephone:'',
        activiteProf:'',
        numeroSecuriteSocial:'',
        groupeSanguin:null,
        password:''
    }

    submitPatientInformations = (event) => {
        event.preventDefault();

        const patient = {
             username : this.state.username,
             nom:this.state.nom,
             prenom: this.state.prenom,
             email : this.state.email,
             dateNaissance : this.state.dateNaissance,
             lieuNaissance: this.state.lieuNaissance,
             sex:  this.state.sex,
             numTelephone: this.state.numTelephone,
             activiteProf: this.state.activiteProf,
             numeroSecuriteSocial: this.state.numeroSecuriteSocial,
             password: this.state.password,
             groupeSanguin: this.state.groupeSanguin
        }

        console.log(patient);

        axios.post("http://localhost:8083/api/auth/signup", patient)
            .then(response => {
               alert(response.data.message );
               this.setState(this.initialState);
            })
            .catch(err => {
                console.log(err)
                alert('information saisi erronées')
                this.setState(this.initialState);
            });
    }

    patientChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {username,nom, prenom, email, dateNaissance, lieuNaissance, numTelephone, sex, numeroSecuriteSocial, password,activiteProf, groupeSanguin} = this.state;
        return (
            <div className="signUp-container">
                <div className="leftSide-section ">
                    <LeftSide />
                </div>
                <div className="rightSide-section">
                    <div className="title">
                        <p>Inscription patient</p>
                    </div>
                    <form onSubmit={this.submitPatientInformations} id="signUpForm" >
                        <i className="fas fa-user"></i><input type="text" placeholder="username" name="username" value={username} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-user"></i><input type="text" placeholder="nom" name="nom" value={nom} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-user"></i><input type="text" placeholder="prenom" name="prenom" value={prenom} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-user"></i><input type="text" placeholder="activiteProf" name="activiteProf" value={activiteProf} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-envelope"></i><input type="email" placeholder="email" name="email" value={email} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-birthday-cake"></i><input type="date" name="dateNaissance"  value={dateNaissance} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-user"></i><input type="text" placeholder="lieuNaissance" name="lieuNaissance" value={lieuNaissance} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-shield-check"></i><input type="text" placeholder="numero de sécurité" name="numeroSecuriteSocial" value={numeroSecuriteSocial} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-unlock"></i><input type="password" placeholder="password" name="password" value={password} onChange={this.patientChange} autoComplete="off" required/><br/>
                        <i className="fas fa-phone-volume"></i><input type="text" placeholder="numero de tel" name="numTelephone" value={numTelephone} onChange={this.patientChange} autoComplete="off" required /><br/>
                        <div className="sex-choice">
                            <select name="sex" value={sex} onChange={this.patientChange} required>
                                <option disabled selected>sex</option>
                                <option value="Homme">homme</option>
                                <option value="FEMME">femme</option>
                            </select>
                        </div>
                        <div className="sex-choice">
                            <select name="groupeSanguin" value={groupeSanguin} onChange={this.patientChange} required>
                                <option disabled selected>groupe sanguin</option>
                                    <option value='O+' >O+</option>
                                    <option value='A+' >A+</option>
                                    <option value='B+' >B+</option>
                                    <option value='O-' >O-</option>
                                    <option value='A-' >A-</option>
                                    <option value='AB+' >AB+</option>
                                    <option value='B-' >B-</option>
                                    <option value='AB-'>AB-</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="btn btn-primary btnAuth">valider</button>
                    </form>
                    <Link to="/signin">
                        <button type="button" className="btn btn-secondary btnAuth">s'authentifier</button>
                    </Link>
                    
                </div>
            </div>
        );
                
    };
};

export default SignUp;