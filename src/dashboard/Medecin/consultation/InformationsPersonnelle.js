import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// import { withStyles } from '@material-ui/core/styles';
// import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import SaveIcon from '@material-ui/icons/Save';
// import CancelIcon from '@material-ui/icons/Cancel';
// import Button from '@material-ui/core/Button';

// import { updatepatientQuery, getpatientinfoQuery, newpatientidQuery, addpatientQuery } from './Queries';

const genders = [
  {
    value: 'Homme',
    label: 'Homme',
  },
  {
    value: 'Femme',
    label: 'Femme',
  },

];

const groupageSanguin = [
  {
    value: 'O+',
    label: 'O+'
  },
  {
    value: 'A+',
    label: 'A+'
  },
  {
    value: 'B+',
    label: 'B+'
  },
  {
    value: 'O-',
    label: 'O-'
  },
  {
    value: 'A-',
    label: 'A-'
  },
  {
    value: 'AB+',
    label: 'AB+'
  },
  {
    value: 'B-',
    label: 'B-'
  },
  {
    value: 'AB-',
    label: 'AB-'
  },
];



const useStyles = makeStyles ((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height:"100%",
    backgroundColor: theme.palette.background.paper * 1,
    margin: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginBottom:theme.spacing(20)
  
    },

  },

  info: {
    marginLeft: theme.spacing.unit * 5 ,
    marginBottom:theme.spacing(10)

  },
  textField: {
    marginBottom: '8%',
    padding:'auto'
  },

  menu: {
    margin: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginBottom:theme.spacing(10)
  
    },
  },
}));
   
  export default function InformationsPersonnelle() {
  const classes = useStyles();
  let Information = JSON.parse(localStorage.getItem('information'));
  let informationPersonnelle = Information.informationPersonnelle
  const dateNaissance = informationPersonnelle.dateNaissance;
  const getMeDate = () => {
    // const [y,m,d] = dateNaissance.split('-');
    // const myDay = d.substring(0,2);
    // const myFinalFormat = m+'-'+myDay+'-'+y
    //const dd = moment(dateNaissance).format('YYYY-MM-DD')
    //return myFinalFormat
    console.log(dateNaissance.slice(0,10))
  }

  console.log(getMeDate())
  
  
  return (
    
    <form noValidate autoComplete="off">
    <Grid container>
      <Grid item lg={3}>
        <TextField 
        value={informationPersonnelle.id}
        id="id"
        label="ID"
        className={classes.textField}
        //add 1 number to the last ID if the form is for a new patient
        // margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        
       
        />
        <TextField 

        id="nom"
        label="Nom"
        required
        className={classes.textField}
        //value={hits.nom ? hits.nom: ''}
        value={informationPersonnelle.nom}
        // onChange={handleChange('nom')}
        // margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
       
  
        />
       <TextField 

id="prenom"
label="prénom"
value={informationPersonnelle.prenom}

required
className={classes.textField}
//value={hits.prenom ? hits.prenom: ''}
// onChange={handleChange('prénom')}
// margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
variant="outlined"

/>
        <TextField 
        id="email"
        label="Email"
        value={informationPersonnelle.email}

        required
        className={classes.textField}
        //value={hits.email ? hits.email : ''}
        // onChange={handleChange('email')}
        // margin={props.editClicked  || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
       
        />
     
    </Grid>
    <Grid item lg={3}>
        
        <TextField 
          value={informationPersonnelle.numeroSecuriteSocial}

        id="nums"
        label="numéro de Securité Social"
        required
        className={classes.textField}
        //value={hits.numeroSecuriteSocial? hits.numeroSecuriteSocial : ''}
        // onChange={handleChange('numéro de Securité Social')}
        // margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
     
        />
    <TextField 
        value={informationPersonnelle.numTelephone}

        id="numTelephone"
        label="numTelephone"
        required
        className={classes.textField}
        //value={hits.numTelephone ? hits.numTelephone : ''}
        // onChange={handleChange('numTelephone')}
        // margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        helperText="example: 0792734147"
      ></TextField>


      <TextField
          value={informationPersonnelle.dateNaissance.slice(0,10)}

          id="dateNaissance"
          //label="Date de naissance"
        
          // margin={props.dateNaissance || props.dateNaissance ? 'normal' : 'dense'}
          type='date'
          variant="outlined"
          required
          className={classes.textField}
       
          // onChange={handleChange('Date de naissance')}
          />

          <TextField 

          value={informationPersonnelle.lieuNaissance}

        id="lieuNaissance"
        label="lieu de naissance"
        required
        className={classes.textField}
        //value={hits.lieuNaissance ? hits.lieuNaissance: ''}
        // onChange={handleChange('lieu de naissance')}
        // margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
       
        />
       
    </Grid>
    <Grid item lg={3}>
    

    <TextField
          value={informationPersonnelle.sex}
          id="gender"
          select
          label="Gender"
          required
          helperText="Select  your gender"

          className={classes.textField}
          //value={hits.sex ? hits.sex : ''}
          // onChange={handleChange('Gender')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
        
          // margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
          variant="outlined"
        >
          {genders.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>

    <TextField 
        
        value={informationPersonnelle.adresse}

        id="address"
        label="Address"
        className={classes.textField}
        //value={hits.adresse ? hits.adresse : ''}
        // onChange={handleChange('address')}
        // margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
      ></TextField>


        <TextField 

        value={informationPersonnelle.activiteProf}

        id="occupation"
        label="Occupation"
        className={classes.textField}
        // onChange={handleChange('occupation')}
        // margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
    
        />
   
   

    </Grid>
    
    <Grid item lg={3}>
   
    <TextField
        
        value={informationPersonnelle.groupeSanguin}
 
        id="groupage"
        select
        label="groupage sanguin"
        helperText="Select  groupage Sanguin"
        className={classes.textField}
        //value={hits.groupeSanguin ? hits.groupeSanguin : ''}
        // onChange={handleChange('groupeSanguin')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
      
        // margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        >
          {groupageSanguin.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          }
      </TextField>
    </Grid>
    </Grid>
        </form>
      
  )
}



