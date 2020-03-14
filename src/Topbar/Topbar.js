import React from 'react';
import classes from './Topbar.module.css';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            dashboard: "#f5a623",
            products:"#567086",
            accounts:"#567086",
        }
    }

        onDashboardLinkClick = () => {
            this.setState({dashboard:"#f5a623"});
            this.setState({products:"#567086"});
            this.setState({accounts:"#567086"});
        }
        onProductsLinkClick = () => {
            this.setState({dashboard:"#567086"});
            this.setState({products:"#f5a623"});
            this.setState({accounts:"#567086"});
        }
        onAccountsLinkClick = () => {
            this.setState({dashboard:"#567086"});
            this.setState({products:"#567086"});
            this.setState({accounts:"#f5a623"});
        }

        render() {
            return(
                <div className={classes.main}>
                    <Link onClick={this.onDashboardLinkClick} to="/" className={classes.tag}>
                        <h1>PRODUCT ADMIN</h1>
                    </Link> 
                    <div className={classes.menuWrapper}>
                        <Link style={{backgroundColor:this.state.dashboard}} onClick={this.onDashboardLinkClick} to="Dashboard" className={classes.menu}>
                            <i className="fas fa-tachometer-alt"></i>
                            <h5>Dashboard</h5>
                        </Link>
                        <Link style={{backgroundColor:this.state.products}} onClick={this.onProductsLinkClick} to="Products" className={classes.menu}>
                            <i className="fas fa-shopping-cart"></i>
                            <h5>Products</h5>
                        </Link>
                        <Link style={{backgroundColor:this.state.accounts}} onClick={this.onAccountsLinkClick} to="Accounts" className={classes.menu}>
                            <i className="far fa-user"></i>
                            <h5>Accounts</h5>
                        </Link>
                    </div>
    
                    <div className={classes.loginLogoutWrapper}>
                        {
                            this.props.loggedInStatus ?
                            <div className={classes.logout}>
                                <h5 style={{fontWeight:400,margin:"0px",paddingTop:"3px"}}>Admin</h5>
                                <Link onClick={() => this.props.onLoggedOutClick()} to="" className={classes.logoutLink}>, Logout</Link>
                            </div>
                            : <Link to="Login" className={classes.login}>
                                <h5>Login</h5>
                              </Link>
                        }
                    </div>
    
                </div>
            );
        }
}
export default Topbar;