import React, { useState } from 'react';
import { Products } from './Products';
import Cart from './Cart';
import ProductList from './ProductList';
import './App.css';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <h1>Shopping Cart App</h1>
      <div className="container">
        <ProductList products={Products} setCart={setCart} />
        <Cart setCart={setCart} cart={cart} />
      </div>

    </div>
  );
}

export default App;
