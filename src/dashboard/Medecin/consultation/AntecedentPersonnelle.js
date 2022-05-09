import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


const tab = [
  {
    value: 'true',
    label: 'oui',
  },
  {
    value: 'false',
    label: 'non',
  },

];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(15),
    
    minWidth: 300,
  },
}));

export default function AntecedentPersonnelle() {
  const classes = useStyles();

  let Information = JSON.parse(localStorage.getItem('information'));
  //let antecedentPersonnelle = JSON.parse(localStorage.getItem('AntecedentPer'));

  const [values, setValues] = React.useState({
    fumer : Information.antecedentPersonnelle?Information.antecedentPersonnelle.fumer:"",
    nbrCigarettes : Information.antecedentPersonnelle ? Information.antecedentPersonnelle.nbrCigarettes:"",
    chique : Information.antecedentPersonnelle?Information.antecedentPersonnelle.chique:"" ,
    nbrBoitesChique : Information.antecedentPersonnelle ? Information.antecedentPersonnelle.nbrBoitesChique:"" ,
    alcool: Information.antecedentPersonnelle ? Information.antecedentPersonnelle.alcool : "",
    medicaments :  Information.antecedentPersonnelle ?Information.antecedentPersonnelle.medicaments : ""
    
  });

  //console.log(Information)

  useEffect(() => {
    
    Information.antecedentPersonnelle!==null ? setValues(Information.antecedentPersonnelle) :  Information.antecedentPersonnelle =null  
    //console.log("this is use effect",values)
    

  },   []
  );

  const changeFumer = (event) => {
   
    setValues({
      fumer : event.target.value,
      nbrCigarettes :values.nbrCigarettes,
      chique : values.chique ,
      nbrBoitesChique : values.nbrBoitesChique ,
      alcool:  values.alcool,
      medicaments :  values.medicaments
    })
    
    // let antecedentPersonnelle = values;
   
    // localStorage.setItem('information', JSON.stringify({...Information, antecedentPersonnelle}));

  
  }

  const changeNbrCig = (event) => {
   
    setValues({
      fumer : values.fumer,
      nbrCigarettes :event.target.value,
      chique : values.chique ,
      nbrBoitesChique : values.nbrBoitesChique ,
      alcool:  values.alcool,
      medicaments :  values.medicaments
    })
    
    // let antecedentPersonnelle = values;
    // // console.log('destract AntecedentPersonnelle', {...Information, AntecedentPersonnelle  });
    // // console.log("this is test AntecedentPersonnelle",AntecedentPersonnelle)
    // localStorage.setItem('information', JSON.stringify({...Information, antecedentPersonnelle}));

  
  }

  
  const changeChic = (event) => {
   
    setValues({
      fumer : values.fumer,
      nbrCigarettes :values.nbrCigarettes,
      chique : event.target.value ,
      nbrBoitesChique : values.nbrBoitesChique ,
      alcool:  values.alcool,
      medicaments :  values.medicaments
    })
    
    // let antecedentPersonnelle = values;
    // // console.log('destract AntecedentPersonnelle', {...Information, AntecedentPersonnelle  });
    // // console.log("this is test AntecedentPersonnelle",AntecedentPersonnelle)
    // localStorage.setItem('information', JSON.stringify({...Information, antecedentPersonnelle}));
  }

  const changeNbrChic = (event) => {
   
    setValues({
      fumer : values.fumer,
      nbrCigarettes :values.nbrCigarettes,
      chique :values.chique ,
      nbrBoitesChique : event.target.value ,
      alcool:  values.alcool,
      medicaments :  values.medicaments
    })
    
    // let antecedentPersonnelle = values;
    // // console.log('destract AntecedentPersonnelle', {...Information, AntecedentPersonnelle  });
    // // console.log("this is test AntecedentPersonnelle",AntecedentPersonnelle)
    // localStorage.setItem('information', JSON.stringify({...Information, antecedentPersonnelle}));

  
  }


  const changeAlcool = (event) => {
   
    setValues({
      fumer : values.fumer,
      nbrCigarettes :values.nbrCigarettes,
      chique :values.chique ,
      nbrBoitesChique : values.nbrBoitesChique ,
      alcool: event.target.value,
      medicaments :  values.medicaments
    })
    
    // let antecedentPersonnelle = values;

    // localStorage.setItem('information', JSON.stringify({...Information, antecedentPersonnelle}));
  
  }

  
  const changeMedc = (event) => {
   
    setValues({
      fumer : values.fumer,
      nbrCigarettes :values.nbrCigarettes,
      chique :values.chique ,
      nbrBoitesChique : values.nbrBoitesChique ,
      alcool: values.alcool,
      medicaments : event.target.value
    })
    
    // let antecedentPersonnelle = values;

    // localStorage.setItem('information', JSON.stringify({...Information, antecedentPersonnelle}));
  
  }

  useEffect(() => {
    
    let antecedentPersonnelle = values;

    localStorage.setItem('information', JSON.stringify({...Information, antecedentPersonnelle}));
    

  },   [values]  );

  return (
    <form className={classes.root} noValidate autoComplete="off">

    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Antecedent Personnelle
      </Typography>
       

      <Grid >
      <TextField
      select
      id="outlined-select-currency-native"

      variant="outlined"

        

      className={classes.formControl}
          id="Fumer"
          select
          label="fumer"
          helperText='tu fumes ?'
          required

          value={values.fumer}
          onChange={changeFumer}

         
         
          
        >

          {tab.map(option => (
           <MenuItem key={option.value} value={option.value}>
           {option.label}
         </MenuItem>
          ))}
          
    </TextField>  

        
    <TextField 
    id=""

    variant="outlined"
    value={values.nbrCigarettes}
    onChange={changeNbrCig}
    className={classes.formControl}
    
    required id="numsegarette" 
    label="nombre de Cigarettes" />

    </Grid>

   
   
        
<Grid >
      <TextField
      variant="filled"


      value={values.chique}
      onChange={changeChic}

      className={classes.formControl}
          id="chique"
          select
          label="chique"
          helperText='est-que vous prendre Mâcher du tabac?'
          required

          SelectProps={{
            
          }}
          
        >
          {tab.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>


    <TextField 
              variant="filled"


value={values.nbrBoitesChique}
onChange={changeNbrChic}

    className={classes.formControl}
    required id="chique" 
    label="nombre de tabac" />
    
  
    </Grid>

    <Grid>
      <TextField
          variant="outlined"

      value={values.alcool}
      onChange={changeAlcool}

      className={classes.formControl}
          id="alcol"
          select
          label="alcol"
          helperText=' es-tu alcoolique  ?'
          required

          SelectProps={{
            
          }}
          
        >
          {tab.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>

     
    <TextField
        variant="outlined"

    className={classes.formControl}
    value={values.medicaments}
    onChange={changeMedc}

          id="medicaments"
          
          label="medicaments"
          helperText=' Prenez-vous des médicaments ? '
          required
          
        >
    </TextField>
    </Grid>
    
    </React.Fragment>
    </form>
  );
}