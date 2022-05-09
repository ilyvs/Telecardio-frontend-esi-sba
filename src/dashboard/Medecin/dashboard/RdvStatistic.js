import axios from 'axios';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
    state = {
      
        series: [],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['jan','Fev', 'Mar', 'Apr', 'May', 'Juin', 'Jul', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          yaxis: {
            title: {
              text: 'Nombre de rendez-vous par mois '
            }
          },
          fill: {
            opacity: 1
          },
         
        },
      
      
      };


      getMeRdvStat = async()=> {
          // get all the rdv 
          const id_doc = JSON.parse(localStorage.getItem('currentUser')).id;
          let stat_mois = [0,0,0,0,0,0,0,0,0,0,0,0]
          // new rdv
          const rdvs_new = (await axios.get('http://localhost:8084/get-new-appointment/'+id_doc)).data;
          console.log('my rdvs',rdvs_new)
          // on parcours et on incrimente selon le mois
          rdvs_new.forEach(rdv => {
              const indice = Number(rdv.date.slice(5,7))-1;
              stat_mois[indice]++;
          });

          console.log('my final stat  :', stat_mois);

          // we set the state : 
          this.setState({
              ...this.state,
              series : [{
                  name: 'nombre de rdv non approuvé.',
                  data: stat_mois
              },
              ...this.state.series
                ]
          })

          // approved rdv
          stat_mois = [0,0,0,0,0,0,0,0,0,0,0,0] // reinitialisation
          const rdvs_app = (await axios.get('http://localhost:8084/get-approved-appointment/'+id_doc)).data;
          console.log('approved one  : ', rdvs_app)
          // on parcours et on incrimente selon le mois
          rdvs_app.forEach(rdv => {
            const indice = Number(rdv.date.slice(5,7))-1;
            stat_mois[indice]++;
          });
          console.log('my final stat  :', stat_mois);
          
          // we set the state : 
          this.setState({
            ...this.state,
            series : [
                ...this.state.series,
                {
                name: 'nombre de rdv approuvés.',
                data: stat_mois
            },
            
              ]
        })

      }

      componentDidMount = () => {
          this.getMeRdvStat();
      }
  

    render() {
      return (
        


        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
        </div>



      );
    }
  }

  export default ApexChart