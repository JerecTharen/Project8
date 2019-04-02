import React from 'react';

class ProductDisplay extends React.Component{
    render() {
        return (
            <h1>Product Display: {this.props.match.params.productId}</h1>
        )
    }
}

export default ProductDisplay;
