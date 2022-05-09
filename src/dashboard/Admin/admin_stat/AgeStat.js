import React from 'react';
import axios from 'axios';
import Chart from 'react-google-charts'

class AgeStat extends React.Component{

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
    componentDidMount = async()=>{
        const response = await axios.get('http://localhost:8090/gestion-compte-service/api/auth/users');
        const myUsers = response.data;
        this.getMeAgeStatistics(myUsers)
    }
    render() {
        return(
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
        )
    }
}

export default AgeStat;