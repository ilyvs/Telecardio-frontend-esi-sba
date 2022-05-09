import './Statistics.css';
import React from 'react';
import axios from 'axios';

class Statistics extends React.Component {

    state = {
        nb_patient: 0,
        nb_medecin:0
    }


    componentDidMount = async()=>{
        
        var liste_patient = [];
        var liste_medecin = [];
        const response = await axios.get("http://localhost:8083/api/auth/users")
           
                response.data.forEach(user => {
                    if(user.roles[0].name=='ROLE_Patient'){
                        liste_patient.push(user);
                    }
                    if(user.roles[0].name=='ROLE_Medecin'){
                        liste_medecin.push(user)
                    }
                
                });

            const nbmed = liste_medecin.length;
            const nbPat = liste_patient.length;
            console.log(liste_patient.length)
            this.setState({
                nb_patient: nbPat,
                nb_medecin: nbmed
            })
            console.log('state', this.state)
    }

    render() {
        
        return(
            <div className="statistics">
                <div className="statistics__Card">
                    <div className="statistics__RoundNumber">
                        <p>{this.state.nb_medecin}</p>
                    </div>
                    <div className="statistics__indicatorText">
                        <p>nombre de medecins enregistré</p>
                    </div>
                </div>
                <div className="statistics__Card">
                    <div className="statistics__RoundNumber">
                        <p>{this.state.nb_patient}</p>
                    </div>
                    <div className="statistics__indicatorText">
                        <p>nombre de patient enregistré</p>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Statistics