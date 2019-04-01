import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

//components
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import store from './Services/ShoppingService';

class App extends Component {
  render() {
      console.log(store.state);
    return (
      <div className="App">
        <Router>
            <ul className='navBar'>
                <li><h1>E-Commerce</h1></li>
                <li><Link to='/'>Product List</Link></li>
                <li><Link to='/cart'>Shopping Cart</Link></li>

            </ul>
            <Route path='/' exact component={ProductList} />
            <Route path='/cart' component={Cart} />
        </Router>
      </div>
    );
  }
}

export default App;
