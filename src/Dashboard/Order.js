import React from 'react';

// import '../../../Containers/DashboardPage/DashboardPage.css';
import classes from './Dashboard.module.css'
import './Order.css'

class Order extends React.Component {

  render() {
    const data = JSON.parse(localStorage.getItem('LocalData')).dasbhoardPage.orders;

    const renderingData = data.map((item,pos)=>{

        let initial = 'status';

        switch (item.status) {
            case 'Moving':
                initial= ' moving';
                break;
            case 'Pending':
                initial= ' pending';
                break;
            case 'Cancelled':
                initial= ' cancelled';
                break;
            case 'Delivered':
                    initial= ' delivered';
                    break;
            default: initial= 'status';
        }

        return (
            <tr key={pos}>
                <th><b>#{item.orderNo}</b></th>
                <td>
                    <div className={initial}>
                    </div>{item.status}
                </td>
                <td><b>{item.operators}</b></td>
                <td><b>{item.location}</b></td>
                <td><b>{item.distance} km</b></td>
                <td>{item.startDate}</td>
                <td>{item.deliveryDate}</td>
            </tr>
        )
    });

    return (
        <div className={classes.order}>
            <div>
                <h2>Order List</h2>
                <div className={classes.ordertable}>
                    <table className={classes.table} >
                        <thead>
                            <tr>
                                <th>ORDER NO.</th>
                                <th>STATUS</th>
                                <th>OPERATORS</th>
                                <th>LOCATION</th>
                                <th>DISTANCE</th>
                                <th>START DATE</th>
                                <th>EST DELIVERY DUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderingData}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
  }
}

export default Order;