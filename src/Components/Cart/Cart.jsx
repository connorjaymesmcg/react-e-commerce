import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './cartStyles';
import CartItem from './CartItem/CartItem';



const Cart = ({ cart, onEmptyCartHandler, onRemoveCartItem, onUpdateCartQty }) => {
  const classes = useStyles();



  const EmptyCart = () => {
    return (
      <Typography variant='subtitle1' align='center'>
        <Link to='/' className={classes.link}> No items in cart. Start adding some!</Link>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <div>
                <CartItem onRemoveCartItem={onRemoveCartItem} onUpdateCartQty={onUpdateCartQty} item={item} />
              </div>
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant='h4'>
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button onClick={onEmptyCartHandler} className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
            <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
          </div>
        </div>
      </>
    );
  };

  // TODO: better error handling
  if (!cart.line_items) return 'Loading...';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
      {!cart.total_items ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
