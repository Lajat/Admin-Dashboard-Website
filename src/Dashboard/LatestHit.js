import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import classes from './Dashboard.module.css'

export class LatestHit extends Component {
    state = {
        data: {
          labels: [],
          datasets: [
            {
              label: 'Latest Hits',
              data: []
            },
            {
              label: 'Popular Hits',
              data: []
            },
            {
              label: 'Featured',
              data: []
            }
          ]
        }
      }
      getdata=()=>{
          const getinfo=JSON.parse(localStorage.getItem('LocalData')).dasbhoardPage.latestHits;
          this.state.data.datasets[0].data=getinfo.latest;
          this.state.data.datasets[1].data=getinfo.popular;
          this.state.data.datasets[2].data=getinfo.featured;
          this.state.data.labels=getinfo.months;

          if (this.state.data.datasets) {
            let colors = ['#4bc0c0', '#ff6384', '#9966ff'];
            this.state.data.datasets.forEach((set , i)=>{
              set.borderColor = colors[i];
              set.borderWidth = 3;
            
            });
          }
    
        return this.state.data;
      }
    render() {
        return (
                <div className={classes.latesthits}>
        <div>
          <h2>Latest Hits</h2>
          <Line 
              options={{
                  responsive: true,
                  legend: {
                      labels: {
                          fontColor: "white",
                      }
                  },
                  scales: {
                      yAxes: [{
                          ticks: {
                              fontColor: "white",
                              stepSize: 10,
                              beginAtZero: false,
                              min: 10,
                          },
                          scaleLabel: {
                              display: true,
                              labelString: 'Hits',
                              fontColor: "white",
                          }

                      }],
                      xAxes: [{
                          ticks: {
                              fontColor: "white",
                      }
                  }]},
                  elements: {
                      point:{
                          radius: 0
                      }
                  }
              }}
              data={this.getdata}
          />
        </div>
    </div>
        )
    }
}

export default LatestHit
