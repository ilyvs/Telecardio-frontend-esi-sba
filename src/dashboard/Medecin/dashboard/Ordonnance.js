import React from 'react';
import CoeurLogo from '../../../images/ordonnance/coeur_logo.jpg';
import signature from '../../../images/ordonnance/signature.png'

import List_medicament from './List_medicament';
import jsPDF from 'jspdf';
import {Link } from 'react-router-dom'




class Ordonnance extends React.Component{

    styles = {
        'Ordonnance': {
            margin:"auto",
            padding: '20px',
            width: '70%',
            height: '70vh',
            // overflow: 'scroll',
              /* IE and Edge */

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
            //margin: 0,
            width: '50  %',
        },
        'ordonnance_logo':{
            height: '100px',
            width: '30%',
             
        },
        'ordonnance_body':{
            padding:'50px'
        },
        'ordonnance_bigTitle':{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.8em',
            marginBottom: '5%'
        },
        'ordonnance_medicament':{
            textAlign:'center',
            display:'flex',
            marginTop:'15%',

            flexDirection: 'column',
        },
        'ordonnance_addInput':{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%',
            marginTop:'5%',
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
        medicamentInput:'',
        dosageInput: '',
        listMedicaments : [],
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
    medicaments_ajoutes = [];

    getMeMedicament =(event) => {
        this.setState({
            medicamentInput: event.target.value,
        })

        
    }
    getMeDosage =(event) => {
        this.setState({
            dosageInput: event.target.value,
        })
    }

    addMedicament = (event) => {
        event.preventDefault();
        const medoc = this.state.medicamentInput;
        const  dosage= this.state.dosageInput
    
        // we add this medoc to listMedicament array
         if (event.keyCode===13){

        this.medicaments_ajoutes.push(medoc);
        this.setState({
            listMedicaments: this.medicaments_ajoutes,
            medicamentInput: '',
             dosageInput: ''
        })  
         }
    };

    generatePdf = () => {
        let informationClinique = JSON.parse(localStorage.getItem('ExamenClinique'));

        var ordonnance = this.state.listMedicaments;
        
        console.log("Ordonnance",ordonnance)


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
        doc.text(170, 140, 'ORDONNANCE')
        doc.text(30, 170, `nom :  ${this.state.infoPatient.nom}`);
        doc.text(185, 170, `prénom:    ${this.state.infoPatient.prenom}`);
        doc.text(385, 170, `age :  ${this.state.age}`);


        doc.setFont('Helvertica','normal')
        console.log('liste des medicament : ',this.state.listMedicaments);
        var pxDown = 20;
        var pxDebut = 250;
        ordonnance.forEach((medicament)=>{
            var location = pxDebut+pxDown;
            doc.text(85, location, medicament)
            pxDown+=20;
        })

        // signature 
        doc.setFont('Helvertica','bold')
        doc.text(50,500, 'Signature : ')
        doc.addImage(signature,'PNG', 30, 500, 100,100)
        doc.save('Ordonnance.pdf')
         
        localStorage.setItem('ExamenClinique', JSON.stringify({...informationClinique , ordonnance: ordonnance.toString()}));


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
                                ORDONNANCE
                            </div>
                            <div> 
                            <strong  style={{color:"black"}}>nom: </strong> {this.state.infoPatient.nom}               <strong  style={{color:"black"}}> prenom:</strong> {this.state.infoPatient.prenom}            <strong  style={{color:"black"}}>age:{this.state.age}</strong>
                                </div>
                                <hr/>

                            <div className='ordonnance_medicament' style={this.styles.ordonnance_medicament}>
                                <div className='ordonnance_listMedicament'>
                                    <List_medicament liste_medicament = {this.state.listMedicaments}/>
                                </div>
                                <div className='ordonnance_addInput' style={this.styles.ordonnance_addInput}>
                                    <input id="medic" type='text' name='medicament' placeholder='saisissez un médicament...' value={this.state.medicamentInput} className='medicament_nom' style={this.styles.medicament_nom} onChange={this.getMeMedicament} onKeyUp={this.addMedicament} autoComplete='false'/>
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

export default Ordonnance;