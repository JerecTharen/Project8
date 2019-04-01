import React from 'react';

class Product extends React.Component{
    render() {
        // console.log('props is:', this.props);
        return (
            <div className='product'>
                <h3>{this.props.title}</h3>
                <img src={this.props.img} alt={this.props.title} />
                <p>Price: ${this.props.price}</p>
                <p>Rating: {this.props.rating}</p>
            </div>
        )
    }
}

export default Product;
