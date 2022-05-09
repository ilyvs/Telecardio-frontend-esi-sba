import React from 'react';
import patients from '../../images/patient/patients.jpg'
import consultation from '../../images/patient/consultation.jpeg'
import Chart from 'react-google-charts'
import axios from 'axios'
import { PieChart } from 'react-minimal-pie-chart';
import { ThreeSixtyOutlined } from '@material-ui/icons';
import ConsultePatient from '../consultation/ConsultePatient';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import RdvStatistic from './RdvStatistic';




class Medecin_dashboard extends React.Component {

    styles = {
        'Medecin_dashboard':{
            height:'100vh',
            overflow: 'scroll',
        },
        'consultation_visualisation': {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '50px'
        },
        'consultaion_card':{
            marginTop: '5%',
            marginLeft:'5%',
            width: '30%',
            height:"30%",
            textAlign: 'center',
            borderRadius: '10% 10%', 
            // borderRadius: '40px',
            // boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)"
          
        },
        'img1':{
            height: '60%',
            width: '60%', 
            borderTopLeftRadius: '40px',
            borderTopRightRadius: '40px',
            
        },
        'consultation_card_btn':{
            float: 'right',
            width:'30%',
            borderRadius: '29px',
            background: '#515782',
            color: '#FFF',
            border: 'none',
            padding: '7px',
            marginRight: '20px',
            marginBottom: '10px'
        },
        'gender_statistics': {
            borderRadius: '40px',
            width: '90%',
            marginBottom: '50px',
            margin:'auto',
            boxShadow:
            "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
           
            overflow: 'hidden'
        },
        "consulte_card_btn" :{
            margin: 'auto',
            marginTop: '5%'
        }
        
        
    }

    state = {
        nbhomme: null,
        nbfemme:null,
        pourcentage : {
            hommePer : null,
            femmePer : null
        },
        ages: [],
        agesStatistics: [],
    }

    getMeGenderStatistics = (myUsers) => {
        myUsers.forEach(user => {
            if( user.roles[0].name==='ROLE_Patient'){
                if(user.sex === 'Homme') {
                    this.setState({
                        ...this.state,
                        nbhomme : this.state.nbhomme + 1
                    }) 
                } else {
                    this.setState({
                        ...this.state,
                        nbfemme: this.state.nbfemme + 1
                    })
                }
            }
        });
        console.log(this.state)
        // calculate the percentage of each gender
        this.setState({
            ...this.state,
            pourcentage: {
                hommePer: (this.state.nbhomme * 100)/ (this.state.nbhomme+this.state.nbfemme),
                femmePer: (this.state.nbfemme * 100)/ (this.state.nbhomme+this.state.nbfemme)
            }
        })
    }


    ages = [];
    agesStat = [];
    agesStatFinal = [['Age', 'nombre']];
    getMeAgeStatistics = (myUsers) => {
       
        myUsers.forEach(user => {
            if(user.roles[0].name === 'ROLE_Patient'){
                //we calculate the ages
                const sysDate = Number((new Date().toISOString().slice(0, 10)).substring(0, 4));
                const userYearOfBirth = Number((user.dateNaissance).substring(0, 4))
                const age = sysDate-userYearOfBirth;
                this.ages.push(age)
            }
        })
        console.log(this.ages)
        this.ages.forEach(age_=>{
                const result = (this.ages.filter(age => age==age_)).length;
                this.agesStat.push([age_, result]) 
        })
        //we remove l occurrence 
        this.agesStat.forEach(ages => {
            const oneAge = ages[0]
            console.log('....', this.agesStatFinal)
            if(!this.verifyAgeExist(oneAge)) {
                this.agesStatFinal.push(ages)
            }
        })
        console.log(this.agesStat)
        this.setState({
            ...this.state,
            agesStatistics: this.agesStatFinal
        })

        console.log('state final : ', this.state)
        console.log('agesState final : ', this.agesStatFinal)
    }

    verifyAgeExist = (age) => {
        let i = 0;
        let found = false;
        while (i<this.agesStatFinal.length){
            if(age == this.agesStatFinal[i][0]){
                found = true;
            }
            i++
        }
        return found
    }


    componentDidMount = async()=> {
        //we gotta get all the users and then calculate the % 
        const response = await axios.get('http://localhost:8090/gestion-compte-service/api/auth/users');
        const numberOfUsers = response.data.length;
        const myUsers = response.data;
        this.getMeGenderStatistics(myUsers)
        this.getMeAgeStatistics(myUsers)
        // calculate the age 
        console.log('date of today : ', new Date().toISOString().slice(0, 10), ' birthday : ', myUsers[0].dateNaissance)
    }

    


    render(){
        return(
            <div className="Medecin_dashboard">
   

                
             
            
               <div style={this.styles.gender_statistics}>
                    <RdvStatistic />
               </div>
               <br/>
               <br/>
               <div style={this.styles.gender_statistics}>
                    <Chart
                        width={'100%'}
                        height={'300px'}
                        chartType="ScatterChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.agesStatistics}
                        options={{
                            title: 'nombre de patient pour chaque age',
                            hAxis: { title: 'Age', minValue: 20, maxValue: 80 },
                            vAxis: { title: 'nombre', minValue: 0, maxValue: 5 },
                            legend: 'none',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />              
               </div>
        
         </div>
        );
    }
}

export default Medecin_dashboard;