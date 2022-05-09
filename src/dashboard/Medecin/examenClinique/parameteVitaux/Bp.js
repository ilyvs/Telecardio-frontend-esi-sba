import React, { Component } from "react";
import Chart from "react-apexcharts";
import axios from 'axios';

class Bp extends Component {
  
        state = {
            bp:[],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                      enabled: false
                    },
                  },
                  xaxis: {
                    categories: [
                    ],
                    title: {
                        text: 'temps'
                      },

                  },
                yaxis: {
                    title: {
                      text: 'Bold pressure'
                    },
                }
              },
    
              series: [{
                name: "Tension systolique",
                data: []
              },
              {
                name: "Tension diastolique",
                data: []
              },
              {
                name: 'Battement de coeur',
                data: [],
                color:'#FF0000'
              }
            ],

           
      



    };

 
    componentDidMount=() => {

const config = {
    Headers :{
      ContentType:'application/json',
      'Access-Controll-Allow-Origin':'*'
    }
  }
axios.get('http://localhost:8080/get-Bp-Data' ,config)

.then((response) => {

  this.setState({
    bp : response.data
},

()=>{
    console.log("state Bp",this.state.bp)

    var tabO = [];
    var tabB = [];
    var tabK=[];
    var tabSghira=[]
    var tabS =[]
    for (let i = 0; i < this.state.bp.length ;i++) {

            var tabOptions = this.state.bp[i][0].slice(11,16);
             tabO.push(tabOptions)
             var bat = this.state.bp[i][1]
            tabB.push( bat );
            var lkbira = this.state.bp[i][3]
            tabK.push(lkbira)
            var sghira = this.state.bp[i][2]
            tabSghira.push(sghira)



             


            


    }
    
     console.log("lop tabO bbbppp", tabO )
    console.log("lop tab battemetn  teeest bbbp", tabB)

        this.setState({
            ...this.state,

            options: {
                xaxis: {
                    categories: tabO
                }
             
              }, 
            series: [{
                name: "Tension systolique",
                data: tabK
              },
              {
                name: "Tension diastolique",
                data: tabSghira
              },
              {
                name: 'Battement de coeur',
                data: tabB,
                color:'#FF0000'
              }
            ],
            noData: {
                text: 'Loading...'
              }

        } )

    
  
    } 
  )
  }
)}
    
    
  render() {

    return (
      <div className="app">
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

     

      </div>

      
    );
  }
}

export default Bp;
