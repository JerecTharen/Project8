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
        // console.log('updating state', newString);
        this.setState({filterString: newString});
        // console.log('new state', this.state.filterString);
    };

    // getProducts = ()=>{
    //     fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products').then((result)=> result.json())
    //         .then((productResult)=>{
    //             // console.log(productResult);
    //             this.setState({allProducts: productResult});
    //         });
    // };

    componentWillMount() {
        fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products').then((result)=> result.json())
            .then((productResult)=>{
                // console.log(productResult);
                this.setState({allProducts: productResult});
            });
    }

    prodRedirect = (itemId)=>{
        console.log(itemId);
        this.props.productRedirect(itemId);
    };

    render() {
        // console.log(this.props.productRedirect);
        // console.log(this.props.myTest);
        // console.log('props is: ', this.props);
        // console.log('newProps is: ', newProps);
        // console.log(this.props.history);
        let list;
        if(this.state.allProducts.length > 0){
            // console.log('in if statement', this.state.allProducts);
            list = this.state.allProducts.map((product)=>{
                if(this.state.filterString){
                    // console.log('in if statement');
                    if(product.title.includes(this.state.filterString)){
                        return(
                            <Product
                                itemId={product.id}
                                title={product.title}
                                img={product.img}
                                key={product.id}
                                price={product.price}
                                rating={product.rating}
                                prodRed={this.prodRedirect}
                                history={this.props.history}
                            />
                        )
                    }
                    else{
                        return ''
                    }
                }
                else{
                    return(
                        <Product
                            itemId={product.id}
                            title={product.title}
                            img={product.img}
                            key={product.id}
                            price={product.price}
                            rating={product.rating}
                            prodRed={this.prodRedirect}
                            history={this.props.history}
                        />
                    )
                }
            });
            // console.log(list);
        }
        else{
            list = <p>Sorry, but it appears we are out of stock! Check in later!</p>;
            // this.getProducts();
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
