import React, { Component } from 'react';
import classes from './Prod.module.css';
import { Link} from 'react-router-dom';
export class Prod extends Component {
    state = {
        Data: JSON.parse(localStorage.getItem('LocalData')).productsPage.products,
        nArr:[],
    }
    removeProduct = (pos,e) => {
        e.preventDefault();

        const mArr = this.state.Data;
        let Storage = JSON.parse(localStorage[('LocalData')]);

        mArr.splice(pos, 1);

        Storage.productsPage.products = mArr;
        localStorage.setItem('LocalData', JSON.stringify(Storage));
        this.setState({Data: mArr});
    }
    selected=(pos,e)=>{
        // e.preventDefault();
        if (this.state.nArr.indexOf(pos)<0){
            this.state.nArr.push(pos);
            console.log(this.state.nArr)
            console.log(pos)
    
        }
        if(this.state.nArr.indexOf(pos)>=0){
            this.state.nArr.splice(pos,1)
        }
       

    }
    

    render() {
        console.log(this.state.Data)
        const renderingData = this.state.Data.map((item,pos) => {
            return (
                <Link to="/EditProduct" className={classes.mainRow} key={pos+1}>
                    <td >
                        <label >
                            <input className={classes.input} type="checkbox" onClick={(e)=>this.selected(pos,e)} />
                        </label>
                    </td>
                    <td className={classes.productname}>{item.name}</td>
                    <td className={classes.productsold}>{item.unitSold}</td>
                    <td className={classes.productstock}>{item.stock}</td>
                    <td className={classes.productexpire}>{item.expireDate}</td>
                    <td className={classes.deleteIcon}>
                        <a href='/' onClick={(e)=>this.removeProduct(pos,e)} >
                            <i className="far fa-trash-alt"></i>
                        </a>
                    </td>
                </Link>
            )
        });
        return (
            <div className={classes.product}>
                <div className={classes.productwrapper}>
                    <div className={classes.producttable}>
                        <div style={{padding: '0 1px'}}>
                            <table className={classes.table}>
                                <tbody>
                                    <tr>
                                        <th style={{width: '20px'}}></th>
                                        <th>PRODUCT NAME</th>
                                        <th>UNIT SOLD</th>
                                        <th>IN STOCK</th>
                                        <th>EXPIRE DATE</th>
                                        <th style={{width: '20px'}}></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                            <table className={[classes.table,classes.datatable].join(' ')}>
                            <tbody>        
                                {renderingData}
                            </tbody>
                            </table>
                    </div>
                    <div className={classes.btnWrapper}>
                    <Link to="/NewProduct" className={classes.btn}>
                        Add new product
                    </Link>
                    <button  className={classes.btn}>
                        Delete Selected product
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prod
