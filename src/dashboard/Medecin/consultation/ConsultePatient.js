import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import consultation from '../../images/patient/consultation.jpeg'
import background from '../../images/patient/background.jpg'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
      width:"85%",
    display: 'flex',
    flexWrap: 'wrap',
    // backgroundImage: {background}
  },
  margin: {
    marginLeft: theme.spacing(35),
    marginRight: theme.spacing(5),
    marginTop:theme.spacing(8)

  },
 
  withoutLabel: {
    marginTop: theme.spacing(1),
  },

  consultCard : {
    margin: 'auto',
    width: '60%'
  }
  
}));

export default function ConsultePatient() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    numeroSecuriteSocial: '',
    
  });

  // const handleChange = (event) => {
  //   event.preventDefault()
  //   setValues({values : event.target.value });
  //   // console.log(values.numeroSecuriteSocial)
  // };


  let numeroSecuriteSocial = '';
  
  const nssChange = (event) => {
    numeroSecuriteSocial = event.target.value;
    console.log(numeroSecuriteSocial)
  }

  const onClickResult = () => {

    console.log('this is the final nss:', numeroSecuriteSocial);
    const config = {
      Headers :{
        ContentType:'application/json',
        Authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpc3NhbWxvdXNyYSIsImlhdCI6MTYzMTE5NTUyOCwiZXhwIjoxNjMxMjgxOTI4fQ.878IRcc7yCb1yNwKQGsv92GSsKfX35inWfK9jpfHkdoR-ZzFj4PXwP820OEC1JWFHP8NbZ2oz6U9TKAMRcJlbQ ',
        'Access-Controll-Allow-Origin':'*'
      }
    }
    axios.get('http://localhost:8090/dossier-medical-service/afficher-dossier-medical/?numeroSecuriteSocial='+numeroSecuriteSocial ,config)
   
      .then((response) => {
        console.log(response)
        localStorage.setItem('information', JSON.stringify(response.data));



        const newInfo = localStorage.getItem('informationPer');
        console.log({
          myInfo: newInfo
        })
      })
      .catch((err)=> {
        console.log({error: err})
      })

      axios.get('http://localhost:8090/examen-clinique-service/afficher-examen-medical?numeroSecuriteSocial='+numeroSecuriteSocial,config)
   
      .then((response) => {
        console.log(response)
        localStorage.setItem('ExamenClinique', JSON.stringify(response.data));


      })
      .catch((err)=> {
        console.log({error: err})
      })
  }
 
  return (
    // <div className={classes.root}>
     
    //   <div>
      

     
    
    //     <div className={classes.consultCard}>
    //       <div className='consultCard_img'>
    //         <img src={consultation} alt='imageCard consult' />
    //       </div>
    //       <div className='consultCard_input_field'> 
    //         <FormControl fullWidth className={classes.margin} variant="filled">
    //         <InputLabel htmlFor="numeroSecuriteSocial">numéro de Securité Social</InputLabel>
    //         <FilledInput 
    //             multiline = 'true' 
    //             rows = '2'
                
    //           id="numeroSecuriteSocial"
    //           // value={nss}
    //           placeholder="ex: 2921557446982"
    //           name ='nss'

    //           onChange={nssChange}
              
    //         />
    //       </FormControl>
    //       <br/><br/><br/><br/>
    //       <div align-ce >

    //       <Button style={{marginLeft:'90%'}} variant="contained" color="primary" 
    //         onClick={onClickResult} >
    //         Consulte
    //       </Button>
    //       </div>
    //     </div>

    //     </div>
       
    //    </div>
  
  

    <div className="bg-image" style={{ backgroundImage: `url(${background})` ,height:"100%"}} >
      <div >
       <div className="container"  >
        <div className="card-deck mb-3 text-center"  style={{ width:"50%",height:"40%", marginTop:"12%", marginLeft:"13%", position: "absolute"}}>
          <div  >
            <div className="card mb-4 box-shadow"  >
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal"> Connaitre votre Patient </h4>
                </div>


                <div className="card-body d-flex flex-column">
                    <p className="card-text" > Saisir le numéro de Securité Social de votre </p>

                    {/* <input style={{margin:'auto'}} type="text" name="1Input" className="mt-auto" id="cell1Input"/> */}
                    <div class="input-group">
  
                 <textarea style={{maxWidth:'50%',margin:'auto'}}
                  class="form-control"
                   aria-label="numéro de securité social"
                   id="numeroSecuriteSocial"
                   // value={nss}
                   placeholder="ex: 2921557446982"
                   name ='nss'
     
                   onChange={nssChange}
                   
                   >

                   </textarea>
                  </div>
                    <br/><br/> <br/>
            


                    <Link to={{
        pathname: './mon_patient'
    }}>             
    <input style={{margin:'auto'}} type="button" className="btn mt-auto btn-primary" name="1Button" value="Consulter"
                        id="cell1Button"
                        onClick={onClickResult}
                        ></input>         
        
    </Link>
                    
                </div>
                </div>
            </div>
            </div>
            </div>
    </div>
    </div>
  )
}
