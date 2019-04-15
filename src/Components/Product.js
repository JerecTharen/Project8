import React from 'react';
import '../Styles/Product.css';
// import Store from '../Services/ShoppingService';
// import {Redirect} from "react-router-dom";

class Product extends React.Component{
    // store = Store.getState();

    // componentDidMount() {
    //   Store.subscribe(() => this.forceUpdate());
    // }

    displayProduct = ()=>{
        // console.log(this.props.prodRed);
        // let itemId = this.props.itemId;
        // this.props.prodRed(itemId);
        let redUrl = `/Project8/product/${this.props.itemId}`;
        // console.log(redUrl);
        // return <Redirect to={redUrl}/>
        this.props.history.push(redUrl);
    };

    render() {
        // console.log('props is:', this.props);
        // console.log('testing: ', this.props.anotherTest, this.props.blue);
        return (
            <div onClick={this.displayProduct} className='product'>
                <img src={this.props.img} alt={this.props.title} />
                <h3>{this.props.title}</h3>
                <p>Price: ${this.props.price}</p>
                <p>Rating: {this.props.rating}</p>
            </div>
        )
    }
}

export default Product;
