import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import classes from './Dashboard.module.css'



export class Perfo extends React.Component {
    state={
        labels: [],
    datasets: [
      {
        label: 'Dataset',
        borderWidth: 1,
         data: [],
         borderWidth: 0,
         backgroundColor: [],
         barPercentage: 0.2
      }
    ]
}
getChartData = () => {

    const Performance = JSON.parse(localStorage[('LocalData')]).dasbhoardPage.performance;

    const dependentData = Object.values(Performance);
    const mainLabels = Object.keys(Performance);
    this.state.datasets[0].backgroundColor = mainLabels;

    this.state.labels = [...mainLabels];
    this.state.datasets[0].data = [...dependentData];
    console.log(dependentData);
    console.log(mainLabels);
    return this.state;
  }


    render() {
        return (
            
                <div className={classes.performance}> 
                 <div>
                <h2>Performance</h2>
                <HorizontalBar 
                    options={{
                        responsive: true,
                        legend: {
                            labels: {
                                fontColor: "whitesmoke",
                            }
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    fontColor: "whitesmoke",
                                    beginAtZero: false

                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Hits',
                                    fontColor: "whitesmoke",
                                }

                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: "whitesmoke",
                                    stepSize: 10,
                                    min: 20,
                                    max: 60
                            }
                        }]},
                        elements: {
                            point:{
                                radius: 0
                            }
                        }
                    }}
                    data={this.getChartData}
                />
            </div>
            </div> 
            
        )
    };
    
}
export default Perfo


    


