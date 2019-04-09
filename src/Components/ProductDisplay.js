import React from 'react';

import store from '../Services/ShoppingService';

class ProductDisplay extends React.Component{

    state = {
        product: null,
    };

    theCart = store.getState();

    inCart = false;

    prodAmount = null;

    componentWillMount() {
        // console.log('hello there');
        this.theCart.cart.forEach((item)=>{
            // console.log('iterating for:', item);
            // console.log(this.props.match.params.productId);
            // console.log(item.id === Number(this.props.match.params.productId));
            if(item.id === Number(this.props.match.params.productId)){
                // console.log('in if statement');
                this.inCart = true;
                this.prodAmount = item.amount;
            }
        });
        // store.subscribe(() => this.forceUpdate());
        // console.log('in mount');
        fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products').then((result)=> result.json())
            .then((productResult)=>{
                // console.log(productResult);
                productResult.forEach((product)=>{
                    // console.log(product);
                    // console.log(typeof(this.props.match.params.productId));
                    // console.log();
                    if(product.id === Number(this.props.match.params.productId)){
                        this.setState({product: product});
                    }
                });
            });
    }

    // resetState=()=>{
    //     let sameState = this.state.product;
    //     this.setState({product: sameState});
    // };

    addToCart=()=>{
        if(!this.inCart){
            store.dispatch({
                type: 'ADD_TO_CART',
                item: this.state.product,
            });
        }
        // this.resetState();
    };

    removeFromCart = ()=>{
        store.dispatch({
            type: 'DELETE_FROM_CART',
            id: this.state.product.id,
        });
        // this.resetState();
    };

    updateCart = ()=>{
        let newQuant = document.getElementById('newQuant').value;
        store.dispatch({
            type: 'UPDATE_AMOUNT',
            item: this.state.product,
            amount: newQuant,
        });
    };

    render() {
      // console.log(this.theCart);
        if(this.state.product && !this.inCart){
            return (
                <div>
                    <h1>{this.state.product.title}</h1>
                    <img src={this.state.product.img} alt={this.state.product.title} />
                    <h3>${this.state.product.price}</h3>
                    <h3>Rating: {this.state.product.rating}</h3>
                    <div className='controls'>
                        <button onClick={this.addToCart}>ADD TO CART</button>
                    </div>
                </div>
            )
        }
        else if(this.state.product && this.inCart){
          return (
            <div>
              <h1>{this.state.product.title}</h1>
              <img src={this.state.product.img} alt={this.state.product.title} />
              <h3>${this.state.product.price}</h3>
              <h3>Rating: {this.state.product.rating}</h3>
              <h3>Quantity: {this.prodAmount}</h3>
              <div className='controls'>
                <label htmlFor='newQuant'>New Quantity</label>
                <input type='number' name='newQuant' id='newQuant' placeholder={this.prodAmount} />
                <button onClick={this.updateCart}>UPDATE</button>
                <button onClick={this.removeFromCart}>REMOVE FROM CART</button>
              </div>
            </div>
          )
        }
        else{
            return(
                <h1>We're sorry, there was an error loading this product.</h1>
            )
        }
    }
}

export default ProductDisplay;
