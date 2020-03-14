import React from 'react';
import classes from './Accounts.module.css';
import { render } from '@testing-library/react';
class Accounts extends React.Component {
    state={
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        visibility:"visible",
        name:"",
        email:"",
        password1:"",
        password2:"",
        phone:"",
        localStoreData: JSON.parse(localStorage.getItem("data")),
        pos:0,
        selected:[{id:0,name:"",email:"",password:"",phone:""}],
        backendData: JSON.parse(localStorage.getItem("LocalData")),
        categorySelected:{id:0,name:"",email:"",password:"",phone:"",profilePic:"https://www.w3schools.com/howto/img_avatar.png"},
        category: "Select Acount",
    }

    onFileUploadHandler = (e) => {
        this.setState({avatar: e.target.files[0].name});
        console.log(e.target.files[0].name);
        const file = e.target.files[0];
        if(file) {
            var reader = new FileReader();
            console.log(reader);
        }
    }
    onDelAvatarClick = (e) => {
        e.preventDefault();
        this.setState({visibility:"hidden"});
    }

    selectHandler = (e) => {
        const pos = e.target.value;
        switch(e.target.value){
            case "1":
                this.setState({categorySelected:this.state.backendData.accountsPage.Admin,category:"Admin"});
                break;
            case "2":
                this.setState({categorySelected:this.state.backendData.accountsPage.Editor,category:"Editor"});
                break;
            case "3":
                this.setState({categorySelected:this.state.backendData.accountsPage.Merchant,category:"Merchant"});
                break;
            case "4":
                this.setState({categorySelected:this.state.backendData.accountsPage.Customer,category:"Customer"});
                break;
            default:
                this.setState({categorySelected:{id:0,name:"",email:"",password:"",phone:"",profilePic:"https://www.w3schools.com/howto/img_avatar.png"}});
        }

        this.setState({pos:e.target.value});
        
        let data = JSON.parse(localStorage.getItem("data"));
        if(data === null) {
            data=[{"id":0,name:"",email:"",password:"",phone:""}];
            data.splice(1,0,{"id":pos,name:"",email:"",password:"",phone:""});
            // data.push({"id":pos,name:"",email:"",password:"",phone:""});
            this.setState({localStoreData:data});
        }
        if(data[pos] === undefined) {
            data.splice(pos,0,{"id":pos,name:"",email:"",password:"",phone:""});
            // data.push({"id":pos,name:"",email:"",password:"",phone:""});
            this.setState({localStoreData:data});
        }
        // let selectedData = Object.entries(data).filter(item => item.id === pos);
        // // console.log("selectedObject " + selectedData);
        // this.setState({selected:selectedData});
    }

    onNameChange = (e) => {
        this.setState({name:e.target.value});
    }
    onEmailChange = (e) => {
        this.setState({email:e.target.value});
    }
    onPasswordChange = (e) => {
        this.setState({password1:e.target.value});
    }
    reEnterPassword = (e) => {
        this.setState({password2:e.target.value});
    }
    onPhoneChange = (e) => {
        this.setState({phone:e.target.value});
    }

    updateBtnClick = (e) => {
        // e.preventDefault();
        // let localData = this.state.localStoreData;
        const category = this.state.category;
        let localData2 = this.state.backendData;
        console.log(this.state.selectedData);
        if(this.state.password1 === this.state.password2){
            // localData[this.state.pos].id = this.state.pos;
            // localData[this.state.pos].name = this.state.name;
            // localData[this.state.pos].email = this.state.email;
            // localData[this.state.pos].password = this.state.password;
            // localData[this.state.pos].phone = this.state.phone;
            // localData[this.state.pos].avatar = this.state.avatar;
            // localStorage.setItem("data",JSON.stringify(localData));
            switch(category){
                case "Admin":
                    localData2.accountsPage.Admin.name = this.state.name;
                    localData2.accountsPage.Admin.email = this.state.email;
                    localData2.accountsPage.Admin.password = this.state.password1;
                    localData2.accountsPage.Admin.phone = this.state.phone;
                    localData2.accountsPage.Admin.profilePic = this.state.profilePic;
                    break;
                case "Editor":
                    localData2.accountsPage.Editor.name = this.state.name;
                    localData2.accountsPage.Editor.email = this.state.email;
                    localData2.accountsPage.Editor.password = this.state.password1;
                    localData2.accountsPage.Editor.phone = this.state.phone;
                    localData2.accountsPage.Editor.profilePic = this.state.profilePic;
                    break;
                case "Merchant":
                    localData2.accountsPage.Merchant.name = this.state.name;
                    localData2.accountsPage.Merchant.email = this.state.email;
                    localData2.accountsPage.Merchant.password = this.state.password1;
                    localData2.accountsPage.Merchant.phone = this.state.phone;
                    localData2.accountsPage.Merchant.profilePic = this.state.profilePic;
                    break;
                case "Customer":
                    localData2.accountsPage.Customer.name = this.state.name;
                    localData2.accountsPage.Customer.email = this.state.email;
                    localData2.accountsPage.Customer.password = this.state.password1;
                    localData2.accountsPage.Customer.phone = this.state.phone;
                    localData2.accountsPage.Customer.profilePic = this.state.profilePic;
                    break;
            }
            localStorage.setItem("LocalData",localData2);
            alert('Information Updated Successfully!');
        }
        else
        alert('Password did not match');
    }
    deleteAccountClick = () => {
        const category = this.state.category;
        let localData2 = this.state.backendData;
        // let localData = this.state.localStoreData;
        // localData[this.state.pos].id = this.state.pos;
        // localData[this.state.pos].name = "";
        // localData[this.state.pos].email = "";
        // localData[this.state.pos].password = "";
        // localData[this.state.pos].phone = "";
        // localData[this.state.pos].avatar = this.state.avatar;
        // localStorage.setItem("data",JSON.stringify(localData));
        switch(category){
            case "Admin":
                localData2.accountsPage.Admin.name = "";
                localData2.accountsPage.Admin.email = "";
                localData2.accountsPage.Admin.password = "";
                localData2.accountsPage.Admin.phone = "";
                localData2.accountsPage.Admin.profilePic = "";
                break;
            case "Editor":
                localData2.accountsPage.Editor.name = "";
                localData2.accountsPage.Editor.email = "";
                localData2.accountsPage.Editor.password = "";
                localData2.accountsPage.Editor.phone = "";
                localData2.accountsPage.Editor.profilePic = "";
                break;
            case "Merchant":
                localData2.accountsPage.Merchant.name = "";
                localData2.accountsPage.Merchant.email = "";
                localData2.accountsPage.Merchant.password = "";
                localData2.accountsPage.Merchant.phone = "";
                localData2.accountsPage.Merchant.profilePic = "";
                break;
            case "Customer":
                localData2.accountsPage.Customer.name = "";
                localData2.accountsPage.Customer.email = "";
                localData2.accountsPage.Customer.password = "";
                localData2.accountsPage.Customer.phone = "";
                localData2.accountsPage.Customer.profilePic = "";
                break;
        }
        localStorage.setItem("LocalData",localData2);
    }

