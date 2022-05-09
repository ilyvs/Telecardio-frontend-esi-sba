import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';



export default function PoulsThoraxPoumonsAbdominal() {
  let informationClinique = JSON.parse(localStorage.getItem('ExamenClinique'));
  let veine = informationClinique.veine;
  let pouls = informationClinique.pouls;
  let thorax = informationClinique.thorax;
  let poumons = informationClinique.poumons;
  let abdominal = informationClinique.abdominal; 



  const [vein, setVein] = React.useState({
      veinesPeripheriques : veine ? veine.veinesPeripheriques: "",
      veinesJugulaires : veine ? veine.veinesJugulaires: "",
       veinesDuCou : veine ? veine.veinesDuCou: "",
  });


  const [poul, setPoul] = React.useState({

    poulsPeripheriques : pouls ? pouls.poulsPeripheriques: "",
    poulsCarotidiens : pouls ? pouls.poulsCarotidiens: "",
});
const [thora, setThora] = React.useState({

  inspection : thorax ? thorax.inspection:"",
  palpation : thorax ? thorax.palpation:"",
});

  
const [poumon, setPoumon] = React.useState({
  percussion : poumons ? poumons.percussion:"",
  palpation : poumons ? poumons.palpation : "",
  auscultation : poumons ? poumons.auscultation : "",
});

  
const [abdomina, setAbdomina] = React.useState({

  abdominal : abdominal ? abdominal.abdominal : ""

});                                             


  useEffect(() => { 
    vein!==null ? setVein(veine) : vein =null  
     poul!==null ? setPoul( pouls) : poul =null  
     thora!==null ? setThora(thorax) : thora =null  
     poumon!==null ? setPoumon (poumons) : poumon =null  
     abdomina!==null ? setAbdomina( abdominal) : abdomina =null  




  },   []  );


  const changeVeine = (event) => {
  
    setVein({
      ...vein,
      [event.target.name] :event.target.value
    });
  };
  const changePoul = (event) => {
  
    setPoul({
       ...poul,
      [event.target.name] :event.target.value
    });
  };

  const changeThorax = (event) => {
  
  setThora({
      ...thora,
      [event.target.name] :event.target.value

    });
  };

  const changePoumon = (event) => {
  
   setPoumon({
      ...poumon,
      [event.target.name] :event.target.value

    });
    };

    const changeAbdominal = (event) => {
  
     setAbdomina({
      ...abdomina,
      [event.target.name] :event.target.value

    });
       };
  
    // setPoul({
    //   ...poul,
    //   [event.target.name] :event.target.value

    // });
    // setThora({
    //   ...thora,
    //   [event.target.name] :event.target.value

    // });
    // setPoumon({
    //   ...poumon,
    //   [event.target.name] :event.target.value

    // });
    // setAbdomina({
    //   ...abdomina,
    //   [event.target.name] :event.target.value

    // });
  
    
  useEffect(() => {
    
    let veine = vein;
    let pouls = poul;
    let poumons=poumon;
    let thorax = thora;
    let abdominal= abdomina;
    let ordonnance="";
    let orientation="";
    let evacuation="";
    let certificatMedical=""
    localStorage.setItem('ExamenClinique', JSON.stringify({...informationClinique ,veine, pouls,poumons,thorax,abdominal,
      ordonnance, orientation , evacuation,certificatMedical }));
  
  },   [vein,poul,poumon,thora,abdomina] );



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
            </Typography>

      <Grid container spacing={4}>


           <br/><br/>
        <Grid item xs={12} md={4}>

          <TextField 
          variant="outlined"

         value={vein.veinesPeripheriques}
         onChange={changeVeine}
         name = "veinesPeripheriques"
          required
           id="veinesPeripheriques" 
           label="veines peripheriques"
           fullWidth
            autoComplete="veines peripheriques" />

        </Grid>

        
        <Grid item xs={12} md={4}>
          <TextField
                    variant="outlined"

            value={vein.veinesJugulaires}
            onChange={changeVeine}
            required
            name= "veinesJugulaires"
            id="veinesJugulaires"
            label="veines jugulaires"
            fullWidth
            autoComplete="veines jugulaires"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
                    variant="outlined"

            value={vein.veinesDuCou}
            onChange={changeVeine}
            required
            name= "veinesDuCou"
            id="veinesDuCou"
            label="veines DuCou"
            fullWidth
            autoComplete="veines DuCou"
          />
        </Grid>

        
      </Grid>
      <br/><br/>   <br/>
      <hr/>

      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <TextField 
          variant="filled"
          style={{width:'80%',marginLeft:'10%',marginTop:'6%'}}

         value={poul.poulsPeripheriques}
         onChange={changePoul}
         name="poulsPeripheriques"

          required
           id="poulsPeripheriques" 
           label="pouls peripheriques"
            
            autoComplete="pouls peripheriques" />

        </Grid>

        
        <Grid item xs={12} md={6}>
          <TextField
                variant="filled"
                style={{width:'80%',marginRight:'10%',marginTop:'6%'}}


            value={poul.poulsCarotidiens}
            onChange={changePoul}
            name="poulsCarotidiens"
            required
            id="poulsCarotidiens"
            label="pouls carotidiens"
            
            autoComplete="pouls carotidiens"
          />
          </Grid>

           
      
      </Grid>
      <br/><br/>     
      <hr/>

      <Grid container spacing={6} >

<Grid item xs={12} md={6}>
<TextField
             style={{width:'80%',marginLeft:'10%',marginTop:'7%'}}

variant="outlined"

value={thora.inspection}
onChange={changeThorax}
name="inspection"
required
id="inspection"
label="inspection thorax"

autoComplete="inspection thorax"
/>
</Grid>         

<Grid item xs={12} md={6}>
<TextField
             style={{width:'80%',marginRight:'10%',marginTop:'7%'}}

   variant="outlined"

value={thora.palpation}
onChange={changeThorax}
name="palpation"
required
id="palpation"
label="palpation thorax"

autoComplete="palpation thorax"
/>
</Grid>
</Grid>

<br/><br/>
<hr/>
  
<Grid container spacing={4} >

<Grid item xs={12} md={4}>
<TextField
             style={{width:'90%',marginLeft:'5%',marginTop:'7%'}}

    variant="filled"

value={poumon.percussion}
onChange={changePoumon}
name="percussion"
required
id="percussion"
label="percussion poumons"

autoComplete="percussion poumons"
/>
</Grid>         

<Grid item xs={12} md={4}>
<TextField
             style={{width:'90%',marginLeft:'8%',marginTop:'7%'}}

variant="filled"
value={poumon.palpation}
onChange={changePoumon}
name="palpation"
required
id="palpation"
label="palpation poumons"

autoComplete="palpation poumons"
/>
</Grid>

<Grid item xs={12} md={4}>
<TextField
             style={{width:'90%',marginLeft:'10%',marginTop:'7%'}}

variant="filled"
value={poumon.auscultation}
onChange={changePoumon}
name="auscultation"
required
id="auscultation"
label="auscultation poumons"

autoComplete="auscultation poumons"
/>
</Grid>
</Grid>
<br/><br/>
<hr/>
<Grid container spacing={4} >
<Grid item xs={12} md={6}>
<TextField
   variant="outlined"
   style={{width:'80%',marginLeft:'55%',marginTop:'7%'}}

value={abdomina.abdominal}
onChange={changeAbdominal}
name="abdominal"
required
id="abdominal"
label="abdominal"

autoComplete="abdominal"
/>
</Grid>

</Grid>


    </React.Fragment>
  );
}