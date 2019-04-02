import React from 'react';

import store from '../Services/ShoppingService';

class ProductDisplay extends React.Component{

    state = {
        product: null,
    };

    theCart = store.getState();

    componentDidMount() {
        console.log('in mount');
        fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products').then((result)=> result.json())
            .then((productResult)=>{
                console.log(productResult);
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

    addToCart=()=>{
        store.dispatch({
            type: 'ADD_TO_CART',
            item: this.state.product,
        });
    };

    render() {
        if(this.state.product){
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
        else{
            return(
                <h1>We're sorry, there was an error loading this product.</h1>
            )
        }
    }
}

export default ProductDisplay;
