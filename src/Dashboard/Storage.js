import React from 'react';
import { Pie } from 'react-chartjs-2';
import classes from './Dashboard.module.css'

class Storage extends React.Component {

  state = {
    data : {
        labels: [],

        datasets: [{
            data: [],
        }],
    
    }
  }

  getChartData = () => {

    const Storage = JSON.parse(localStorage[('LocalData')]).dasbhoardPage.storage;

    const dependentData = Object.values(Storage);
    const mainLabels = Object.keys(Storage);

    this.state.data.labels = [...mainLabels]

    this.state.data.datasets[0].data = [...dependentData];
    this.state.data.datasets[0].backgroundColor = [
        'lightgreen', 'cyan', 'red'
    ]

    return this.state.data;
  }

  render() {

    return (
      <div className={classes.storage}>
        <div>
          <h2>Storage Information</h2>
          <Pie height={180}
              options={{
                  responsive: true,
                  legend: {
                      labels: {
                        fontColor: 'white',
                        fontSize: 14,
                      }
                  }
              }}
              data={this.getChartData}
          />
        </div>
      </div>
    );
  }
}

export default Storage;
