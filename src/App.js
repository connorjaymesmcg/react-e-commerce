import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar, Cart, Checkout } from './Components';
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

  const updateCartQtyHandler = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const removeCartItemHandler = async (productId, qty) => {
    const { cart } = await commerce.cart.remove(productId, qty);
    setCart(cart);
  };

  const clearCartHandler = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar cartProducts={cart} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={addToCartHandler} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onEmptyCartHandler={clearCartHandler} onUpdateCartQty={updateCartQtyHandler} onRemoveCartItem={removeCartItemHandler} />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
