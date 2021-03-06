import React, { Component } from 'react';
import Store from './Services/ShoppingService';
import { BrowserRouter as Router, Route, Link,} from "react-router-dom";
import './App.css';

//components
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import ProductDisplay from './Components/ProductDisplay';


class App extends Component {

    componentDidMount() {
            Store.subscribe(() => this.forceUpdate());
    }

    render() {
      // console.log(store.state);
    return (
      <div className="App">
        <Router>
            <ul className='navBar'>
                <li><h1>E-Commerce</h1></li>
                <li><Link to='/Project8/'>Product List</Link></li>
                <li><Link to='/Project8/cart'>Shopping Cart</Link></li>

            </ul>
            <Route path='/Project8/' exact render={({history})=> <ProductList history={history} />} />
            <Route path='/Project8/cart' render={({history})=> <Cart  history={history} />} />
            <Route path='/Project8/product/:productId' render={({history, match})=> <ProductDisplay  history={history} match={match} />} />
        </Router>
      </div>
    );
  }
}

export default App;
