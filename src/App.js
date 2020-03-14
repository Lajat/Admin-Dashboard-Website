import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar/Topbar';
import Accounts from './Accounts/Accounts';
import Dashboard from './Dashboard/Dashboard';
import Products from './Products/Products';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import NewProduct from './Products/NewProduct';
import EditProduct from './Products/EditProduct';
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom';

class App extends React.Component {
  state={
    isAdminLoggedIn: JSON.parse(localStorage.getItem("isAdminLoggedIn")),
  }

  onLoggedOutClick = () => {
    this.setState({isAdminLoggedIn:false});
    localStorage.setItem("isAdminLoggedIn",false);
  }
  onLoggedInClick = () => {
    this.setState({isAdminLoggedIn:true});
    localStorage.setItem("isAdminLoggedIn",true);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Topbar loggedInStatus={this.state.isAdminLoggedIn} onLoggedOutClick={this.onLoggedOutClick} />
            <Switch>
                <Route path={"/Dashboard"} render={() => this.state.isAdminLoggedIn ? <Dashboard/> : <Redirect to="/Login" />} />
                <Route path={"/Products"} render={() => this.state.isAdminLoggedIn ? <Products/> : <Redirect to="/Login" />} />
                <Route path={"/Accounts"} render={() => this.state.isAdminLoggedIn ? <Accounts/> : <Redirect to="/Login" />} />
                <Route path="/EditProduct" component={EditProduct} />
                <Route path="/NewProduct" component={NewProduct} />
                <Route path="/Login" render={() => this.state.isAdminLoggedIn ? <Redirect to="/Dashboard" /> : <Login loggedInStatus={this.state.isAdminLoggedIn} onLoggedInClick={this.onLoggedInClick} />} />
                {
                  this.state.isAdminLoggedIn ? <Route exact path="/" component={Dashboard}  /> : <Login loggedInStatus={this.state.isAdminLoggedIn} onLoggedInClick={this.onLoggedInClick} />
                }
            </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
