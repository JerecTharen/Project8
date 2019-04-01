import React, { Component } from 'react';
import './App.css';

//componenets
import ProductList from './Components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>E-Commerce</h1>
        <ProductList />
      </div>
    );
  }
}

export default App;
