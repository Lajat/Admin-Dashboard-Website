import React, { Component } from 'react'
import Prod from './Prod'
import ProductCategory from './ProductCategory'
import classes from './Products.module.css'

export class Product extends Component {
    render() {
        return (
            <div className={classes.product}>
                <Prod/>
                <ProductCategory/>
            </div>
        )
    }
}

export default Product
