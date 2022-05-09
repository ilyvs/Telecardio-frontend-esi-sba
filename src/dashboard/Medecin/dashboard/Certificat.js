import React from 'react';
import CoeurLogo from '../../../images/ordonnance/coeur_logo.jpg';
import signature from '../../../images/ordonnance/signature.png'
import List_medicament from './List_medicament';
import jsPDF from 'jspdf';
import {Link } from 'react-router-dom'
import ShowCertificatBody from './ShowCertificatBody'

class Certificat extends React.Component{

    styles = {
        'Ordonnance': {
            margin:"auto",
            padding: '20px',
            width: '70%',
            height: '70vh',

        },
        'ordonnance_form': {
            margin: 'margin-auto',
            width:'70%',
            margin:'auto',
            padding: '50px',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'

        },
        'ordonnance_header': {
            display: 'flex',
            justifyContent: 'space-between'
        },
        'docteur_informations':{
            width: '90%',
        },
        'ordonnance_logo':{
            height: '100px',
            width: '30%'

        },
        'ordonnance_body':{
            padding:'50px'
        },
        'ordonnance_bigTitle':{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.8em',
            marginBottom: '50px'
        },
        'ordonnance_medicament':{
            textAlign:'center',
            display:'flex',
            flexDirection: 'column',
        },
        'ordonnance_addInput':{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%',
            margin: 'auto'
        },
        'medicament_addBTN': {
            textAlign: 'center',
            margin: 'auto',
            marginTop: '10px',
            marginBottom: '30px',
            padding: '2px',
            width: '30%',
            fontSize: '0.8em',
            backgroundColor: '#515782',
            color: 'white'
        },
        'medicament_nom': {
            width: '70%'
        },
        'medicament_dosage': {
            width: '25%'
        },
        'ordonnance_footer': {
            width: '30%',
            marginTop: '50px'
        }
        
    }

    state = {

        informationDocteur : '',
        textAreaBody: '',
        infoPatient:'',
        dateNaissance:'',
        age:''
    }
    componentDidMount=()=>{
        const docteur = JSON.parse(localStorage.getItem('currentUser'));
        const infoTotal = JSON.parse(localStorage.getItem('information'));
        const infoPer=infoTotal.informationPersonnelle;

        this.setState({
            ...this.state,
            informationDocteur: docteur,
            infoPatient:infoPer,
            dateNaissance:infoPer.dateNaissance.slice(0,4),
            age: (2021- infoPer.dateNaissance.slice(0,4))

        })
        

    }
    getMeTextArea =(event) => {
        this.setState({
            ...this.state,
            textAreaBody: event.target.value,
        })

        
    }
    


    generatePdf = () => {
        
        let informationClinique = JSON.parse(localStorage.getItem('ExamenClinique'));

        var certificatMedical = this.state.textAreaBody;
        var doc = new jsPDF('portrait', 'px', 'a4', 'false');
        // docteur information
        doc.setFont('Helvertica','bold')
        doc.text(10,30, 'Dr : ');
        doc.setFont('Helvertica','normal')
        doc.text(40,30, this.state.informationDocteur.nom);
        doc.text(100,30, this.state.informationDocteur.prenom);
        doc.setFont('Helvertica','bold')
        doc.text(10,45, 'Email : ');
        doc.setFont('Helvertica','normal')
        doc.text(50,45, this.state.informationDocteur.email);
        doc.setFont('Helvertica','bold')
        doc.text(10,60, 'TelNum : ');
        doc.setFont('Helvertica','normal')
        doc.text(70,60, this.state.informationDocteur.numTelephone);
        doc.addImage(CoeurLogo, 'PNG', 320, 5, 80,80)
        // big title ordonnance
        doc.setFont('Helvertica','bold')
        doc.text(170, 180, 'Certificat médical')
        doc.setFont('Helvertica','normal')
        doc.text(85, 240, `Je sousigne Dr ${this.state.informationDocteur.nom}  ${this.state.informationDocteur.prenom}`)
        doc.text(85, 270,  `certifie que Mme/Mr :  ${this.state.infoPatient.nom}   ${this.state.infoPatient.prenom} agé(e) :   ${this.state.age} `  )
        doc.setFont('Helvertica','normal')
        doc.text(85, 330, this.state.textAreaBody)

        // signature 
        doc.setFont('Helvertica','bold')
        doc.text(50,500, 'Signature : ')
        doc.addImage(signature,'PNG', 30, 500, 100,100)
        doc.save('certificat_méedical.pdf')
        localStorage.setItem('ExamenClinique', JSON.stringify({...informationClinique , certificatMedical: certificatMedical.toString()}));


    }
    render() {
        return(
            <div className='Ordonnance' style={this.styles.Ordonnance}>
                <div className='ordonnance_form' style={this.styles.ordonnance_form}>
                    <form className='ordonnance_form_body' id='myForm'>
                        <div className='ordonnance_header' style={this.styles.ordonnance_header}>
                        <div className='docteur_informations' style={this.styles.docteur_informations}>
                                <h5> <strong style={{color: 'black'}}>Dr</strong> {this.state.informationDocteur.nom} {this.state.informationDocteur.prenom}</h5>
                                <label style={{color: 'black'}}>email:</label> <input style={{color: 'black'}} type='text' value={this.state.informationDocteur.email}disabled/><br/>
                                <label style={{color: 'black'}}>Tel :</label><input style={{color: 'black'}} type='text' value={this.state.informationDocteur.numTelephone} disabled/>
                            </div>
                            <div className='ordonnance_logo' style={this.styles.ordonnance_logo}>
                                <img src={CoeurLogo} alt='logo_ordonnace' style={{width:'80%', height:'100%'}}/>
                            </div>
                        </div>
                        <div className='ordonnance_body' style={this.styles.ordonnance_body}>
                            <div className='ordonnance_bigTitle' style={this.styles.ordonnance_bigTitle}>
                                Certificate Médical
                            </div>
                            <div className='ordonnance_medicament' style={this.styles.ordonnance_medicament}>
                            <div className='ShowBody'>
                            <div>
                                    Je sousigne <strong style={{color:"black"}}>Dr: {this.state.informationDocteur.nom + ' ' + this.state.informationDocteur.prenom}</strong>
                            </div>
                            <div>
                                certifie que Mme/Mr : {this.state.infoPatient.nom} {this.state.infoPatient.prenom}  agé(e)  {this.state.age} ans 

                            </div>
                          
                            <br/>
                            <br/>
                            <div>
                            <ShowCertificatBody text={this.state.textAreaBody} />
                            </div>
                            </div>
                                
                                <div class="form-group">
                                    <textarea onChange={this.getMeTextArea} value={this.state.textAreaBody} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                
                                
                                
                            </div>
                            <div className='ordonnance_footer' style={this.styles.ordonnance_footer}>
                                <h6>Signature : </h6>
                                <img src={signature} alt='signature'style={{width:'80%', height:'100%'}} />
                            </div>
                        </div>
                    </form>

                    <button className='btn-impression' onClick={this.generatePdf} style={{ marginLeft:'40%'}}  variant="contained">imprimer</button>


                </div>
            </div>
        )
    }
}

export default Certificat;