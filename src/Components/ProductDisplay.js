import React from 'react';

class ProductDisplay extends React.Component{
    render() {
        return (
            <div>
                <h1>Product Display: {this.props.match.params.productId}</h1>
                
            </div>
        )
    }
}

export default ProductDisplay;
