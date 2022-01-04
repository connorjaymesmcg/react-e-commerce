import React from 'react';
import { Container, Typography, Button, CssBaseline } from '@material-ui/core';

import useStyles from './heroStyle';

// import waterfall from '../../assets/waterfall.jpg';

import desertDunes from '../../assets/desertDunes.mp4';

const Hero = () => {
  const classes = useStyles();

  return (
    <div >
      <video
        className={classes.heroVideo}
        src={desertDunes}
        autoPlay
        muted
        loop>
      </video>
    </div>


  );
};

export default Hero;
