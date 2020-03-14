import React, { Component } from 'react'
import Axios from 'axios';
import classes from './Login.module.css';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state={
      username:'',
      password:'',
      display:'none',
      udisplay:'none',
      upara:'red',
      ppara1:'red',
      ppara2:'red',
      ppara3:'red',
      ppara4:'red',
      ppara5:'red',
    }
  }

  componentDidMount() {
    console.log("Function called");
        Axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
        .then(response=>{
            localStorage.setItem("LocalData",JSON.stringify(response.data));
        })
        .catch(error => {
          console.log("error =" + error);
        })
  }
    usernameValidator = (user) =>{
        var usernameRegex = /^[a-z\d]{4,16}$/i;
        if (user.target.value) {
          this.setState({udisplay:'block'});
      }else{
          this.setState({udisplay:'none'})
      }
        if (user.target.value.match(/^.{4,16}$/gm)) {
          this.setState({upara:'Cyan'})
      }else{
          this.setState({upara:'red'})
      }

        if(user.target.value.match(usernameRegex)){
          this.setState({
            username: user.target.value,isUsernameCorrect: true
          }, console.log('correct'))
        }else if(!user.target.value.match(usernameRegex)){
          this.setState({
            isUsernameCorrect: false
          }, console.log('not correct'))
        }
          console.log(this.state.isUsernameCorrect)
          console.log(this.state.username)
        }

        passwordValidator = (pwd) =>{
            var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

            if (pwd.target.value) {
                this.setState({display:'block'});
            }else{
                this.setState({display:'none'})
            }
    
            if (pwd.target.value.match(/^.{6,16}$/gm)) {
                this.setState({ppara1:'Cyan'})
            }else{
                this.setState({ppara1:'red'})
            }
            if (pwd.target.value.match(/[0-9]/gm)) {
              this.setState({ppara2:'Cyan'})
          }else{
              this.setState({ppara2:'red'})
          }
          if (pwd.target.value.match(/[A-Z]{1}/gm)) {
            this.setState({ppara3:'Cyan'})
        }else{
          this.setState({ppara3:'red'})
      }
        if (pwd.target.value.match(/[a-z]/gm)) {
          this.setState({ppara4:'Cyan'})
      }else{
        this.setState({ppara4:'red'})
    }
      if (pwd.target.value.match(/[!@#$%^&*]/gm)) {
        this.setState({ppara5:'Cyan'})
    }else{
      this.setState({ppara5:'red'})
  }

    
            // console.log("=>"+ pwd.target.value);
            if(pwd.target.value.match(passwordRegex)){
              this.setState({
                password: pwd.target.value,ispasswordCorrect: true
              }, 
              console.log('correct'))
            }else if(!pwd.target.value.match(passwordRegex)){
              this.setState({
                ispasswordCorrect: false
              }, 
              console.log('not correct'))
            }
              console.log(this.state.ispasswordCorrect)
            //   console.log(this.state.password)
            }

            Validator=(e)=>{
              e.preventDefault();
              if(this.state.ispasswordCorrect==true && this.state.isUsernameCorrect==true){
              }else if(this.state.isUsernameCorrect===false){
                console.log('Plz Fulfill the Requirements')
              }else if(this.state.ispasswordCorrect===false){
                console.log('plz Fulfill the password Requirements')
              }
            }

    render() {
        return (
            <div className={classes.container}>
            <form className={classes.loginform}>
                <h2>Welcome to Dashboard, Login</h2>
                <div> 
                    <h3>Username</h3>
                    <input onInput={this.usernameValidator} type="text" name="username" className="username" required/>
                    <ul className={classes.Userregex} style={{display:this.state.udisplay}}>
                        <li style={{color:this.state.upara}}>Starts with not less than 5 and more than 16  characters</li>
                        <li style={{color: 'orange'}}>Numeric characters are optional</li>
                    </ul>                        
                </div>
                <div> 
                    <h3>Password</h3>
                    <input onInput={this.passwordValidator} type="password" name="pass" required/>
                    <ul className={classes.Passregex} style={{display:this.state.display}}>
                        <li style={{color:this.state.ppara1}}>Not less than 6 and more than 16 characters</li>
                        <li style={{color:this.state.ppara2}}>Contains a digit</li>
                        <li style={{color:this.state.ppara3}}>Contains an uppercase letter</li>
                        <li style={{color:this.state.ppara4}}>Contains a lowercase letter</li>
                        <li style={{color:this.state.ppara5}}>A character not being alphanumeric</li>
                    </ul>
                </div>
                <div>
                    <button onClick={this.Validator} onClick={() => this.props.onLoggedInClick()}>Login</button>
                </div>
            </form>

        </div>
        )
    }
}

export default Login;
