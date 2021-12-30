import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

import useStyles from './productsStyles';

const products = [
  { id: 1, name: 'Shoes', description: 'Skate shoes', price: '$5', image: 'https://picsum.photos/id/0/200/300' },
  { id: 2, name: 'MacBook Pro', description: 'Apple MacBook', price: '$3000', image: 'https://picsum.photos/id/0/200/300' },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent='center' spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
