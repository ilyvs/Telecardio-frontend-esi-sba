import React from 'react';
import axios from 'axios';
import View_medecin from './View_medecin';
import {Form} from 'react-bootstrap';

class AddRdv extends React.Component {

    // 1 recuperer les medecins 
    // input date w heure 
    // subject 
    state = {
        liste_medecins: [],
        rdvToPost : {
           cas: '',
           date: '',
           doc_name: '',
           id_doc: '',
           notes: '',
           patient_id: '',

        },
        errors: []
    }
    

    doctors = [];
    getMeAllDoctors = () => {
        axios.get("http://localhost:8090/gestion-compte-service/api/auth/users")
            .then(response => {
               
                response.data.forEach(user => {
                
                    if(user.roles[0].name === 'ROLE_Medecin') {
                        this.doctors.push(user)
                    }
                     
                    
                });

                this.setState({
                    ...this.state,
                    liste_medecins: this.doctors
                })
                
                
            })
            
    }

    inputChange = (event) => {
        this.setState({
            ...this.state,
            rdvToPost : {
                ...this.state.rdvToPost,
                [event.target.name]: event.target.value
            }
        })
    }

    componentDidMount = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')).id;
        this.getMeAllDoctors();
        this.getMeTheMinimum();
        this.setState({
            ...this.state,
            rdvToPost:{
                ...this.state.rdvToPost,
                patient_id: currentUser
            }
        })
        

    }

    getMeTheMinimum = () => {
        
    }

    style = {
        'background' :{
            padding: '100px',
            height: '100vh',
            
        },
        'addRdv':{
            borderRadius: '20px',
            overflow: 'hidden',
            display:'flex',
           
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            borderRadius: '20px'


        },
        'addRdv__leftSection' :{
           
            width: '50%',
            

        },
        'addRdv__rightSection' : {
            border: 'none',
            borderLeft: '1px solid black',
            width: '50%',
            backgroundColor: '#2a52be'
        },

        'inputRdv':{
            width: '80%',
            margin: 'auto',
         
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            height: '100%'
        },
        'inputRdvField':{
            width: '100%',
            height: '60px',
   
        },
        'btnDiv':{
            width: '100%',
        },
        'submitFormBtn': {
            margin: 'auto',
            borderRadius: '10px',
            width: '100%'
        }

    }

    setMeIdAndName= (id, nom) => {
        this.setState({
            ...this.state,
            rdvToPost: {
                ...this.state.rdvToPost,
                id_doc: id,
                doc_name: nom
            }
        })
    }

   

    checkErrors = (object) => {
        const errors = [];
        if (object.date==''){
            errors.push("veuillez selectionner la date et l'heure");
        }
        if(object.doc_name==''){
            errors.push("veuillez choisir un medecin.")
        }
        if(object.notes==''){
            errors.push('veuillez introduire une note.')
        }
        
        this.setState({
            ...this.state,
            errors: errors
        })

        
    }

    submitFormRdv = () => {
        alert('you will submit');
        this.checkErrors(this.state.rdvToPost);
        if(this.state.errors.length==0){
            axios.post('http://localhost:8084/add-appointment', this.state.rdvToPost)
            .then(result => {
                if(result.data == 3){  
                   
                    }  
                    else if (result.data == 2){  
                        return alert("this date is passed change it please");
                    }  
                else{
                    alert("sorry this doctor already have an appointment that exact date")
                }
            }
            
            
            )
        } else{
            const div_error = document.getElementById('errors__display');
            alert(div_error)
            
            this.state.errors.forEach( err => {
                const error_item = document.createElement('p');
                const error_text = document.createTextNode(err)
                alert(error_text)
                error_item.appendChild(error_text)
                div_error.appendChild(error_item)
            })
        }
        
    }

   


    render() {
        console.log('state ... ', this.state)
        return(
            <div className='background' style={this.style.background} >
                <div className='addRdv' style={this.style.addRdv}>
                    <div className='addRdv__leftSection' style={this.style.addRdv__leftSection}>
                        <div className='inputRdv' style={this.style.inputRdv}>
                            <h1>Ajout de Rendez-vous</h1>
                            <input
                                className = 'inputRdvField'
                                name='notes'
                                type='text'
                                onChange={this.inputChange}
                                value={this.state.rdvToPost.notes}
                                placeholder='notes'
                                style= {
                                    this.style.inputRdvField
                                }
                            />
                            <input
                                className = 'inputRdvField'
                                type='datetime-local'
                                name='date'
                                onChange={this.inputChange}
                                value={this.state.rdvToPost.date}
                                style= {
                                    this.style.inputRdvField
                                }
                            />
                            <div style={this.style.btnDiv}>
                                <button className='btn btn-primary' onClick={this.submitFormRdv} style={this.style.submitFormBtn}>valider</button>
                            </div>
                            <div id='errors__display'>

                            </div>
                        </div>
                        
                    </div>
                    <div className='addRdv__rightSection' style={this.style.addRdv__rightSection}>
                        <View_medecin users={this.state.liste_medecins} setMeId ={(id, nom)=>{this.setMeIdAndName(id, nom)}}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default AddRdv;