import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';



const ouinon = [
  {
    value: true,
    label: 'Oui',
  },
  {
    value: false,
    label: 'Non',
  },
  
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      marginLeft:theme.spacing(20),
      marginRight:theme.spacing(20),
      width: '30ch',
    },

    
     
  },
}));



export default function SigneCardiaque() {
  const classes = useStyles();

  let Information = JSON.parse(localStorage.getItem('information'));

  const [values, setValues] = React.useState({
    geneThoracique : Information.signeCardiaque ? Information.signeCardiaque.geneThoracique : "",
    dyspnée : Information.signeCardiaque ? Information.signeCardiaque.dyspnée:"",
    asthenie : Information.signeCardiaque?Information.signeCardiaque.asthenie:"" ,
    fatigue : Information.signeCardiaque ? Information.signeCardiaque.fatigue:"" ,
    palpitations: Information.signeCardiaque ? Information.signeCardiaque.palpitations : "",
    lipothymies: Information.signeCardiaque ? Information.signeCardiaque.lipothymies : "",
    evanouissement: Information.signeCardiaque ? Information.signeCardiaque.evanouissement : "",
    syncopeOedemes: Information.signeCardiaque ? Information.signeCardiaque.syncopeOedemes : "",

  
  });

  useEffect(() => {
    
    Information.signeCardiaque!==null ? setValues(Information.signeCardiaque) :  Information.signeCardiaque =null  
    

  },   []
  );
   
  const changeGeneThoracique = (event) => {
    setValues({
      geneThoracique : event.target.value,
      dyspnée :values.dyspnée,
      asthenie : values.asthenie ,
      fatigue:  values.fatigue,
      palpitations :  values.palpitations,
      lipothymies :  values.lipothymies,
      evanouissement :  values.evanouissement,
      syncopeOedemes :  values.syncopeOedemes

    })
  
  }

  const changeDyspnée = (event) => {
    setValues({
      geneThoracique : values.geneThoracique,
      dyspnée : event.target.value,
      asthenie : values.asthenie ,
      fatigue:  values.fatigue,
      palpitations :  values.palpitations,
      lipothymies :  values.lipothymies,
      evanouissement :  values.evanouissement,
      syncopeOedemes :  values.syncopeOedemes

    })
   
  }

  const changeAsthenie = (event) => {
    setValues({
      geneThoracique : values.geneThoracique,
      dyspnée : values.dyspnée,
      asthenie : event.target.value ,
      fatigue:  values.fatigue,
      palpitations :  values.palpitations,
      lipothymies :  values.lipothymies,
      evanouissement :  values.evanouissement,
      syncopeOedemes :  values.syncopeOedemes

    })

  }
  
  const changeFatigue = (event) => {
    setValues({
      geneThoracique : values.geneThoracique,
      dyspnée : values.dyspnée,
      asthenie : values.asthenie,
      fatigue:   event.target.value,
      palpitations :  values.palpitations,
      lipothymies :  values.lipothymies,
      evanouissement :  values.evanouissement,
      syncopeOedemes :  values.syncopeOedemes

    })

  }

  

  
  const changePalpitations = (event) => {
    setValues({
      geneThoracique : values.geneThoracique,
      dyspnée : values.dyspnée,
      asthenie : values.asthenie,
      fatigue: values.fatigue,
      palpitations :  event.target.value,
      lipothymies :  values.lipothymies,
      evanouissement :  values.evanouissement,
      syncopeOedemes :  values.syncopeOedemes

    })
    
  }
  const changeLipothymies = (event) => {
    setValues({
      geneThoracique : values.geneThoracique,
      dyspnée : values.dyspnée,
      asthenie : values.asthenie,
      fatigue: values.fatigue,
      palpitations : values.palpitations ,
      lipothymies :  event.target.value,
      evanouissement :  values.evanouissement,
      syncopeOedemes :  values.syncopeOedemes

    })
  
  }

  const changeEvanouissement = (event) => {
    setValues({
      geneThoracique : values.geneThoracique,
      dyspnée : values.dyspnée,
      asthenie : values.asthenie,
      fatigue: values.fatigue,
      palpitations : values.palpitations ,
      lipothymies : values.lipothymies ,
      evanouissement :  event.target.value,
      syncopeOedemes :  values.syncopeOedemes

    })
   
  }

  const changeS = (event) => {
    setValues({
      geneThoracique : values.geneThoracique,
      dyspnée : values.dyspnée,
      asthenie : values.asthenie,
      fatigue: values.fatigue,
      palpitations : values.palpitations ,
      lipothymies : values.lipothymies ,
      evanouissement : values.evanouissement ,
      syncopeOedemes :  event.target.value

    })
   
  }
  
  useEffect(() => {
    
    let signeCardiaque = values;
    localStorage.setItem('information', JSON.stringify({...Information, signeCardiaque}));
    

  },   [values]  );
 

  const creerDossier =() =>  {

    let Information = JSON.parse(localStorage.getItem('information'));
    let informationBiometrique = {...Information.informationBiometrique} ;
    const informationBiometrique1 = { informationBiometrique };

    console.log("this is BIO", informationBiometrique1)
    // //let  antPer=Information.antecedentPersonnelle;

    // let info = Information.JSON.stringify({...Information, bio})
    let id = Information.id
    console.log(id)
    console.log('dossier final',Information)

    const config = {
      headers :{
        ContentType:'application/json',
        'Access-Controll-Allow-Origin':'*'
      }
    }
    axios.put('http://localhost:8081/modifier-dossier-medical/'+id ,Information,config)
   
      .then((response) => {
        console.log(response)
        

      })
      .catch((err)=> {
        console.log({error: err})
      })

      //localStorage.clear();


  }

    



  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField 
                variant="outlined"


          id="geneThoracique"
          select
          label="gêne Thoracique"
          onChange={changeGeneThoracique}
          value={values.geneThoracique}


         
        
          helperText="répondez svp"
        >
          {ouinon.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
                  variant="outlined"

          id="dyspnée"
          select
          label="Dyspnée"
          value={values.dyspnée}
           onChange={changeDyspnée}
          helperText="répondez svp "
        >
          {ouinon.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>


      <div>
      <TextField
          id=""
          select
          label="asthénie"
          value={values.asthenie}
          onChange={changeAsthenie}
        
          helperText="répondez svp "
          variant="filled"
        >
          {ouinon.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>


        <TextField
          id="fatigue"
          select
          label="Fatigue"
          value={values.fatigue}
          onChange={changeFatigue}
         
          helperText="répondez svp "
          variant="filled"
        >
          {ouinon.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>


      <TextField
          id="palpitations"
          select
          label="palpitations"
          value={values.palpitations}
          onChange={changePalpitations}
         
          helperText="répondez svp "
          variant="outlined"
        >
          {ouinon.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>


        <TextField
          id=""
          select
          label="lipothymies"
          value={values.lipothymies}
          onChange={changeLipothymies}
          
          helperText="répondez svp "
          variant="outlined"
        >
          {ouinon.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <div>

        <TextField
          id="évanouissement"
          select
          label="évanouissement"
          value={values.evanouissement}
          onChange={changeEvanouissement}
          
          helperText="répondez svp "
          variant="filled"
        >
          {ouinon.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="syncopeOedemes"
          select
          label="syncope Oedèmes"
          value={values.syncopeOedemes}
          onChange={changeS}
          
          helperText="répondez svp "
          variant="filled"
        >
          {ouinon.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>


        <Button style={{marginLeft:'38%'}} variant="contained" color="primary" onClick={creerDossier} 
        
        >Save dossier </Button>

        </div>
      </div>
    </form>
  );
}
