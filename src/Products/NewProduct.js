import React from 'react';
import classes from './NewProduct.module.css';

class NewProduct extends React.Component {
    state={
        asd:"",
    }
    render() {
        return(
            <div className={classes.main}>
                <div className={classes.container}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.content}>
                            <div className={classes.container}>
                                <div className={classes.heading}>
                                    <h2>Add Product</h2>
                                </div>
                            </div>
                            <div className={classes.container}>
                                <div className={classes.col}>
                                    <form>
                                        <div className={classes.form}>
                                            <label for="name">Product Name</label>    
                                            <input type="text"/>
                                        </div>
                                        <div className={classes.form}>
                                            <label for="description">Description</label>
                                            <textarea rows="3" required></textarea>
                                        </div>
                                        <div className={classes.form}>
                                            <label for="category">Category</label>    
                                            <select id="category">
                                                <option selected>Selected Category</option>
                                                <option value="1">New Arrival</option>
                                                <option value="2">Most Popular</option>
                                                <option value="3">Trending</option>
                                            </select>
                                        </div>
                                        <div className={classes.container1}>
                                            <div className={classes.form1}>
                                                <label for="expire_date">Expire Date</label>
                                                <input type="text" id="expire_date" name="expire_date" data-large-mode="true" />
                                            </div>
                                            <div className={classes.form1}>
                                                <label for="stocks">Units in Stock</label>
                                                <input type="text" id="stock" name="stock" required/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className={classes.col}>
                                    <div className={classes.avatar}>
                                        <div className={classes.icons}>
                                            <i class="fas fa-cloud-upload-alt"></i>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                                <div className={classes.btnWrapper}>
                                    <button type="submit" className={classes.btn}>ADD PRODUCT NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewProduct;