import React from 'react';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Ordonnanc from '../../images/ordonnance.PNG';
import cer from '../../images/certaficat.PNG';

import Orr from '../../images/orrientation.PNG';
import eva from '../../images/evacuation.PNG';






import Ordonnance from '../dashboard/Ordonnance'
import Certificat from '../dashboard/Certificat';
import Orrientation from '../dashboard/Orrientation';
import Evacuation from '../dashboard/Evacuation';

import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    margin: "auto",

    maxWidth: 345,
    flexGrow: 1,

  },
  media: {
    marginRight:20,
    height: 140,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    //padding: theme.spacing(2),
  },
});




const creerExamenClinique =() =>  {

  let examenClinique = JSON.parse(localStorage.getItem('ExamenClinique'));
  let id = examenClinique.id;
  console.log("examen clinique test",examenClinique);
 
  const config = {
    headers :{
      ContentType:'application/json',
      'Access-Controll-Allow-Origin':'*'
    }
  }
  axios.put('http://localhost:8082/modifier-examen-medical/'+id ,examenClinique,config)
 
    .then((response) => {
      console.log(response)
      

    })
    .catch((err)=> {
      console.log({error: err})
    })

    //localStorage.clear();


}



export default function MediaCard() {
  const classes = useStyles();

  const [openOrd, setOpenOrd] = React.useState(false);
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const handleClickOpen = () => {
    setOpenOrd(true);
  };
  const handleClose = () => {
    setOpenOrd(false);
  };

  const [opencer, setOpencer] = React.useState(false);
  const handleClickOpenCer = () => {
    setOpencer(true);
  };
  const handleCloseCer = () => {
    setOpencer(false);
  };

  const [openOrr, setOpenOrr] = React.useState(false);
  const handleClickOpenOrr = () => {
    setOpenOrr(true);
  };
  const handleCloseOrr = () => {
    setOpenOrr(false);
  };

  const [openEva, setOpenEva] = React.useState(false);
  const handleClickOpenEva = () => {
    setOpenEva(true);
  };
  const handleCloseEva = () => {
    setOpenEva(false);
  };


  return (
    <div>

<Grid  
container spacing={10}>
        <Grid item xs={12} md={6}>
         
        <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Ordonnanc}
          title="Ordonnance"
          onClick={handleClickOpen}
          // component = "../dashboard/Ordonnance"
          
        />

<Dialog     
  fullScreen={fullScreen}
  aria-labelledby="responsive-dialog-title"
    onClose={handleClose} 
     open={openOrd}>
        <DialogTitle id="responsive-dialog-title" onClose={handleClose}>
          Ordonnance
        </DialogTitle>
        <DialogContent  id="responsive-dialog-content" >
          
         <Ordonnance/> 
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

             
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Ordonnance
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            créer ou modifier une ordonnance à un patient 
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card>

    </Grid>                 

        <Grid item xs={12} md={6}>
          
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        onClick={handleClickOpenCer}

          className={classes.media}
          image={cer}
          title="certificat Médical"
        />

<Dialog     
  fullScreen={fullScreen}
  aria-labelledby="responsive-dialog-title"
    onClose={handleCloseCer} 
     open={opencer}>
        <DialogTitle id="responsive-dialog-title" onClose={handleCloseCer}>
          Certificat médical
        </DialogTitle>
        <DialogContent  id="responsive-dialog-content" >
          
         <Certificat/> 
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseCer} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          certificat Médical
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            créer  une certificat Médical pour un patient 
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>

        </Grid>

      </Grid>

<br/><br/><br/>
          
<Grid container spacing={10}>
       
<Grid item xs={12} md={6}>
          
          
          <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Orr}
            title="orrientation"
            onClick={handleClickOpenOrr}

          />

          
<Dialog     
  fullScreen={fullScreen}
  aria-labelledby="responsive-dialog-title"
    onClose={handleCloseOrr} 
     open={openOrr}>
        <DialogTitle id="responsive-dialog-title" onClose={handleCloseOrr}>
        orrientation
        </DialogTitle>
        <DialogContent  id="responsive-dialog-content" >
          
         <Orrientation/> 
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseOrr} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>


          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Orientation
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Orrinter le patient ver une clinique ou un labo .. 
            </Typography>
          </CardContent>
        </CardActionArea>
      
      </Card>
  
  
          </Grid>
  

        <Grid item xs={12} md={6}>
         
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
           image={eva} 
          title="Evacuation"
          onClick={handleClickOpenEva}

        />

        
          
<Dialog     
  fullScreen={fullScreen}
  aria-labelledby="responsive-dialog-title"
    onClose={handleCloseEva} 
     open={openEva}>
        <DialogTitle id="responsive-dialog-title" onClose={handleCloseEva}>
        Evacuation
        </DialogTitle>
        <DialogContent  id="responsive-dialog-content" >
          
         <Evacuation/> 
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseEva} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Evacuation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            créer une demande d'evacuation pour un patient 
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>

        </Grid>
         
      </Grid>

      <Button style={{marginTop:"5%", marginLeft:'40%'}} variant="contained" color="primary" onClick={creerExamenClinique} 
        
        >Save dossier </Button>

    </div>

    




    
  
  );
}
