import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './cartItemStyles';

const CartItem = ({ item, onRemoveCartItem, onUpdateCartQty }) => {
  const classes = useStyles();





  return (
    <Card>
      <CardMedia className={classes.media} image={item.image.url} alt={item.name} />
      <CardContent className={classes.cardContent}>
        <Typography variant='h4'>{item.name}</Typography>
        <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} type='button' size='small'> - </Button>
          <Typography>{item.quantity}</Typography>
          <Button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} type='button' size='small'> + </Button>
        </div>
        <Button onClick={() => onRemoveCartItem(item.id)} variant='contained' type='button' color='secondary'>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
