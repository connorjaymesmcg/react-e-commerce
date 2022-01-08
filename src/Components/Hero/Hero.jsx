import React from 'react';
import { Container, Typography, Button, CssBaseline, Grid, } from '@material-ui/core';

import useStyles from './heroStyle';

// import waterfall from '../../assets/waterfall.jpg';

import desertDunes from '../../assets/desertDunes.mp4';

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container justifyContent='center' maxWidth='xl'>
        <Grid item>
          <div className={classes.videoContainer}>
            <video
              className={classes.heroVideo}
              src={desertDunes}
              autoPlay
              muted
              loop
            >
            </video>
          </div>
        </Grid>
        <Grid className={classes.button} item>
          <Button>Proceed</Button>
        </Grid>
      </Grid>
    </div >

  );
};

export default Hero;
