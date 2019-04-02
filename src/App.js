import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,} from "react-router-dom";
import './App.css';

//components
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import ProductDisplay from './Components/ProductDisplay';


class App extends Component {

    productRedirect = (itemId)=>{
        console.log('in prodRed');
        let redUrl = `/product/${itemId}`;
        console.log(redUrl);
        console.log(this.props.history);
        // return <Redirect to={redUrl} />
        // BrowserRouter.history.push(redUrl);
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
            <Route path='/' exact render={({history})=> <ProductList productRedirect={this.productRedirect} history={history} />} />
            <Route path='/cart' render={({history})=> <Cart productRedirect={this.productRedirect} history={history} />} />
            <Route path='/product/:productId' component={ProductDisplay} />
        </Router>
      </div>
    );
  }
}

export default App;
