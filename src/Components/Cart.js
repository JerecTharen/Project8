import React from 'react';
import '../Styles/ProductList.css';

import store from '../Services/ShoppingService';
import Product from './CartProduct';

class Cart extends React.Component{

    // componentDidMount() {
    //     store.subscribe(() => this.forceUpdate());
    // }

    // store = store.getState();

    removeFromCart=(id)=>{
        return ()=>{
            store.dispatch({
                type: "DELETE_FROM_CART",
                id: id,
            });
        }
    };

    render() {
        // console.log(store.getState());
        const state = store.getState();
        let cartItems;
        if(state.cart.length > 0){
            cartItems = state.cart.map((cartItem)=>{
                return <div key={cartItem.id}>
                    <Product amount={cartItem.amount} productRedirect={this.props.productRedirect} title={cartItem.title} img={cartItem.img} price={cartItem.price} history={this.props.history} rating={cartItem.rating} itemId={cartItem.id} />
                    <button onClick={this.removeFromCart(cartItem.id)}>REMOVE FROM CART</button>
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