    render() {
        return(
            <div className={classes.mainContainer}>
                <div className={classes.main}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.content}>
                            <h2>List Of Accounts</h2>
                            <p>Accounts</p>
                            <select onChange={this.selectHandler} className={classes.select}>
                                <option value="0">Select Account</option>
                                <option value="1">Admin</option>
                                <option value="2">Editor</option>
                                <option value="3">Merchant</option>
                                <option value="4">Customer</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={classes.contentContainer}>
                <div className={classes.main}>
                    <div className={classes.avatarContainer}>
                        <div className={classes.avatarWrapper}>
                            <h2>Change Avatar</h2>
                            <div style={{visibility:this.state.visibility}} className={classes.avatar}>
                                <img className={classes.img} src={this.state.categorySelected.profilePic} alt="avatar" />
                                <a className={classes.tag} href="#">
                                    <div onClick={this.onDelAvatarClick} className={classes.delIcon}><i className="far fa-trash-alt"></i></div>
                                </a>
                            </div>
                            <input style={{display:"none"}} type="file" onChange={this.onFileUploadHandler} ref={fileInput => this.fileInput = fileInput} />
                            <button className={classes.btn} onClick={() => this.fileInput.click()}>UPLOAD NEW PHOTO</button>
                        </div>
                    </div>
                </div>

                <div className={classes.accountSettings}>
                    <div className={classes.blockWrapper}>
                        <h2>Account Settings</h2>
                        <form onInput={this.onFormInput} className={classes.formWrapper}>
                            <div className={classes.form}>
                                <label><p>Account Name</p>
                                    {/* <input onInput={this.onNameChange} type="text" id="name" placeholder={this.state.localStoreData[this.state.pos].name} name="name" /> */}
                                    <input onInput={this.onNameChange} onClick={this.onNameChange} type="text" id="name" placeholder={this.state.categorySelected.name} name="name" />
                                </label>
                            </div>
                            <div className={classes.form}>
                                <label><p>Account Email</p>
                                    {/* <input onInput={this.onEmailChange} type="email" id="email" placeholder={this.state.localStoreData[this.state.pos].email} name="name" /> */}
                                    <input onInput={this.onEmailChange} type="email" id="email" placeholder={this.state.categorySelected.email} name="name" />
                                </label>
                            </div>
                            <div className={classes.form}>
                                <label><p>Password</p>
                                    <input onInput={this.onPasswordChange} type="password" id="password1" placeholder={this.state.categorySelected.password} name="name" />
                                </label>
                            </div>
                            <div className={classes.form}>
                                <label><p>Re-enter Password</p>
                                    <input onInput={this.reEnterPassword} type="password" id="password2" name="name" />
                                </label>
                            </div>
                            <div className={classes.form}>
                                <label><p>Phone</p>
                                    {/* <input onInput={this.onPhoneChange} type="tel" id="phone" placeholder={this.state.localStoreData[this.state.pos].phone} name="name" /> */}
                                    <input onInput={this.onPhoneChange} type="tel" id="phone" placeholder={this.state.categorySelected.phone} name="name" />
                                </label>
                            </div>
                            <div className={classes.form}>
                                <label style={{display:"block"}}><p>&nbsp;</p></label>
                                <button onClick={this.updateBtnClick} className={classes.btn} type="submit">UPDATE YOUR PROFILE</button>
                            </div>
                            <div className={classes.delBtnWrapper}>
                                <button onClick={this.deleteAccountClick} className={classes.btn} type="submit">DELETE YOUR ACCOUNT</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
    
            </div>
        )
    }
}
export default Accounts;