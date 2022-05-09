import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import { updatepatientQuery, getpatientinfoQuery, newpatientidQuery, addpatientQuery } from './Queries';

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



const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper * 1,
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  info: {
    marginLeft: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  menu: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
});
   
const EditPatientInfo = (props) => {
  const { classes } = props;
  const [hits, setHits] = useState([])



   useEffect(() => {
    let isSubscribed = true
    const neo4j_driver = props.neo4j
    const session = neo4j_driver.session()
    const objb = {search:{patientuuid: props.patient}}
    const parameters = objb
    props.addPatient ?
    session 
    //change query to get a new patient ID
    .run(newpatientidQuery, parameters)
    .then( recs =>  {
      if (isSubscribed) {
        const response = {recs}
        setHits(response.recs.records.map((item, i) => item._fields).map(([id]) => ({id}))[0])
        }
      }) 
    .catch( function (error) 
    { console.log(error) 
    session.close()}
    )    
    :
    session 
    .run(getpatientinfoQuery, parameters)
    .then (recs => {
      if (isSubscribed) {
        const response = {recs}
        setHits(response.recs.records.map((item, i) => item._fields).map(
          ([selectedpatient]) => ({selectedpatient})
        ).map((item, i) => item.selectedpatient.properties)[0])
      }
    })
    .catch(function (error) 
    {console.log(error); 
    session.close();})
    return () => isSubscribed = false 
    }, [props]) 

      const handleChange = (name) => event => {
        setHits({ ...hits, 
            [name]: event.target.value, 
        });    
      };

     

  function determinepatientid (props, hits) {
    if (props.addPatient && hits.id) return (
      hits.id+1
    )
    if (hits.id) return (
      hits.id
    )
    return ''
  }
  
  return (
    <>
    <form noValidate autoComplete="off">
    <Grid container>
      <Grid item lg={3}>
        <TextField 
        id="id"
        label="ID"
        className={classes.textField}
        //add 1 number to the last ID if the form is for a new patient
        value={determinepatientid(props, hits)} 
        margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        InputProps={{
          readOnly: true,
        }}
        />
        <TextField 
        id="nom"
        label="Nom"
        required
        className={classes.textField}
        value={hits.nom ? hits.nom: ''}
        onChange={handleChange('nom')}
        margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        InputProps={props.editClicked || props.addPatient ? {
          readOnly: false,
        }: {
          readOnly: true,
        }}
        />
        <TextField 
        id="outlined-name"
        label="Prénom"
        required
        className={classes.textField}
        value={hits.prenom ? hits.prenom : ''}
        onChange={handleChange('prénom')}
        margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        InputProps={props.editClicked || props.addPatient ? {
          readOnly: false,
        }: {
          readOnly: true,
        }}
        />
        <TextField 
        id="email"
        label="Email"
        required
        className={classes.textField}
        value={hits.email ? hits.email : ''}
        onChange={handleChange('email')}
        margin={props.editClicked  || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        InputProps={props.editClicked || props.addPatient ? {
          readOnly: false,
        }: {
          readOnly: true,
        }}
        />
     
    </Grid>
    <Grid item lg={3}>
        
        <TextField 
        id="nums"
        label="numéro de Securité Social"
        required
        className={classes.textField}
        value={hits.numeroSecuriteSocial? hits.numeroSecuriteSocial : ''}
        onChange={handleChange('numéro de Securité Social')}
        margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        InputProps={props.editClicked || props.addPatient ? {
          readOnly: false,
        }: {
          readOnly: true,
        }}
        />
    <TextField 
        id="numTelephone"
        label="numTelephone"
        required
        className={classes.textField}
        value={hits.numTelephone ? hits.numTelephone : ''}
        onChange={handleChange('numTelephone')}
        margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        helperText="example: 0792734147"
        InputProps={props.editClicked || props.addPatient ? {
          readOnly: false,
        }: {
          readOnly: true,
        }}
        />
      <TextField
          id="dateNaissance"
          label="Date de naissance"
        
          margin={props.dateNaissance || props.dateNaissance ? 'normal' : 'dense'}
          type='date'
          variant="outlined"
          required
          className={classes.textField}
          InputLabelProps={{
          shrink: true,
          }}
          InputProps={props.editClicked || props.addPatient ? {
            readOnly: false,
          }: {
            readOnly: true,
          }}
          onChange={handleChange('Date de naissance')}
          />

          <TextField 
        id="lieuNaissance"
        label="lieu de naissance"
        required
        className={classes.textField}
        value={hits.lieuNaissance ? hits.lieuNaissance: ''}
        onChange={handleChange('lieu de naissance')}
        margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        InputProps={props.editClicked || props.addPatient ? {
          readOnly: false,
        }: {
          readOnly: true,
        }}
        />
       
    </Grid>
    <Grid item lg={3}>
    

    <TextField
          id="gender"
          select
          label="Gender"
          required
          helperText="Select  your gender"

          className={classes.textField}
          value={hits.sex ? hits.sex : ''}
          onChange={handleChange('Gender')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          InputProps={props.editClicked || props.addPatient ? {
            readOnly: false,
          }: {
            readOnly: true,
          }}
          margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
          variant="outlined"
        >
          {genders.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>

    <TextField 
        id="address"
        label="Address"
        className={classes.textField}
        value={hits.adresse ? hits.adresse : ''}
        onChange={handleChange('address')}
        margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        InputProps={props.editClicked || props.addPatient ? {
          readOnly: false,
        }: {
          readOnly: true,
        }}
        />
        <TextField 
        id="occupation"
        label="Occupation"
        className={classes.textField}
        value={hits.activiteProf ? hits.activiteProf : ''}
        onChange={handleChange('occupation')}
        margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
        variant="outlined"
        InputProps={props.editClicked || props.addPatient ? {
          readOnly: false,
        }: {
          readOnly: true,
        }}
        />
   
   

    </Grid>
    
    <Grid item lg={3}>
   
    <TextField 
        id="groupage"
        select
        label="groupage sanguin"
        helperText="Select  groupage Sanguin"
        className={classes.textField}
        value={hits.groupeSanguin ? hits.groupeSanguin : ''}
        onChange={handleChange('groupeSanguin')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        InputProps={props.editClicked || props.addPatient ? {
          readOnly: false,
        }: {
          readOnly: true,
        }}
        margin={props.editClicked || props.addPatient ? 'normal' : 'dense'}
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
      <>
        { props.editClicked  ? 
          <>
          <Button color='primary' variant="contained" 
            onClick={() => {(updatepatientQuery(props, hits)); (props.onSave(false))}}>
            <SaveIcon style={{marginLeft: '-2px', marginRight: '3px'}}/>
            Save
          </Button> </> : null

        }
        {props.addPatient ?
        <>
        <Button color='primary' variant="contained" 
        onClick={() => {(addpatientQuery(props, hits)); (props.onSave(false))}}>
        <SaveIcon style={{marginLeft: '-2px', marginRight: '3px'}}/>
        Save
        </Button> </> : null
        }
        &nbsp;
        { props.editClicked || props.addPatient ? <Button style={{color: 'grey'}} color='inherit' variant="outlined" onClick={() => (props.onSave(false))}><CancelIcon style={{marginLeft: '-2px', marginRight: '3px'}}/>Cancel</Button> : null}
      </>
    </>
  )
}

const mapStatetoProps = (state) => {
 return {
    drawer: state.drawer,
    neo4j: state.dbserver,
    patient: state.patient
  }
}

export default connect (mapStatetoProps)(withStyles(styles) (EditPatientInfo))