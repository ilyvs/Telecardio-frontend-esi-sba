import './Add_medecin.css';
import React from 'react';
import axios from 'axios';
import ReactFormInputValidation from 'react-form-input-validation';

class Add_medecin extends React.Component {

    styles = {
        "errors": {
            fontSize : '0.8em',
            color: 'red'
        }
    }
    constructor (props) {
        super(props);
        this.state = {
            fields : this.initialInformations,
            errors:{}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
        
            username:'required',
            nom:'required',
            prenom:'required',
            dateNaissance:'required|date',
            lieuNaissance:'required',
            adresse:'required',
            sex:'required',
            email:'required|email',
            numTelephone: 'required|numeric',
            password:'required',
            numeroSecuriteSocial:'required|numeric',
            groupeSanguin:'required',
            role:'required'
        })

        this.form.onformsubmit = (fields)=>{
           // event.preventDefault();
           console.log('my states : ', fields)
            axios.post("http://localhost:8083/api/auth/signup",fields)
                .then((result)=>{
                    console.log(result)
                
                })
                .catch((err)=>{
                    console.log({errorAdding: err})
                })
        }
    }

    

    initialInformations = {
        username:'',
        nom:'',
        prenom:'',
        dateNaissance:'',
        lieuNaissance:'',
        adresse:'',
        sex:'',
        email:'',
        numTelephone:'',
        activiteProf:'',
        password:'',
        numeroSecuriteSocial:'',
        groupeSanguin:'',
        role:[],
    }

    

    // inputOnChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }

    inputOnChangeRole = (event) => {
        const role = [event.target.value];
        this.setState({
            fields: {
                ...this.state.fields,
                role: role
            },
            ...this.state.errors
        });
    }

    
    render() {

        return(
            
            <React.Fragment>
            <div className='addMedecin_background'>
                <div className="Add_medecin">
                    <form onSubmit={this.form.handleSubmit}>
                        <div className='name'>
                            <div className='nom'>
                                <input type='text' placeholder='Nom de famille' name='nom'  onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent} required/>
                                <label className="error" style={this.styles.errors}>
                                    {this.state.errors.nom ? this.state.errors.nom : ""}
                                </label>
                            </div>
                            <div className='prenom'>
                                <input type='text' placeholder='prenom' name='prenom' onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent} required/>
                                <label className="error" style={this.styles.errors}>
                                    {this.state.errors.prenom ? this.state.errors.prenom : ""}
                                </label>
                            </div>        
                        </div>
                        <div className='naissance'>
                            <div className='date_naissance'>
                                <input type='date' name='dateNaissance' onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent}required/>
                                <label className=" error" style={this.styles.errors}>
                                    {this.state.errors.dateNaissance ? this.state.errors.dateNaissance : ""}
                                </label>
                            </div>
                            <div className='lieu_naissance'>
                                <input type='text' placeholder='lieu de naissance' name='lieuNaissance' onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent} required/>
                                <label className="error" style={this.styles.errors}>
                                    {this.state.errors.lieuNaissance ? this.state.errors.lieuNaissance : ""}
                                </label>
                            </div>        
                        </div>
                        <div className="address">
                            <input type='text' name='adresse' placeholder='adresse' onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent} required/>
                            <label className="error" style={this.styles.errors}>
                                {this.state.errors.adresse ? this.state.errors.adresse : ""}
                            </label>
                        </div>
                        <div className="address">
                            <input type='text' name='numTelephone' placeholder='numTelephone' onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent} required/>
                            <label className=" error" style={this.styles.errors}>
                                {this.state.errors.numTelephone ? this.state.errors.numTelephone : ""}
                            </label>
                        </div>
                        <div className="address">
                            <input type='text' name='numeroSecuriteSocial' placeholder='numeroSecuriteSocial' onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent} required/>
                            <label className="error" style={this.styles.errors}>
                                {this.state.errors.numeroSecuriteSocial ? this.state.errors.numeroSecuriteSocial : ""}
                            </label>
                        </div>
            
                        <div className='selectClass'>
                            <div>
                                <select className="sex" name="sex" onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent} required>
                                    <option disabled selected>sexe</option>
                                    <option value='Homme' >homme</option>
                                    <option value='FEMME'>femme</option>
                                </select>
                                <div>
                                    <label className="error" style={this.styles.errors}>
                                        {this.state.errors.sex ? this.state.errors.sex : null}
                                    </label>
                                </div>
                            </div>
                            <div>
                                <select className="groupeSanguin" name="groupeSanguin" onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent} required>
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
                                <div>
                                    <label className=" error" style={this.styles.errors}>
                                        {this.state.errors.groupeSanguin ? this.state.errors.groupeSanguin : ""}
                                    </label>
                                </div>
                            </div>
                            
                            <div>
                            <select className="role" name="role" onChange={this.inputOnChangeRole} onBlur={this.form.handleBlurEvent} required>
                                <option disabled selected>role</option>
                                <option value='admin' >admin</option>
                                <option value='medecin'>medecin</option>
                                <option value='infermier'>infermier</option>
                            </select>
                            <div>
                                <label className="error" style={this.styles.errors}>
                                    {this.state.errors.role ? this.state.errors.role : ""}
                                </label>
                            </div>
                            </div>
                            
                            
                        </div>
                        <div className='connexion_information'>
                            <div className='username'>
                                <input type='text' placeholder='username' name='username' onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent} required/>
                                <label className="error" style={this.styles.errors}>
                                    {this.state.errors.username ? this.state.errors.username : ""}
                                </label>
                            </div>
                            <div className='email'>
                                <input type='text' placeholder='email' name='email' onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent} required/>
                                <label className="error" style={this.styles.errors}>
                                    {this.state.errors.email ? this.state.errors.email : ""}
                                </label>
                            </div>
                            <div className='mot_de_passe'>
                                <input type='password' placeholder='mot de passe' name='password'onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent} required/>
                                <label className="error" style={this.styles.errors}>
                                    {this.state.errors.password ? this.state.errors.password : ""}
                                </label>
                            </div>
                        </div>
                        <div className='btn_actions'>
                            <button type="reset" className='reset_btn'>Reset</button>
                            <button type="button" className='validate_btn' data-bs-toggle="modal" data-bs-target="#exampleModal">Valider</button>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Etes vous sur ?</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        en cliquant sur "enregistrer" vous aller confirmer vos saisi .
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">fermer</button>
                                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">enregistrer</button>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </form>
                </div>
                
            </div>
            </React.Fragment>

            
            
        );
    };
};

export default Add_medecin;