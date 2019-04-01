import React from 'react';
import '../Styles/ProductList.css';

import Product from './Product';
import FilterForm from './FilterForm';

class ProductList extends React.Component{

    state = {
        allProducts: [],
        filterString: '',
    };

    updateFilterString = (newString)=>{
        console.log('updating state', newString);
        this.setState({filterString: newString});
        console.log('new state', this.state.filterString);
    };

    getProducts = ()=>{
        fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products').then((result)=> result.json())
            .then((productResult)=>{
                // console.log(productResult);
                this.setState({allProducts: productResult});
            });
    };

    render() {
        let list;
        if(this.state.allProducts.length > 0){
            // console.log('in if statement', this.state.allProducts);
            list = this.state.allProducts.map((product)=>{
                if(this.state.filterString){
                    // console.log('in if statement');
                    if(product.title.includes(this.state.filterString)){
                        return(
                            <Product title={product.title} img={product.img} key={product.id} price={product.price} rating={product.rating} />
                        )
                    }
                    else{
                        return ''
                    }
                }
                else{
                    return(
                        <Product title={product.title} img={product.img} key={product.id} price={product.price} rating={product.rating} />
                    )
                }
            });
            // console.log(list);
        }
        else{
            list = <p>Sorry, but it appears we are out of stock! Check in later!</p>;
            this.getProducts();
        }
        return (
            <div className='productList'>
                <FilterForm changeFilter={this.updateFilterString} />
                <div className='productDisplay'>
                    {list}
                </div>

            </div>
        )
    }

}

export default ProductList;
