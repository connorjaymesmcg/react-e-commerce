import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar, Cart } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// TODO create store/context to avoid prop drilling

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  const addToCartHandler = async (productId, qty) => {
    const item = await commerce.cart.add(productId, qty);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar cartProducts={cart}  />
        {/* <Products products={products} onAddToCart={addToCartHandler} /> */}
        <Cart cart={cart} />
      </div>
    </Router>
  );
};

export default App;
