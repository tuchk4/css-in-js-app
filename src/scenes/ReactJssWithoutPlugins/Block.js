import React from 'react';
import classnames from 'classnames';
import colors from '../../utils/colors';
import { injectSheet } from './jss';

const styles = {
  block: {
    'min-width': '16px',
    height: '16px',
    display: 'inline-block',
    'text-align': 'center',
    padding: '15px',
    border: 'none',
    'font-weight': 'bold',
    'background-color': props =>
      props.isPrimary ? colors[props.i][1] : colors[props.i][0],
  },
};

const Block = ({ i, isPrimary, classes, className, children }) => {
  return (
    <div
      className={classnames(className, classes.block, classes.blockBackground)}
    >
      {children}
    </div>
  );
};

export default injectSheet(styles)(Block);
