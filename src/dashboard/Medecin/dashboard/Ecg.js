import React from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
//import jsonEcg from './ecg.json'

class ApexChart extends React.Component {
    constructor(props) {
      super(props);
     
      this.state = {
        dataCurrent: [],
        
        options: {

            chart: {
                height: 150,
                
                type: 'line',
                zoom: {
                  enabled: true
                },
                markers: {
                    size: "10px",
                },
                stroke: {
                    curve: 'stepline',
                  }
              },
            xaxis: {
                categories: [],
                title: {
                    text: 'valueTemp'
                  }
            },
            yaxis: {
                title: {
                  text: 'values'
                },
            }
          },

         series: [
             {
              data : []
             
             }
             
         ],
         noData: {
            text: 'Loading...'
          }

      };
    }

    componentDidMount = async() => {
      let valueSaveTimes = [];
      let values = [];

        const config = {
          Headers :{
            ContentType:'application/json',
            'Access-Controll-Allow-Origin':'*'
          }
        }
        const jsonEcg = await axios.get("http://localhost:8080/get-ECG-Data" , config)
          
        const ecgDataSplited = jsonEcg.data.slice(0,500);
        // on remplit le tableau de valuesSaveTimes 
        ecgDataSplited.forEach( donnee => valueSaveTimes.push(donnee['valueSaveTime']));
        // on remplit le tableau de values 
        ecgDataSplited.forEach( donnee => values.push(donnee['value']) )

         console.log('valuesTimeSave : ', valueSaveTimes);
         console.log('values : ', values);
        
        // by using this.setState set me the data
        this.setState({
            options: {

                chart: {
                    height: 200,
                    type: 'line',
                    zoom: {
                      enabled: true
                    },
                    markers: {
                        size: "5px",
                    },
                    stroke: {
                        curve: 'stepline',
                      }
                  },
                xaxis: {
                    categories: valueSaveTimes,
                    title: {
                        text: 'temps'
                      }
                },
                yaxis: {
                    title: {
                      text: 'values'
                    },
                }
              },
    
             series: [
                 {
                  data : values 
                 
                 }
                 
             ],
             noData: {
                text: 'Loading...'
              }
    
        })
        
        
    }

    style={
      'row': {
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        width: '100%',
      }
    }
  

    render() {
        // const donneeTemp = []
        // console.log('hah',jsonEcg[0]['valueSaveTime'])
        // jsonEcg.forEach(donnee => {
        //     donneeTemp.push(donnee['valueSaveTime'])
        // });
        // console.log('hihhh : ', donneeTemp)
      return (
        

        <div className="row" style={this.style.row}>
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="100%"
            />
          
        </div>



      );
    }
  }

export default ApexChart;