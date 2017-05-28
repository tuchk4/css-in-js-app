import React from 'react';
import { injectSheet } from './jss';
import colors from '../../utils/colors';

const styles = {
  block: {
    color: 'red',
    minWidth: '16px',
    height: '16px',
    display: 'inline-block',
    textAlign: 'center',
    padding: '15px',
    border: 'none',
    fontWeight: 'bold',
    backgroundColor: props =>
      props.isPrimary ? colors[props.i][1] : colors[props.i][0],
    '&:hover': {
      backgroundColor: 'black !important',
      color: 'white',
    },
  },
};

const Block = ({ classes, className, children }) => {
  return <div className={`${className} ${classes.block}`}>{children}</div>;
};

export default injectSheet(styles)(Block);
