import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: 'auto',
      pading:'auto'
    },
  },
}));

export default function SigneVitauxVeine() {
  const classes = useStyles();

  let informationClinique = JSON.parse(localStorage.getItem('ExamenClinique'));

  const [values, setValues] = React.useState({

    pressionArterielle :informationClinique.signeVitaux ? informationClinique.signeVitaux.pressionArterielle: "",
    frequenceEtRythmeCardiaques :informationClinique.signeVitaux ? informationClinique.signeVitaux.frequenceEtRythmeCardiaques: "" ,
    frequenceRespiratoire: informationClinique.signeVitaux ? informationClinique.signeVitaux.frequenceRespiratoire : "",
    temperature: informationClinique.signeVitaux ? informationClinique.signeVitaux.temperature : "",
    spO2: informationClinique.signeVitaux ? informationClinique.signeVitaux.spO2 : "",

  });

  useEffect(() => {
    
    informationClinique.signeVitaux!==null ? setValues(informationClinique.signeVitaux) : informationClinique.signeVitaux =null  
    console.log("this is use effect",values)
    

  },   []  );


  const changeValues = (event) => {
  
    setValues({

      ...values,
      [event.target.name] :event.target.value


    });
  }
    
  useEffect(() => {
    
    let signeVitaux = values
    console.log('destract signeVitaux ', {...informationClinique , signeVitaux  })

    localStorage.setItem('ExamenClinique', JSON.stringify({...informationClinique , signeVitaux}));
    

  },   [values]  );



  return (
    <form className={classes.root} noValidate autoComplete="off">

    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      les Signes sitaux et Veines
            </Typography>
            <br/><br/>

      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <TextField 
          
          variant="outlined"

         value={values.pressionArterielle}
         onChange={changeValues}
         name = "pressionArterielle"
          required
           id="pressionArterielle" 
           label="Pression arterielle"
           fullWidth
            autoComplete="Pression arterielle" />

        </Grid>

        
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"

            value={values.frequenceEtRythmeCardiaques}
            onChange={changeValues}
            required
            name= "frequenceEtRythmeCardiaques"
            id="frequenceEtRythmeCardiaques"
            label="Frequence Et Rythme Cardiaques"
            fullWidth
            autoComplete="Frequence Et rythme Cardiaques"
          />
        </Grid>

        
      </Grid>
      <br/><br/>   <br/>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <TextField 
                    variant="outlined"

         value={values.frequenceRespiratoire}
         onChange={changeValues}
         name="frequenceRespiratoire"

          required
           id="frequenceRespiratoire" 
           label="frequenceRespiratoire"
            
            autoComplete="frequenceRespiratoire" />

        </Grid>

        
        <Grid item xs={12} md={4}>
          <TextField
                    variant="outlined"

            value={values.temperature}
            onChange={changeValues}
            name="temperature"
            required
            id="temperature"
            label="temperature"
            
            autoComplete="temperature"
          />
          </Grid>


        <Grid item xs={12} md={4}>

          <TextField
                    variant="outlined"

           value={values.spO2}
            onChange={changeValues}
            name="spO2"
            required
            id="spO2"
            label="spO2"
           
            autoComplete="spO2"
            />
           </Grid>
        
      </Grid>
      <br/><br/>     <br/><br/>

    </React.Fragment>
    </form>
  );
}