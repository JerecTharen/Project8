import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './App.css';

//components
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import store from './Services/ShoppingService';
import ProductDisplay from './Components/ProductDisplay';

class App extends Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    productRedirect = (itemId)=>{
        let redUrl = `/product/${itemId}`;
        return <Redirect to={redUrl} />
    };

  render() {
      // console.log(store.state);
    return (
      <div className="App">
        <Router>
            <ul className='navBar'>
                <li><h1>E-Commerce</h1></li>
                <li><Link to='/'>Product List</Link></li>
                <li><Link to='/cart'>Shopping Cart</Link></li>

            </ul>
            <Route path='/' exact render={()=> <ProductList productRedirect={this.productRedirect} myTest='hellow there' />} />
            <Route path='/cart' render={()=> <Cart productRedirect={this.productRedirect} />} />
            <Route path='/product/:productId' component={ProductDisplay} />
        </Router>
      </div>
    );
  }
}

export default App;
