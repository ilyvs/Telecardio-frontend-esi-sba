import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
      width:"85%",
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    marginBottom:theme.spacing(5)

  },
 
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  
}));

export default function AntecedentMedicoCherigicaux() {
  const classes = useStyles();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
    
  let Information = JSON.parse(localStorage.getItem('information'));

  const [values, setValues] = React.useState({
    medicaux : Information.antecedentMedicoCherigicaux ? Information.antecedentMedicoCherigicaux.medicaux : "",
    chirurgicaux : Information.antecedentMedicoCherigicaux ? Information.antecedentMedicoCherigicaux.chirurgicaux:"",
    allergique : Information.antecedentMedicoCherigicaux?Information.antecedentMedicoCherigicaux.allergique:"" ,
    familiaux : Information.antecedentMedicoCherigicaux ? Information.antecedentMedicoCherigicaux.familiaux:"" ,
    toxiques: Information.antecedentMedicoCherigicaux ? Information.antecedentMedicoCherigicaux.toxiques : "",
  
  });

  //console.log(Information)

  useEffect(() => {
    
    Information.antecedentMedicoCherigicaux!==null ? setValues(Information.antecedentMedicoCherigicaux) :  Information.antecedentMedicoCherigicaux =null  
    //console.log("this is use effect",values)
    

  },   []
  );

   
  const changeMedicaux = (event) => {
    setValues({
      medicaux : event.target.value,
      chirurgicaux :values.chirurgicaux,
      allergique : values.allergique ,
      familiaux:  values.familiaux,
      toxiques :  values.toxiques
    })
   
  }

  const changeChirurgicaux = (event) => {
    setValues({
      medicaux : values.medicaux,
      chirurgicaux :event.target.value,
      allergique : values.allergique ,
      familiaux:  values.familiaux,
      toxiques :  values.toxiques
    })
  
  }

  const changeAllergique = (event) => {
    setValues({
      medicaux : values.medicaux,
      chirurgicaux :values.chirurgicaux,
      allergique : event.target.value,
      familiaux:  values.familiaux,
      toxiques :  values.toxiques
    })
  
  }

  const changeFamiliaux = (event) => {
    setValues({
      medicaux : values.medicaux,
      chirurgicaux :values.chirurgicaux,
      allergique : values.allergique,
      familiaux:  event.target.value,
      toxiques :  values.toxiques
    })
    
  }
  const changeToxiques = (event) => {
    setValues({
      medicaux : values.medicaux,
      chirurgicaux :values.chirurgicaux,
      allergique : values.allergique,
      familiaux:  values.familiaux,
      toxiques :  event.target.value
    })
   
  }

  
  useEffect(() => {
    let antecedentMedicoCherigicaux = values;
    localStorage.setItem('information', JSON.stringify({...Information, antecedentMedicoCherigicaux}));
    

  },   [values]  );



 

 
  return (
    <div className={classes.root}>
     
      <div>
    
        <FormControl fullWidth className={classes.margin} variant="filled">
          <InputLabel htmlFor="Medicaux">Medicaux</InputLabel>
          <FilledInput 
              multiline = 'true' 
              rows = '3'
              
            id="Medicaux"
            value={values.medicaux}
            onChange = {handleChange('medicaux') , changeMedicaux}
            placeholder="ex: Diabète de type 2"

            //onChange={handleChange('medicaux')}
          />
        </FormControl>
      
      
     
       
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="Chirurgicaux">Chirurgicaux</InputLabel>
          <OutlinedInput

          multiline = 'true' 
          rows = '3'
            id="Chirurgicaux"
            value={values.chirurgicaux}
            placeholder="ex: Appendicectomie (2005)"

            onChange={handleChange('chirurgicaux'), changeChirurgicaux}
            labelWidth={60}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin} variant="filled">
          <InputLabel htmlFor="Allergique">Allergique</InputLabel>
          <FilledInput

          multiline = 'true' 
          rows = '3' 
            id="Allergique"
            value={values.allergique}
            placeholder="ex: Allergie à la pénicilline"

            onChange={handleChange('allergique'),changeAllergique}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="Familiaux">Familiaux</InputLabel>
          <OutlinedInput

            multiline = 'true' 
              rows = '3'

            id="Familiaux"
             
            value={values.familiaux}
            placeholder="ex: Père : Hypertension artérielle"

            onChange={handleChange('familiaux'), changeFamiliaux}
            labelWidth={60}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin} variant="filled">
          <InputLabel htmlFor="Toxiques">Toxiques</InputLabel>
          <FilledInput

          multiline = 'true' 
          rows = '3'
            id="Toxiques"
            value={values.toxiques}
            placeholder="Rien"

            onChange={handleChange('toxiques'), changeToxiques}
          />
        </FormControl>

        
        

        
      </div>
    </div>
  );
}
