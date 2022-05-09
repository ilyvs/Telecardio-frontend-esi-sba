import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop:"10%",
      marginLeft: '17%',
      width: '60%',
      pading:'auto'
    },
  },
}));
export default function InformationBiometrique() {
  const classes = useStyles();



  
  let Information = JSON.parse(localStorage.getItem('information'));

  const [values, setValues] = React.useState({

    id :Information.informationBiometrique ? Information.informationBiometrique.id: "",
    taille:Information.informationBiometrique ? Information.informationBiometrique.taille: "" ,
    poids: Information.informationBiometrique ? Information.informationBiometrique : ""
    
  });

  useEffect(() => {
    
    Information.informationBiometrique!==null ? setValues(Information.informationBiometrique) : Information.informationBiometrique =null  
    console.log("this is use effect",values)
    

  },   []  );


  const changeTaille = (event) => {
  
    setValues({
      taille : event.target.value,
      poids: values.poids,
      id:values.id

    })
  }

  
  const changePoids = (event) => {
 
    setValues({
      taille : values.taille,
      poids: event.target.value,
      id:values.id

    })
  
  }

  useEffect(() => {
    
    let informationBiometrique = values
    console.log('destract', {...Information, informationBiometrique  })

    localStorage.setItem('information', JSON.stringify({...Information, informationBiometrique}));
    

  },   [values]  );



  return (
    <form className={classes.root} noValidate autoComplete="off">

    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Informations Biometrique
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 

      label="Taille"

       id="outlined-multiline-flexible"
       variant="outlined"


        multiline
        maxRows={3}
         value={values.taille}
         onChange={changeTaille}
      
          required
          variant="outlined"

            width="40%"
             autoComplete="taille" 
            />
        </Grid>

        
        <Grid item xs={12} md={6}>
          <TextField
          label="Taille"

          id="outlined-multiline-flexible"
          variant="outlined"
          
          
          multiline
          maxRows={3}
          style={{with:"30%"}}
            value={values.poids}
            onChange={changePoids}

            required
            label="Poids"
            fullWidth
            autoComplete="poids"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
    </form>
  );
}