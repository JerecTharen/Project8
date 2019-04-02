import React from 'react';

class Product extends React.Component{

    displayProduct = ()=>{
        console.log(this.props.prodRed);
        this.props.prodRed(this.props.itemId);
    };

    render() {
        // console.log('props is:', this.props);
        console.log('testing: ', this.props.anotherTest);
        return (
            <div onClick={this.displayProduct} className='product'>
                <h1>{this.props.anotherTest}</h1>
                <h3>{this.props.title}</h3>
                <img src={this.props.img} alt={this.props.title} />
                <p>Price: ${this.props.price}</p>
                <p>Rating: {this.props.rating}</p>
            </div>
        )
    }
}

export default Product;
