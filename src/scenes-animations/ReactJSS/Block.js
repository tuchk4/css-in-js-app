import React from 'react';
import classnames from 'classnames';
import { injectSheet } from './jss';

const styles = {
  block: {
    position: 'absolute',
    transform: props => `translate3d(${props.left}px, ${props.top}px , 0px)`,
    borderRadius: '50%',
    minWidth: '16px',
    height: '16px',
    display: 'inline-block',
    textAlign: 'center',
    padding: '15px',
    border: 'none',
    fontWeight: 'bold',
    backgroundColor: '#ffcc33',
    '&:hover': {
      backgroundColor: 'black !important',
      color: 'white',
    },
  },
};

const Block = ({ classes, className, children }) => {
  return <div className={classnames(className, classes.block)}>{children}</div>;
};

export default injectSheet(styles)(Block);
