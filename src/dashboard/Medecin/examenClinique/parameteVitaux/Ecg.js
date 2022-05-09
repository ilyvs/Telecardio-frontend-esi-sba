import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "react-apexcharts";
import Bp from './Bp';
import EcgOr from '../../dashboard/Ecg'
import axios from 'axios'

class Ecg extends Component {
  
        state = {
                 
        
        temp:[],


        options: {

            chart: {
                height: 350,
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
                    text: 'temps'
                  }
            },
            yaxis: {
                title: {
                  text: 'Temperature'
                },
            }
          },

         series: [
             {
              data : [],
             
             }
             
         ],
         noData: {
            text: 'Loading...'
          }


    };

 
    componentDidMount=() => {
        
        const config = {
            Headers :{
              ContentType:'application/json',
              'Access-Controll-Allow-Origin':'*'
            }
          }
        axios.get('http://localhost:8080/get-Temp-Data' ,config)
   
        .then((response) => {
          //console.log(response.data)

          this.setState({
            temp : response.data
        }, 
        ()=>{
            console.log("state temperature",this.state.temp)

            var tabO = [];
            var tabS=[];
            for (let i = 0; i < this.state.temp.length ;i++) {
                    var tabOptions = this.state.temp[i][0].slice(11,16);
                     tabO.push(tabOptions)
                    var tabSeries = this.state.temp[i][1];
                     tabS.push(tabSeries)        

            }
             console.log("lop tabO", tabO )
            console.log("lop tabS", tabS)
            this.setState({

                options: {
                    xaxis: {
                        categories: tabO
                    }
                 
                  }, 
                series: [ { data :tabS } ],
            
                noData: {
                    text: 'Loading...'
                  }
            } )
        

            // console.log("lop tabOptions", tabOptions)
            // console.log("lop tabSeries", tabSeries)

        // let tabOptions = [this.state.temp[0][0].slice(11,16)] 
        // let tabSeries = [this.state.temp[0][1]]
        // console.log("tabOptions",tabOptions)
        // console.log("tabSeries",tabSeries)
        // console.log("length tab",this.state.temp.length)
      

        //      this.setState({

        //     options: {
        //         xaxis: {
        //             categories: tabOptions
        //         }
             
        //       }, 
        //     //data: [data[0][1],37],
        //     series: [ { data :tabSeries } ]
        // } )

        // console.log("test categories", this.state.options)
        // console.log("test series", this.state.series)

    




        } 
        ) 
  
        })

        .then(() => {
            console.log('state 2 then',this.state.temp)
        })
        
        .catch((err)=> {
          console.log({error: err})
        })

        console.log("state temperature",this.state.temp)
     


        // console.log("lenth tab",this.state.temp[0])

      

        // const  tabOptions = [this.state.temp[0][0].slice(11,16),13,14] ;
        // const tabSeries = [this.state.temp[0][1],36,38];
        // console.log("tabOptions",tabOptions)
        // console.log("tabSeries",tabSeries)

        
        // console.log("data test",data[0][0].slice(11,16),data[0][1] )
        // const categories= this.state.options.categories;
        // let data1 = this.state.series[0].data
        // console.log("data1 tesssst", data1)

    //     this.setState({

    //         options: {
    //             xaxis: {
    //                 categories: tabOptions
    //             }
             
    //           }, 
    //         //data: [data[0][1],37],
    //         series: [ { data :tabSeries } ]
    //     } )

    //     console.log("test categories", this.state.options)
    //     console.log("test series", this.state.series)

    // }


    
}

 
    
style= {
  'ecg_or':{
    width: '100%',
    display: 'flex',
    justifyContent: 'center', 
  },
  
}
    //  chart = new ApexCharts(document.querySelector("#chart1"), this.state.options1).render();
    
  render() {

            



    return (
        <div>




<div style={this.style.ecg_or}> 
  <EcgOr/>
</div>


<br/><br/>

       
        

<Grid  container spacing={10}>

     

        <Grid item xs={12} md={6}>
           <Bp/>
     
         </Grid>

         <Grid item xs={12} md={6}>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
        </Grid>

</Grid>



</div>
        


      
    );
  }
}

export default Ecg;
