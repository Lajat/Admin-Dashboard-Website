import React from 'react';
import classes from './Dashboard.module.css'
class NotificationList extends React.Component {

  render() {
    const data = JSON.parse(localStorage.getItem("LocalData")).dasbhoardPage.notifications;
   
    const renderingData = data.map((item,pos)=>{
        console.log(item.message)
        return (
            <div className={classes.sec} key={pos}>
                <div >
                    <img className={classes.image} src={item.pic} />
                </div>
                <div className={classes.det}>
                    <p>{item.message}</p>
                    <span>{item.time} ago</span>
                </div>
            </div>
        )
    });

    return (
        <div className={classes.notification}>

            <div >

                <h2>Notification List</h2>
                
                <div className={classes.notify}>
                        {renderingData}
                        {renderingData}
                </div>

            </div>
            
        </div>
    );
  }
}

export default NotificationList;