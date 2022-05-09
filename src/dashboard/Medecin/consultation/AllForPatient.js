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
import { Link } from 'react-router-dom';


import Ordonnance from '../dashboard/Ordonnance'
import Certificat from '../dashboard/Certificat';
import Orrientation from '../dashboard/Orrientation';
import Evacuation from '../dashboard/Evacuation';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
      marginTop:'8%',
    margin: "auto",
    borderRadius:"7%",

     maxWidth: 500,
     height:500,
    flexGrow: 1,

  },
  media: {
    marginRight:20,
    height: 400,
  },
  paper: {
    height: 250,
    width: 250,
  },
  control: {
    //padding: theme.spacing(2),
  },
});







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
container spacing={8}>

                     
      
    
        <Grid item xs={12} md={6}>
        <Link to={{
        pathname: './dossier_médical'
    }}> 
        <Card className={classes.root} >
     
      <CardActionArea>
    
        <CardMedia
          className={classes.media}
          image="/images/cards/dossier.jpg"
          title="Dossier médical"
          onClick={handleClickOpen}
          // component = "../dashboard/Ordonnance"
          
        />
{/* 
<Dialog     
  fullScreen={fullScreen}
  aria-labelledby="responsive-dialog-title"
    onClose={handleClose} 
     open={openOrd}>
        {/* <DialogTitle id="responsive-dialog-title" onClose={handleClose}>
        Dossier médical
        </DialogTitle>
        <DialogContent  id="responsive-dialog-content" >
          
         <Ordonnance/> 
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog> */} 

             
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
   
            
          Dossier médical
          
         
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            créer ou modifier le dossier médical de votre patient 
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Link>
   

    </Grid>            
   


        <Grid item xs={12} md={6}>
        <Link to={{
        pathname: './examen_clinique'
    }}> 
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        onClick={handleClickOpenCer}

          className={classes.media}
          image="/images/cards/examen.jpg"
          title="Examen clinique"
        />

{/* <Dialog     
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
      </Dialog> */}

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Examen clinique
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            faire un examen clinique pour votre patient 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Créer 
        </Button>
        <Button size="small" color="primary">
          Modifier
        </Button>
      </CardActions>
      
    </Card>
    </Link>

        </Grid>

      </Grid>

<br/>
          
<Grid container spacing={8}>


<         Grid item xs={12} md={6}>
          
<Link to={{
        pathname: './paramètres_vitaux'
    }}> 
          <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/images/cards/ecg.jfif"
            title="Observation des paramètres vitaux"
            onClick={handleClickOpenOrr}

          />

          
{/* <Dialog     
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
      </Dialog> */}


          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Observation des paramètres vitaux
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Observer  les paramètres vitaux (l'ECG, Pression artérielle et la temperature)
            </Typography>
          </CardContent>
        </CardActionArea>
        
        
      </Card>

      </Link>
  
  
          </Grid>
  

        <Grid item xs={12} md={6}>
        <Link to={{
        pathname: './documents_médicaux'
    }}> 
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
           image="/images/cards/doc.jfif"     
          title="Documents médicaux"
          onClick={handleClickOpenEva}

        />

        
          
{/* <Dialog     
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
      </Dialog> */}


        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Documents médicaux
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            créer un document médical (Ordonnance, certificat médical, Orrientation et evacuation) pour votre patient 
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
</Link>
        </Grid>
         
      </Grid>

     

    </div>

    




    
  
  );
}
