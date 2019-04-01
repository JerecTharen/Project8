import React from 'react';
import '../Styles/ProductList.css';

import Product from './Product';

class ProductList extends React.Component{

    state = {
        allProducts: [],
    };

    getProducts = ()=>{
        fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products').then((result)=> result.json())
            .then((productResult)=>{
                console.log(productResult);
                this.setState({allProducts: productResult});
            });
    };

    render() {
        let list;
        if(this.state.allProducts.length > 0){
            console.log('in if statement', this.state.allProducts);
            list = this.state.allProducts.map((product)=>{
                return(
                    <Product title={product.title} img={product.img} key={product.id} price={product.price} rating={product.rating} />
                )
            });
            console.log(list);
        }
        else{
            list = <p>Sorry, but it appears we are out of stock! Check in later!</p>
            this.getProducts();
        }
        return (
            <div className='productList'>
                {list}
            </div>
        )
    }

}

export default ProductList;
