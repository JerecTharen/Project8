import React from 'react';
import '../Styles/ProductList.css';

import store from '../Services/ShoppingService';
import Product from './Product';

class Cart extends React.Component{

    render() {
        console.log(store.getState());
        const state = store.getState();
        let cartItems;
        if(state.cart){
            cartItems = state.cart.map((cartItem)=>{
                return <Product productRedirect={this.props.productRedirect} key={cartItem.id} title={cartItem.title} img={cartItem.img} price={cartItem.price} rating={cartItem.rating} />
            });
        }
        else{
            cartItems = <h3>Your cart is empty. Please return to the product list page!</h3>
        }
        return(
            <div className='productList'>
                <h1>Shopping Cart</h1>
                {cartItems}
            </div>
        )
    }
}

export default Cart;
