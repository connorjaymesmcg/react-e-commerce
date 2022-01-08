import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { CssBaseline } from '@material-ui/core';

import { Products, Navbar, Cart, Checkout, Hero } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// TODO create store/context to avoid prop drilling

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

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

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <CssBaseline>
        <div>
          <Navbar cartProducts={cart} />
          <Switch>
            <Route exact path="/">
              <Hero />
              <Products products={products} onAddToCart={addToCartHandler} />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} onEmptyCartHandler={clearCartHandler} onUpdateCartQty={updateCartQtyHandler} onRemoveCartItem={removeCartItemHandler} />
            </Route>
            <Route exact path="/checkout">
              <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
            </Route>
          </Switch>
        </div>
      </CssBaseline>
    </Router>
  );
};

export default App;
