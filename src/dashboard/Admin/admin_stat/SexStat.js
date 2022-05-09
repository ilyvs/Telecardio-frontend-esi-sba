import React from 'react';
import Chart from 'react-google-charts'
import axios from 'axios'
class SexStat extends React.Component{

    state={
        nbhomme: null,
        nbfemme:null,
        pourcentage : {
            hommePer : null,
            femmePer : null
        },
        ages: [],
        agesStatistics: [],
    }

    style = {
        'gender_chart': {
            margin: 'auto'
        }
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


    componentDidMount = async()=>{
        const response = await axios.get('http://localhost:8090/gestion-compte-service/api/auth/users');
        const myUsers = response.data;
        this.getMeGenderStatistics(myUsers)
    }
    render() {
        return(
            <Chart
                width={'600px'}
                height={'600px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                ['sexe', 'Popularity'],
                ['homme', this.state.pourcentage.hommePer],
                ['femme', this.state.pourcentage.femmePer],
                
                ]}
                options={{
                title: 'Statistic sur le genre',
                //sliceVisibilityThreshold: 0.05, // 20%
                }}
                rootProps={{ 'data-testid': '7' }}

                className='gender_chart'
                style={this.style.gender_chart}
            />
        )
    }
}

export default SexStat;