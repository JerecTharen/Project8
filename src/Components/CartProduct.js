import React from 'react';
import Store from '../Services/ShoppingService';
import '../Styles/CartProduct.css';
// import {Redirect} from "react-router-dom";

class CartProduct extends React.Component{
    // store = Store.getState();

    // componentDidMount() {
    //   Store.subscribe(() => this.forceUpdate());
    // }

    removeFromCart=(id)=>{
        return ()=>{
            Store.dispatch({
                type: "DELETE_FROM_CART",
                id: id,
            });
        }
    };

    updateCart = ()=>{
        let newQuant = document.getElementById('newQuant').value;
        Store.dispatch({
            type: 'UPDATE_AMOUNT',
            item: this.props.cartItem,
            amount: newQuant,
        });
    };

    displayProduct = ()=>{
        // console.log(this.props.prodRed);
        // let itemId = this.props.itemId;
        // this.props.prodRed(itemId);
        let redUrl = `/product/${this.props.cartItem.id}`;
        // console.log(redUrl);
        // return <Redirect to={redUrl}/>
        this.props.history.push(redUrl);
    };

    render() {
        // console.log('props is:', this.props);
        // console.log('testing: ', this.props.anotherTest, this.props.blue);
        return (
            <div className='cartProduct'>
                <img onClick={this.displayProduct} src={this.props.cartItem.img} alt={this.props.cartItem.title} />
                <h3>{this.props.cartItem.title}</h3>
                <p>Price: ${this.props.cartItem.price}</p>
                <p>Rating: {this.props.cartItem.rating}</p>
                <p>Quantity: {this.props.cartItem.amount}</p>
                <div className='cartItemControls'>
                    <label htmlFor='newQuant'>Quantity</label>
                    <input type='number' name='newQuant' id='newQuant' placeholder={this.props.cartItem.amount} />
                    <button onClick={this.updateCart}>UPDATE</button>
                    <button onClick={this.removeFromCart(this.props.cartItem.id)}>DELETE</button>
                </div>
            </div>
        )
    }
}

export default CartProduct;
