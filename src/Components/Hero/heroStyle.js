import { makeStyles } from '@material-ui/core/styles';

import waterfall from '../../assets/waterfall.jpg';

export default makeStyles((theme) => ({
  container: {
    boxSizing: 'border-box',
    height: '100vh',
    // width: '100vw',
    margin: '0 auto',
    position: 'relative',
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  heroVideo: {
    minWidth: '100%',
    minHeight: '100%',
    top: '50%',
    right: '50px',
    width: 'auto',
    height: 'auto',
    // transform: 'translate(-50%, -50%)',
  },
  buttonContainer: {
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
  },
  button: {
    letterSpacing: '1.02857em',
    textIndent: '1.02857em',
    color: '#9837b2 ',
    fontSize: '1.5rem',
  },
}));
