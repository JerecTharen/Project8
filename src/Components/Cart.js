import React from 'react';
import '../Styles/ProductList.css';

import store from '../Services/ShoppingService';
import Product from './CartProduct';

class Cart extends React.Component{

    // componentDidMount() {
    //     store.subscribe(() => this.forceUpdate());
    // }

    // store = store.getState();

    render() {
        console.log(store.getState());
        const state = store.getState();
        let cartItems;
        if(state.cart.length > 0){
            cartItems = state.cart.map((cartItem)=>{
                return <div key={cartItem.id}>
                    <Product cartItem={cartItem} history={this.props.history} />
                </div>
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
